'use client'

import { useState, useEffect } from 'react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { DEPARTMENTS, APPLICATION_DEADLINE } from '@/lib/constants'
import styles from './InterviewForm.module.css'

export default function InterviewForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [isDeadlinePassed, setIsDeadlinePassed] = useState(false)

    useEffect(() => {
        const checkDeadline = () => {
            setIsDeadlinePassed(Date.now() > APPLICATION_DEADLINE.getTime())
        }
        checkDeadline()
        // Optional: check every minute if we are close to the deadline
        const timer = setInterval(checkDeadline, 60000)
        return () => clearInterval(timer)
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                const errorData = await res.json()
                throw new Error(errorData.message || '신청 중 오류가 발생했습니다.')
            }

            setStatus('success')
        } catch (err: any) {
            setErrorMessage(err.message)
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <Section id="apply">
                <div className={styles.successContainer}>
                    <ScrollReveal>
                        <div className={styles.successIcon}>✓</div>
                        <h2 className={styles.successTitle}>신청이 완료되었습니다!</h2>
                        <p className={styles.successDesc}>
                            지원해주셔서 감사합니다. 서류 검토 후 입력하신 연락처로 면접 일정을 안내해 드리겠습니다.
                        </p>
                        <button
                            className={styles.resetBtn}
                            onClick={() => setStatus('idle')}
                        >
                            홈으로 돌아가기
                        </button>
                    </ScrollReveal>
                </div>
            </Section>
        )
    }

    return (
        <Section id="apply">
            <ScrollReveal>
                <p className={styles.sectionLabel}>APPLY</p>
                <h2 className={styles.sectionTitle}>면접 신청하기</h2>
                <p className={styles.sectionDesc}>
                    VERTEX와 함께 성장을 꿈꾸는 여러분을 기다립니다.<br />
                    아래 폼을 작성하여 제출해 주세요.
                </p>
            </ScrollReveal>

            <div className={styles.formWrapper}>
                {isDeadlinePassed ? (
                    <ScrollReveal>
                        <div className={styles.deadlineMsg}>
                            <div className={styles.deadlineIcon}>⏰</div>
                            <h3 className={styles.deadlineTitle}>신청 기간이 종료되었습니다</h3>
                            <p className={styles.deadlineDesc}>
                                VERTEX 2026학기 신입 부원 모집이 마감되었습니다.<br />
                                지원해 주신 모든 분들께 감사드립니다.
                            </p>
                        </div>
                    </ScrollReveal>
                ) : (
                    <ScrollReveal delay={200}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="grade">학년</label>
                                    <select id="grade" name="grade" required>
                                        <option value="">선택</option>
                                        <option value="1">1학년</option>
                                        <option value="2">2학년</option>
                                        <option value="3">3학년</option>
                                    </select>
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="classNum">반</label>
                                    <select id="classNum" name="classNum" required>
                                        <option value="">선택</option>
                                        {[...Array(5)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1}반</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="studentId">번호</label>
                                    <input type="number" id="studentId" name="studentId" placeholder="번호" required min="1" max="20" />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="name">이름</label>
                                    <input type="text" id="name" name="name" placeholder="이름" required />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="phone">전화번호</label>
                                    <input type="tel" id="phone" name="phone" placeholder="010-0000-0000" required pattern="[0-9\-]+" />
                                </div>
                            </div>

                            {/* Honeypot Field (Bot Trap) */}
                            <div style={{ display: 'none' }} aria-hidden="true">
                                <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
                                <input type="hidden" name="form_timestamp" value={Date.now()} />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="department">희망부</label>
                                <select id="department" name="department" required>
                                    <option value="">부서 선택</option>
                                    {DEPARTMENTS.map(dept => (
                                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="intro">자기소개</label>
                                <textarea id="intro" name="intro" placeholder="본인에 대해 자유롭게 소개해 주세요." required rows={4}></textarea>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="motivation">지원동기</label>
                                <textarea id="motivation" name="motivation" placeholder="VERTEX에 지원하게 된 계기를 적어주세요." required rows={4}></textarea>
                            </div>

                            {status === 'error' && (
                                <div className={styles.errorMsg}>
                                    {errorMessage}
                                </div>
                            )}

                            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                {status === 'loading' ? '제출 중...' : '지원하기'}
                            </button>
                        </form>
                    </ScrollReveal>
                )}
            </div>
        </Section>
    )
}
