import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/HealthEd.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hyperlipidemia & Cholesterol</title>
        <meta name="description" content="Access affordable care options" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.flyer}>
          <Image src="/healthEd/Hyperlipidemia_Cholesterol/1.png" layout="fill"/>
        </div>
    </div>
  )
}