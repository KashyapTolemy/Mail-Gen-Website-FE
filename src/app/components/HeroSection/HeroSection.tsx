import React from 'react'
import styles from './style.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heading}>
        Apply Smarter. Stand Out. Get Hired.
      </div>
      <div className={styles.subHeading}>
        Getting a job in 2025 is tough. More competition, more applicants, fewer openings — there’s not much we can do about that. But we are here to help. Generate personalized cold emails, LinkedIn messages, referrals, and more — instantly.
      </div>
    </div>
  )
}

export default HeroSection
