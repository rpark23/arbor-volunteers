import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../../styles/Referrals.module.css';
import template from "../../../data/AVS_template.json";

import NavBar from '../NavBar';

export default function Labs(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Labs Instructions</title>
        <meta name="description" content="Patient Navigator Tool for Arbor Volunteers" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <NavBar />

      <div className={styles.referralsView}>
        <h2>Labs Instructions</h2>
        <div className={styles.labs}>
          <div className={styles.description}>
            <p>
              Your doctor has ordered several free laboratory tests for you. These tests are important for your doctor 
              to understand your current health and to inform how they can best serve your needs. <br/><br/> 
              Your test results will be returned to Arbor Free Clinic, and <strong>we will call you to go over your 
              results</strong> 1-2 Sundays after we receive results, as capacity allows.
            </p>
            <br/>
            <ul>
              <li>
                You may go to the lab at any time and <strong>do not need an appointment,</strong> but we{" "}
                <u>recommend that you call the lab ahead of your visit</u> to make sure they have received your 
                lab orders.
              </li>
              <li>
                If the clinical labs cannot find your orders, let them know they were sent via fax. Please call us 
                immediately at the phone number below and leave a message if any issues arise.
              </li>
              <li>Please bring any form of <strong><u>photo identification</u></strong>.</li>
              <li>
                This is a <strong>no cost</strong> service. <strong>If any billing issues come up, please call or 
                email us</strong>.
              </li>
              <li>Please remember to <strong>fast</strong> for 10 hours prior to visiting the lab. It is ok to drink water.</li>
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.map}>
              <Image src="/images/labs.png" layout="fill"/>
            </div>
            <div className={styles.location}>
              <h3>Stanford Hospital - Boswell Clinic Laboratory</h3>
              <ul>
                <li><strong>Address</strong>: 300 Pasteur Drive, Pavilion A, Level 1, A12 Stanford, CA 94305</li>
                <li><strong>Hours</strong>: Mon-Fri 6:00am-5:30pm, Sat-Sun 7am-3:30pm</li>
                <li><strong>Phone</strong>: (650) 724-4750</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
