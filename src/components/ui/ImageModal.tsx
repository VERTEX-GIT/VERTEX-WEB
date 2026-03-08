import { useEffect } from 'react'
import Image from 'next/image'
import styles from './ImageModal.module.css'

interface ImageModalProps {
    isOpen: boolean
    onClose: () => void
    imageSrc: string
}

export default function ImageModal({ isOpen, onClose, imageSrc }: ImageModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className={styles.imageContainer}>
                    <div className={styles.placeholderImg}>
                        <Image
                            src={imageSrc}
                            fill
                            sizes="90vw"
                            style={{ objectFit: 'contain' }}
                            alt="포트폴리오 확대"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
