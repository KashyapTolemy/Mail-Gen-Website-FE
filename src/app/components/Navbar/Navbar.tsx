import React from 'react'
import styles from './style.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
        <div className={styles.logoSection}>
            <img src='/images/logo.jpg' alt="Logo" className={styles.logo} />
            <div className={styles.brandName}>mailgen</div>
        </div>
        <div className={styles.navLinks}>
            <div>About</div>
            <div>FAQs</div>
            <div>How it Works</div>
        </div>
        <div className={styles.signupButton}>
            SIGN UP
        </div>
        </div>
    </div>
  )
}

export default Navbar
