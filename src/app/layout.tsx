import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VERTEX',
  description: 'Think. Build. Launch. / 아이디어를 실제 제품으로 출시하는 단국대학교소프트웨어고등학교 디지털융합제품개발 동아리 VERTEX입니다.',
  keywords: ['DKSH', '단대소고', 'VERTEX', '개발동아리', '고등학교동아리'],

  // 오픈 그래프 (카톡, 페이스북 등 공유 시)
  openGraph: {
    title: 'VERTEX',
    description: 'Think. Build. Launch. / DKSH 디지털융합제품개발 동아리',
    url: 'https://vertex-dksh.org', // 실제 도메인 주소
    siteName: 'VERTEX',
    images: [
      {
        url: '/asset/og.png',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  // 트위터 (X) 카드
  twitter: {
    card: 'summary_large_image',
    title: 'VERTEX',
    description: 'Think. Build. Launch. / DKSH 디지털융합제품개발 동아리',
    images: ['/asset/og.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
