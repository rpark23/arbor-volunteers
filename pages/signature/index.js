import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import SignaturePad from "signature_pad"
// import Tool from '../components/Tool'

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("signature-pad");
    // const signaturePad = new SignaturePad(canvas, {
    //   minWidth: 5,
    //   maxWidth: 10,
    //   penColor: "rgb(66, 133, 244)"
    // });
    const signaturePad = new SignaturePad(canvas);
    signaturePad.on();
  });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Patient Registration</title>
        <meta name="description" content="Patient Navigator Tool for Arbor Volunteers" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div>
        <canvas id="signature-pad" width={400} height={200} style={{ borderStyle: "solid" }}/>
      </div>
    </div>
  )
}