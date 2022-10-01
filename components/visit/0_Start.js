import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Tool.module.css';

import { Button, Modal } from '@mantine/core';
import { ArrowDown, ArrowRight, ExternalLink } from 'tabler-icons-react';

export default function Start(props) {
  const { handleOpen, setView } = props;

  const [open, setOpen] = useState(false);

  const openBox = (e) => {
    setOpen(true);
  };

  const closeBox = () => {
    setOpen(false);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setView(1);
  }

  return (
    <div className={styles.start}>
      <div className={styles.title} style={{ margin: '7vh 0 2vh' }}>
        <a href='https://med.stanford.edu/arbor.html' rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: '#B83A4B', fontSize: '2.5rem', lineHeight: '3rem' }} >Arbor Free Clinic</h1>
        </a>
        <h2 style={{ fontSize: '2rem', lineHeight: '2.5rem' }}>Patient Navigator</h2>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div>
            <h3 style={{ backgroundColor: '#B83A4B' }}>1</h3>
            <p>Cardinal Key Instructions:</p>
          </div>
          <Link href="https://uit.stanford.edu/service/cardinalkey/installation" passHref>
            <Button component="a" target="_blank" rel="noreferrer" className={styles.primaryButton} rightIcon={<ExternalLink />} uppercase>Installation Guide</Button>
          </Link>
          {/* <Button className={styles.primaryButton} onClick={handleOpen} uppercase>Patient Tracker</Button> */}
        </div>
        <ArrowDown className={styles.arrowDown}/>
        <div className={styles.step}>
          <div>
            <h3 style={{ backgroundColor: '#3a6bb8' }}>2</h3>
            <p>Start tracking your patient visit:</p>
          </div>
          <Link href="https://docs.google.com/spreadsheets/d/13KYLABkYfAChfU-MCyZqoLm50KlyHWVca4PYZa36_AA/edit" passHref>
            <Button component="a" target="_blank" rel="noreferrer" className={styles.secondaryButton} rightIcon={<ExternalLink />} uppercase>Patient Tracker</Button>
          </Link>
          {/* <Button onClick={openBox} className={styles.secondaryButton} uppercase> Open Box</Button> */}
        </div>
        <ArrowDown className={styles.arrowDown}/>
        <div className={styles.step}>
          <div>
            <h3 style={{ backgroundColor: '#7a6ed1' }}>3</h3>
            <p>Log vitals and HAQ in EMR:</p>
          </div>
          <Link href="https://citrix.stanfordhealthcare.org" passHref>
            <Button component="a" target="_blank" rel="noreferrer" className={styles.tertiaryButton} rightIcon={<ExternalLink />} uppercase> Go to EMR</Button>
          </Link>
        </div>
        <ArrowDown className={styles.arrowDown}/>
      </div>
      <Button className={styles.next} onClick={handleNext} uppercase>
        <p>Screening</p>
        <ArrowRight strokeWidth={1.5}/>
      </Button>
      <Modal
        opened={open}
        centered
        onClose={closeBox}
        size="80%"
        title={<h4>Create Patient Box Folder</h4>}
      >
        <div className={styles.box}>
          <iframe src="https://stanfordmedicine.app.box.com/embed/s/dzlr3b9eerrk86qjnn6v6mv26duuh0dw?sortColumn=date&view=list" width="500" height="500" frameBorder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe>
        </div>
      </Modal>
    </div>
  )
}
