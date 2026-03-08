import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Image
                                src="/logo_white.svg"
                                alt="VERTEX Logo"
                                width={28}
                                height={28}
                            />
                            <span className={styles.logoText}>VERTEX</span>
                        </div>
                        <p className={styles.tagline}>
                            Think. Build. Launch.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <span className={styles.groupTitle}>Socials</span>
                            <a href="https://github.com/VERTEX-GIT" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles.linkGroup}>
                            <span className={styles.groupTitle}>Contact</span>
                            <a href="mailto:contact@aidengoldkr.dev">contact@aidengoldkr.dev</a>
                            <span>단국대학교소프트웨어고등학교</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} VERTEX. All rights reserved.
                    </p>
                    <div className={styles.credits}>
                        Designed & Developed by VERTEX Team & Photon
                    </div>
                </div>
            </div>
        </footer>
    )
}
