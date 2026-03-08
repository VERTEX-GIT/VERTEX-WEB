import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/logo_white.svg"
                            alt="VERTEX Logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <span className={styles.logoText}>VERTEX</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
