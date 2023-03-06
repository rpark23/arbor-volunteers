import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'


import styles from '../../../styles/Referrals.module.css';

import NavBar from '../NavBar';

export default function Imaging(props) {
  const router = useRouter();
  const { xray, ct, mri, us } = router.query;

  const [imagingTypes, setImagingTypes] = useState(null);
  const [otherTypes, setOtherTypes] = useState(null);

  useEffect(() => {
    let imagingTypes = [];
    let otherTypes = [];
    if (xray == "true") {
      imagingTypes.push('X-ray');
    } 
    if (ct == "true") {
      imagingTypes.push('CT');
      otherTypes.push('CT');
    }
    if (mri == "true") {
      imagingTypes.push('MRI');
      otherTypes.push('MRI');
    }
    if (us == "true") {
      imagingTypes.push('Ultrasound');
      otherTypes.push('Ultrasound');
    }
    setImagingTypes(imagingTypes.join(', '));
    setOtherTypes(otherTypes.join(', '));
  }, [xray, ct, mri, us]);

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
          {imagingTypes ? 
            <div className={styles.description}>
              <p>Your doctor has ordered the following imaging for you to have done at Stanford Hospital:</p>
              <ul>
                <li><strong>{imagingTypes}</strong></li>
              </ul>
              <br/>
              <h3>Instructions:</h3>
              <ul>
                {xray ? <>
                  <li>For your <strong>X-ray</strong>, you may go to the imaging clinic at any time and <u>do not need an appointment</u>.
                    <ul>
                      <li><strong>IMPORTANT</strong>: Please bring a printed copy of the imaging order you received from Arbor Free Clinic to your appointment.</li>
                    </ul>
                  </li>
                </> : null}
                {otherTypes ? <>
                  <li>For your <strong>{otherTypes}</strong>, you will need to <strong>make an appointment</strong> at the imaging clinic. Please wait for Stanford Hospital to call you to make an appointment. If you have not received a call within a week, please call Stanford Radiology Scheduling at &#40;650&#41; 723-6855.</li>
                </> : null}
                <li><strong>Please bring any form of <u>photo identification</u></strong>.</li>
                <li>This is a no cost service. <strong>If any <u>billing issues</u> come up, please call or email us</strong>.</li>
                <li>If any issues arise, please call us immediately at the phone number below and leave a message.</li>
              </ul>
            </div> : null}
        </div>
      </div>
    </div>
  )
}
