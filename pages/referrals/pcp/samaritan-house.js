import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../NavBar';

import styles from '../../../styles/Referrals.module.css';
import template from "../../../data/AVS_template.json";

export default function SamaritanHouse(props) {
  const map = template[0]["Samaritan House"].map;

  // useEffect(() => {
  //   let description = template[0].description + '<br>';
  //   description += template[0].Ravenswood.description;
  //   document.getElementById('referral-site').innerHTML = description;
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Samaritan House</title>
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
              Therefore, we are referring you to <strong><u>Samaritan House Free Clinics</u></strong>.
              The clinics offer comprehensive, integrated services, including primary and specialty medical, dental, 
              vision, and mental health care. A patient starts by meeting with either a Case Manager or Clinic Manager 
              to assess social, financial, housing, and other needs. Our team of physicians, dentists, and staff then 
              helps patients get the care they need.
            </p>
            <br/>
            <p><strong>Address</strong>: 114 Fifth Ave, Redwood City, CA 94063</p>
            <p><strong>Hours</strong>: Monday - Friday: 8:30am - 12:30pm, 1:30pm - 5pm</p>
            <br/>
            <h3>Next Steps:</h3>
            <ul>
              <li>
                <strong>You will receive a call from Samaritan House to set up an appointment.</strong>{" "}
                If you do not receive a call within one week, <u>call &#x28;650&#x29; 347-3648</u> to set up an appointment with one 
                of their case managers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
