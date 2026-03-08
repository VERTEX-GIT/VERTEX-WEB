import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'primary' | 'ghost'
  href?: string
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type="button">
      {children}
    </button>
  )
}
