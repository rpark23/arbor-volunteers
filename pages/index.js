import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tool from '../components/Tool'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patient Navigator</title>
        <meta name="description" content="Patient Navigator Tool for Arbor Volunteers" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Tool />
    </div>
  )
}
