CLAUDE.md — VERTEX Official Website
1. Project Overview
This document is the Single Source of Truth (SSoT) for AI agents to ensure consistency and efficiency
.
Goal: Club branding, department showcase, and blog for VERTEX (Dankook SW High School).
Core Message: "Launch ideas into actual Products."
Tech Stack: Next.js 14 (App Router), TypeScript (Strict), Only CSS (NO Tailwind), pnpm, Vercel
.
2. Business Logic Invariants (DO NOT MODIFY)
These rules are immutable to maintain brand identity and club positioning
.
Vocabulary: NEVER use 창업 (Entrepreneurship) or 스타트업 (Startup). ALWAYS use 출시 (Launch), 배포 (Deploy), 수익화 (Monetization), or 서비스 런칭
.
Design Constraints: NO generic fonts (Inter, Roboto, Arial). NO purple-toned gradients.
Background: Always #1d1d1d (Pure black). Orange (#FF6000) is for CTA, labels, and accents only
.
Technical: Use Server Components by default. "use client" is for interaction-only components
.
3. Design System & Tokens
Colors: --bg: #1d1d1d, --accent: #FF6000. Use white opacity (e.g., white/50) for mid-tones
.
Typography:
Display: 태나다 체 (Self-host woff2). Fallback: Pretendard (weight 900)
.
Body/UI: Pretendard (Self-host).
Layout: Max-width 1100px, Section padding py-24 px-8 (Mobile: py-16 px-6), Card radius 12px
.
4. Project Structure & Workflow
Directory Logic:
layout/: Framework | ui/: Atoms | landing/: Landing sections | lib/constants.ts: Content data
.
Data/View Separation: All content (department info, philosophy) MUST be in lib/constants.ts. No hardcoding in components
.
Navigation: Main navbar is for site-wide routes. Internal anchors (#) are for landing sections only
.
5. Common Commands
pnpm dev: Start development server
.
pnpm build: Production build.
tsc --noEmit: Type check
.
6. AI Agent Behavior Rules
Language: Use English for internal reasoning/planning (Token optimization) but Korean for all UI strings and final outputs
.
Verification: Always verify if a server component can be used before adding "use client"
.
Korean Grammar: Strictly follow Korean spacing rules (e.g., "동아리입니다" O, "동아리 입니다" X)
.
Planning: Use Plan Mode (Shift+Tab x2) for complex architecture changes before execution
./i