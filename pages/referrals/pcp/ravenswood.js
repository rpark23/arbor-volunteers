import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import styles from '../../../styles/Referrals.module.css';
import template from "../../../data/AVS_template.json";

export default function Ravenswood(props) {
  const map = template[0].Ravenswood.map;

  // useEffect(() => {
  //   let description = template[0].description + '<br>';
  //   description += template[0].Ravenswood.description;
  //   document.getElementById('referral-site').innerHTML = description;
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Patient Navigator</title>
        <meta name="description" content="Patient Navigator Tool for Arbor Volunteers" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
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

      <div className={styles.referralsView}>
        <h2>Primary Care Referral</h2>
        <div className={styles.pcp}>
          <div className={styles.map}>
            <iframe src={map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className={styles.description}>
            <p>
              Our resources at Arbor Free Clinic are limited and our clinic is designed to only see patients a few times 
              before referring them to a long-term care option. We also cannot provide patients with good continuity of care 
              since patients will typically see a different doctor on each visit. A single primary care physician at another 
              clinic can much more effectively manage your health over time.
            </p>
            <br/>
            <p>
              Therefore, we are referring you to <strong><u>Ravenswood &#x28;Mayview&#x29; Family Health Center</u></strong>. 
              Ravenswood also offers dental care, optometry, insurance counseling, and other services. For uninsured 
              patients, they operate on a sliding scale.
            </p>
            <br/>
            <h3>Next Steps</h3>
            <ul>
              <li>Be on the lookout for a call from Ravenswood, but if you don&#x27;t receive it within a week, call &#x28;650&#x29; 330-7416.</li>
              <li>We will follow up with you in 2 weeks to see if you have made contact with Ravenswood.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
