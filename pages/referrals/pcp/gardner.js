import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../NavBar';

import styles from '../../../styles/Referrals.module.css';
import template from "../../../data/AVS_template.json";

export default function Gardner(props) {
  const map = template[0]['Gardner'].map;

  return (
    <div className={styles.container}>
      <Head>
        <title>Gardner</title>
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
              For affordable primary care, we are referring you to <strong><u>Gardner Health Center</u></strong>. 
              Gardner also offers mental health treatment, dental care, optometry, insurance counseling, and other 
              services.
            </p>
            <br/>
            <h3>Next Steps</h3>
            <ul>
              <li>Call &#40;408&#41; 457-7100 to schedule your first appointment at Gardner Health Center.</li>
              <li>
                We will follow up with you in 2 weeks to see if you have made contact with Gardner, and we will securely 
                fax them your medical records <strong>once you register in Gardner&#39;s network</strong> to complete the referral 
                process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
