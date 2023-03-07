import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../NavBar';

import styles from '../../../styles/Referrals.module.css';
import template from "../../../data/AVS_template.json";

export default function AHS(props) {
  const map = template[0]['Alameda Health Systems'].map;

  return (
    <div className={styles.container}>
      <Head>
        <title>Alameda Health System</title>
        <meta name="description" content="Patient Navigator Tool for Arbor Volunteers" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <NavBar />

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
              You can get a Primary Care Physician &#40;PCP&#41; within the <strong><u>Alameda Health System</u></strong> if you 
              &#40;1&#41; reside in Alameda County, &#40;2&#41; are uninsured, and &#40;3&#41; have not been seen at Alameda Health System.
            </p>
            <br/>
            <h3>Next Steps</h3>
            <ul>
              <li>
                Call &#40;510&#41; 437-8500 and listen through the options to schedule a financial appointment for 
                PCP and any specialty clinics you may need in the future.
              </li>
              <li>
                Once you connect with the doctors, let us know if they need any medical records from us and we can 
                facilitate that process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
