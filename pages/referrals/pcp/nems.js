import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../NavBar';

import styles from '../../../styles/Referrals.module.css';
import template from "../../../data/AVS_template.json";

export default function NEMS(props) {
  const map = template[0]['NEMS'].map;

  return (
    <div className={styles.container}>
      <Head>
        <title>NEMS</title>
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
              For affordable primary care, we are referring you to <strong><u>North East Medical Services (NEMS)</u></strong>. 
              They can help with immunizations, referrals, and finding resources. They provide a sliding fee scale 
              structure for medical care to be affordable and accessible to all. &#40;When enrolled, patients pay between 
              $5 to $40 per visit. NEMS also helps enroll patients into health insurance programs, if they are uninsured.&#41; 
              You can find more information in the attached handout. We will fax your referral in the next couple of days.
            </p>
            <br/>
            <h3>Next Steps</h3>
            <ul>
              <li>
                Call &#40;408&#41;-573-9686 &#40;ext. 8160&#41; within the next week to register in their network. For more 
                information on how to register, see <a href='https://nems.org/' rel='noopener noreferrer' target='_blank'>this website</a>.
              </li>
              <li>
                We will follow up with you in 2 weeks to see if you were able to successfully register, and fax our 
                records soon after confirmation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
