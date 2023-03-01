import Head from 'next/head'
import Image from 'next/image'

import styles from '../../../styles/Referrals.module.css';

import NavBar from '../NavBar';

export default function Xray(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imaging Instructions</title>
        <meta name="description" content="Patient Navigator Tool for Arbor Volunteers" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <NavBar />

      <div className={styles.referralsView}>
        <h2>Imaging Instructions</h2>
        <div className={styles.imaging}>
          <div className={styles.right}>
            <div className={styles.map}>
              <Image src="/images/imaging.png" layout="fill"/>
            </div>
            <div className={styles.location}>
              <h3>Stanford Hospital - Radiology Registration</h3>
              <ul>
                <li><strong>Address</strong>: 300 Pasteur Drive, Pavilion E, Level 1, E12, Stanford, CA 94305</li>
                <li><strong>Hours</strong>: Mon-Fri 6:45AM-5:00PM</li>
                <li>
                  <strong>Directions</strong>: Please enter through the main hospital entrance near the fountain. 
                  Immediately after entering, take a left and proceed past the cafeteria. Turn to the left when you see 
                  the “Radiology Registration” sign &#x28;E12&#x29;.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.description}>
            <p>Your doctor has ordered the following imaging for you to have done at Stanford Hospital:</p>
            <ul>
              <li><strong><u>X-ray</u></strong></li>
            </ul>
            <br/>
            <h3>Instructions:</h3>
            <ul>
              <li>For your X-ray, You may go to the imaging clinic at any time and <strong>do not need an appointment</strong>.</li>
              <li><strong>IMPORTANT</strong>: Please bring a printed copy of the imaging order you received from Arbor Free Clinic to your appointment.</li>
              <li><strong>Please bring any form of <u>photo identification</u></strong>.</li>
              <li>This is a no cost service. <strong>If any <u>billing issues</u> come up, please call or email us</strong>.</li>
              <li>If any issues arise, please call us immediately at the phone number below and leave a message.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
