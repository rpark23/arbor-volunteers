import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/HealthEd.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diabetes</title>
        <meta name="description" content="Access affordable care options" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.twoPage}>
        <div className={styles.flyer}>
          <Image src="/healthEd/Diabetes/1.png" layout="fill"/>
        </div>
        <div className={styles.flyer}>
          <Image src="/healthEd/Diabetes/2.png" layout="fill"/>
        </div>
      </div>
      <br/>
      <div className={styles.twoPage}>
        <div className={styles.flyer}>
          <Image src="/healthEd/Diabetes/3.png" layout="fill"/>
        </div>
        <div className={styles.flyer}>
          <Image src="/healthEd/Diabetes/4.png" layout="fill"/>
        </div>
      </div>
      <br/>
      <div className={styles.flyer}>
        <Image src="/healthEd/Diabetes/5.png" layout="fill"/>
      </div>
    </div>
  )
}