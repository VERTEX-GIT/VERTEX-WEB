export const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'TEAM', href: '#teams' },
  { label: 'APPLY', href: '#apply' },
]

export const DEPARTMENTS = [
  {
    id: 'game',
    name: 'Game',
    tagline: '게임을 만들고 스토어에 출시합니다',
    description: 'Unity를 활용해 2D·3D 게임을 직접 기획하고 개발합니다. 레벨 디자인, 물리 엔진, UI 구현부터 최적화까지 게임 개발의 전체 파이프라인을 경험하며, 최종적으로 Steam 스토어에 배포하는 것을 목표로 합니다. 게임 개발 경험이 없어도 괜찮습니다. 2학년 멘토가 엔진 사용법부터 출시 프로세스까지 함께합니다.',
    leader: {
      name: '모재현',
      role: '게임부장 / 20506',
      contact: 'maihyun0328@gmail.com',
      portfolioImages: [
        '/asset/game1.png',
        '/asset/game2.png',
        '/asset/game3.png',
        '/asset/game4.png'
      ]
    }
  },
  {
    id: 'web-saas',
    name: 'Web & SaaS',
    tagline: '웹 서비스를 설계하고 수익화합니다',
    description: '프론트엔드부터 백엔드, 배포 인프라까지 직접 구축합니다. 단순 포트폴리오용 웹사이트가 아니라, 실제 사용자가 쓸 수 있는 SaaS 제품을 만들고 출시하는 것이 목표입니다. 기획 단계에서 수익 구조까지 설계하며, 사업자등록을 통한 실제 서비스 운영까지 연결합니다. 코드를 처음 접하는 1학년도 멘토링을 통해 한 학기 안에 실제 서비스 개발에 참여할 수 있습니다.',
    leader: {
      name: '김건우',
      role: '동아리 회장 , Web & SaaS부장 / 20503',
      contact: 'contact@aidengoldkr.dev',
      portfolioImages: [
        '/asset/web1.png',
        '/asset/web2.png',
        '/asset/web3.png',
        '/asset/web4.png'
      ]
    }
  },
  {
    id: 'physical-computing',
    name: 'Physical Computing',
    tagline: '소프트웨어와 하드웨어를 통합합니다',
    description: '아두이노, 센서, 3D 프린팅을 결합해 소프트웨어로 제어되는 하드웨어 제품을 직접 설계하고 제작합니다. 화면 안에서만 동작하는 프로젝트가 아니라, 실제로 손에 잡히는 결과물을 만드는 부서입니다. 회로 설계나 프로그래밍 경험이 없어도 기초부터 함께 시작합니다.',
    leader: {
      name: '서우진',
      role: '피지컬 컴퓨팅부장 / 20406',
      contact: 'woojinchris15@gmail.com',
      portfolioImages: [
        '/asset/robot1.png',
        '/asset/robot2.png'
      ]
    }
  },
]

export const PHILOSOPHY = [
  {
    keyword: 'Think',
    description: '문제를 정의하고 실현 가능한 제품을 설계합니다.',
  },
  {
    keyword: 'Build',
    description: '직접 만들며 기술을 제품 수준으로 끌어올립니다.',
  },
  {
    keyword: 'Launch',
    description: '완성된 제품을 세상에 출시하고 유저를 확보합니다.',
  },
]

export const MENTORING_SYSTEM = [
  {
    index: '01',
    label: '매칭',
    description: '부서별로 멘토-멘티가 매칭됩니다',
  },
  {
    index: '02',
    label: '협업',
    description: '다같이 설계한 로드맵을 기반으로 함께 개발합니다',
  },
  {
    index: '03',
    label: '출시',
    description: '멘토와 멘티가 공동으로 제품을 완성하고 배포합니다',
  },
]