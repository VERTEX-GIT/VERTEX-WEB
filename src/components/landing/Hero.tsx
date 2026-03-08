import Button from '@/components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.bgLogo} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.label} style={{ animationDelay: '0.1s' }}>
          VERTEX (디지털융합제품개발동아리)
        </p>
        <h1 className={styles.headline} style={{ animationDelay: '0.3s' }}>
          Think. Build. <span className={styles.highlight}>Launch.</span>
        </h1>
        <p className={styles.sub} style={{ animationDelay: '0.5s' }}>
          아이디어에서 그치지 않고, 세상에 내놓을 제품으로
        </p>
        <div className={styles.cta} style={{ animationDelay: '0.7s' }}>
          <Button href="#apply" variant="primary">
            지원하기
          </Button>
          <Button href="#teams" variant="ghost">
            부서 살펴보기
          </Button>
        </div>
      </div>
    </section>
  )
}
