import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { PHILOSOPHY, MENTORING_SYSTEM } from '@/lib/constants'
import styles from './About.module.css'

export default function About() {
  return (
    <Section id="about">
      {/* 1. Header & Introduction (Full Width) */}
      <div className={styles.introHeader}>
        <ScrollReveal>
          <p className={styles.sectionLabel}>ABOUT</p>
          <h2 className={styles.sectionTitle}>VERTEX</h2>
          <p className={styles.introContent}>
            VERTEX는 단국대학교소프트웨어고등학교의 디지털융합제품개발 동아리입니다.
            아이디어를 프로토타입에 그치지 않고 실제 제품으로 만들어 출시하는 것을 목표로 합니다.
            Game, Web & SaaS, Physical Computing 세 부서가 각자의 기술 영역에서 제품을 개발하며,
            2학년 멘토와 1학년 멘티가 함께 프로젝트를 수행하는 구조로 운영됩니다.
          </p>
        </ScrollReveal>
      </div>

      {/* 2. Split Content (2 Column Grid) */}
      <div className={styles.splitGrid}>
        {/* Left Column: Philosophy */}
        <div className={styles.column}>
          <ScrollReveal>
            <p className={styles.columnLabel}>Slogan</p>
            <h3 className={styles.columnTitle}>VERTEX Three Step</h3>
          </ScrollReveal>
          <div className={styles.columnList}>
            {PHILOSOPHY.map((item, i) => (
              <ScrollReveal key={item.keyword} delay={i * 100}>
                <div className={styles.columnItem}>
                  <div className={styles.keyword}>{item.keyword}</div>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column: Mentoring System */}
        <div className={styles.column}>
          <ScrollReveal>
            <p className={styles.columnLabel}>MENTORING</p>
            <h3 className={styles.columnTitle}>멘토링 시스템</h3>
          </ScrollReveal>

          <p className={styles.columnDesc}>
            모든 프로젝트는 2학년 멘토와 1학년 멘티가 함께 수행합니다.
            멘토는 기술 방향을 설계하고, 멘티는 실제 구현에 참여하며 함께 성장합니다.
          </p>

          <div className={styles.infographicWrapper}>
            <ScrollReveal>
              <div className={styles.infographic}>
                <div className={styles.centerCircle}>
                  <span>MENTORING<br />SYSTEM</span>
                </div>
                <div className={styles.orbit}>
                  {MENTORING_SYSTEM.map((item, i) => (
                    <div key={item.index} className={`${styles.orbitItem} ${styles[`step${i + 1}`]}`}>
                      <div className={styles.node}>
                        <span className={styles.nodeIndex}>{item.index}</span>
                        <span className={styles.nodeLabel}>{item.label}</span>
                      </div>
                      <div className={styles.nodeInfo}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                  <svg className={styles.connections} viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255, 96, 0, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
