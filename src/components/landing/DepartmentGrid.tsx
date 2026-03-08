'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ImageModal from '@/components/ui/ImageModal'
import { DEPARTMENTS } from '@/lib/constants'
import styles from './DepartmentGrid.module.css'

function DepartmentCard({ dept, index, onImageClick }: { dept: any, index: number, onImageClick: (src: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 100}>
      <div className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
        <div className={styles.cardMain}>
          <span className={styles.index}>0{index + 1}</span>
          <h3 className={styles.cardName}>{dept.name}</h3>
          <p className={styles.cardTagline}>{dept.tagline}</p>
          <p className={styles.cardDesc}>{dept.description}</p>

          <button
            className={styles.toggleBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? '닫기' : '부장 및 멘토 소개 보기'}
            <svg
              className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div className={`${styles.dropdown} ${isOpen ? styles.dropdownVisible : ''}`}>
          <div className={styles.leaderSection}>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderHeader}>
                <span className={styles.personRole}>Team Leader</span>
                <span className={styles.personName}>{dept.leader.name}</span>
                <span className={styles.leaderTitle}>{dept.leader.role}</span>
              </div>
              <div className={styles.contact}>
                <span className={styles.contactLabel}>Contact</span>
                <a href={`mailto:${dept.leader.contact}`} className={styles.contactValue}>
                  {dept.leader.contact}
                </a>
              </div>
            </div>
            <div className={styles.portfolio}>
              <div className={styles.portfolioLabel}>Representative Projects</div>
              <div className={styles.portfolioGrid}>
                {dept.leader.portfolioImages.map((img: string, i: number) => (
                  <div
                    key={i}
                    className={styles.portfolioFrame}
                    onClick={() => onImageClick(img)}
                    role="button"
                    tabIndex={0}
                    aria-label="이미지 크게 보기"
                  >
                    <div className={styles.placeholderImg}>
                      <Image
                        src={img}
                        alt={`${dept.name} project ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function DepartmentGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <Section id="teams">
      <ScrollReveal>
        <p className={styles.sectionLabel}>TEAMS</p>
        <h2 className={styles.sectionTitle}>부서</h2>
      </ScrollReveal>
      <div className={styles.grid}>
        {DEPARTMENTS.map((dept, i) => (
          <DepartmentCard
            key={dept.id}
            dept={dept}
            index={i}
            onImageClick={(src) => setSelectedImage(src)}
          />
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
      />
    </Section>
  )
}
