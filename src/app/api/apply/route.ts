import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

// Validation Schema
const applicationSchema = z.object({
    grade: z.string().min(1),
    classNum: z.string().min(1),
    studentId: z.string().min(1),
    name: z.string().min(2, "이름은 2글자 이상이어야 합니다."),
    phone: z.string().regex(/^[0-9\-]+$/, "전화번호는 숫자와 하이픈만 입력 가능합니다."),
    department: z.string().min(1),
    intro: z.string().min(10, "자기소개는 10자 이상 작성해 주세요."),
    motivation: z.string().min(10, "지원동기는 10자 이상 작성해 주세요."),
    hp_field: z.string().optional(),
    form_timestamp: z.string().optional(),
})

// Simple in-memory rate limiters (Note: resets on server restart/serverless cold start)
const ipCache = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_PER_WINDOW = 5 // Max 5 submissions per hour per IP

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // 1. Validate input
        const validatedData = applicationSchema.parse(body)

        // 2. Security Checks
        // Honeypot check
        if (validatedData.hp_field) {
            return NextResponse.json({ message: 'Bot detected' }, { status: 403 })
        }

        // Speed check (min 3 seconds to fill form)
        if (validatedData.form_timestamp) {
            const timeDiff = Date.now() - parseInt(validatedData.form_timestamp)
            if (timeDiff < 3000) {
                return NextResponse.json({ message: '너무 빠른 제출입니다. 잠시 후 다시 시도해 주세요.' }, { status: 429 })
            }
        }

        // 3. Get client IP
        const forwarded = req.headers.get('x-forwarded-for')
        const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

        // 4. Rate Limiting Check
        const now = Date.now()
        const userRateData = ipCache.get(ip) || { count: 0, lastReset: now }

        if (now - userRateData.lastReset > RATE_LIMIT_WINDOW) {
            userRateData.count = 0
            userRateData.lastReset = now
        }

        if (userRateData.count >= MAX_PER_WINDOW) {
            return NextResponse.json(
                { message: '너무 많은 요청을 보냈습니다. 한 시간 뒤에 다시 시도해 주세요.' },
                { status: 429 }
            )
        }

        userRateData.count += 1
        ipCache.set(ip, userRateData)

        // 5. Initialize Supabase
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

        if (!supabaseUrl || !supabaseKey) {
            console.error('Supabase credentials missing')
            return NextResponse.json(
                { message: '서버 설정 오류가 발생했습니다. 개발자에게 문의하세요.' },
                { status: 500 }
            )
        }

        const supabase = createClient(supabaseUrl, supabaseKey)

        // 4. Check for duplicate application
        const { data: existingEntry, error: checkError } = await supabase
            .from('applications')
            .select('id')
            .eq('grade', parseInt(validatedData.grade))
            .eq('class', parseInt(validatedData.classNum))
            .eq('number', parseInt(validatedData.studentId))
            .maybeSingle()

        if (existingEntry) {
            return NextResponse.json(
                { message: '이미 이 학년, 반, 번호로 신청이 완료되었습니다.' },
                { status: 409 }
            )
        }

        if (checkError) {
            console.error('Supabase Check Error:', checkError)
            throw new Error('데이터 확인 중 오류가 발생했습니다.')
        }

        // 5. Insert into Supabase
        const { error: insertError } = await supabase.from('applications').insert([
            {
                grade: parseInt(validatedData.grade),
                class: parseInt(validatedData.classNum),
                number: parseInt(validatedData.studentId),
                name: validatedData.name,
                phone: validatedData.phone,
                department: validatedData.department,
                intro: validatedData.intro,
                motivation: validatedData.motivation,
                ip_address: ip,
                created_at: new Date().toISOString(),
            },
        ])

        if (insertError) {
            console.error('Supabase Insert Error:', insertError)
            throw new Error('데이터베이스 저장 중 오류가 발생했습니다.')
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 })

    } catch (err: any) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(
                { message: err.issues[0].message },
                { status: 400 }
            )
        }

        return NextResponse.json(
            { message: err.message || '알 수 없는 오류가 발생했습니다.' },
            { status: 500 }
        )
    }
}
