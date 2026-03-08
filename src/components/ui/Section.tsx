import styles from './Section.module.css'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(' ')}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
