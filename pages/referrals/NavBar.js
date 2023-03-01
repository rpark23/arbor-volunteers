import Link from 'next/link'

import styles from '../../styles/Referrals.module.css';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <img src="https://i.ibb.co/6wnXpVR/cfc.png" className={styles.logo} />
        </div>
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/">
          <div className={styles.link}>
            Attendings
          </div>
        </Link>
        <Link href="/">
          <div className={styles.link}>
            Residents
          </div>
        </Link>
        <Link href="/">
          <div className={styles.link}>
            MD/PA
          </div>
        </Link>
        <Link href="/">
          <div className={styles.link}>
            Undergrads
          </div>
        </Link>
        <div className={styles.emailContainer}>
          <div className={styles.email}>
            <p>rpark23@stanford.edu</p>
          </div>
        </div>
      </div>
    </div>
  )
}
