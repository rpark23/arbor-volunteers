import { useState, forwardRef } from 'react';
import styles from '../styles/Tool.module.css';

import Start from "./visit/0_Start";
import Screening from './visit/1_Screening';
import SocialNeeds from './visit/2_SocialNeeds';
import SelectReferrals from './visit/3_SelectReferrals';
import HealthEd from './visit/4_HealthEd';
import Referrals from './visit/5_Referrals';

import { Button, Modal } from '@mantine/core';
import { ChevronUp } from 'tabler-icons-react'

export default function Welcome() {
  const [view, setView] = useState(0);
  const [language, setLanguage] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [county, setCounty] = useState(null);
  const [pcp, setPCP] = useState(null);
  const [insurance, setInsurance] = useState(null);

  const [otherLanguage, setOtherLanguage] = useState('');
  const [currPCP, setCurrPCP] = useState('');
  const [currInsurance, setCurrInsurance] = useState('');

  const [food, setFood] = useState(false);
  const [employment, setEmployment] = useState(false);
  const [legal, setLegal] = useState(false);
  const [housing, setHousing] = useState(false);
  const [utilities, setUtilities] = useState(false);
  const [tech, setTech] = useState(false);

  const [cardiovascular, setCardiovascular] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [cholesterol, setCholesterol] = useState(false);
  const [hypertension, setHypertension] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [other, setOther] = useState(false);
  const [eating, setEating] = useState(false);
  const [exercise, setExercise] = useState(false);

  const [primaryCare, setPrimaryCare] = useState(true);
  const [labs, setLabs] = useState(false);
  const [fasting, setFasting] = useState(false);
  const [imaging, setImaging] = useState(false);
  const [xray, setXray] = useState(null);
  const [ct, setCT] = useState(null);
  const [mri, setMRI] = useState(null);
  const [us, setUS] = useState(null);
  const [medications, setMedications] = useState(false);

  const [open, setOpen] = useState(false);

  const [screens, setScreens] = useState(null);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const screeningProps = {
    handleOpen, setView, language, setLanguage, zipCode, setZipCode, county, setCounty, pcp, setPCP, insurance, 
    setInsurance, otherLanguage, setOtherLanguage, currPCP, setCurrPCP, currInsurance, setCurrInsurance
  }

  const socialNeedsProps = {
    handleOpen, setView, zipCode, food, setFood, employment, setEmployment, legal, setLegal, housing, setHousing,
    utilities, setUtilities, tech, setTech
  }

  const selectReferralsProps = {
    handleOpen, setView, primaryCare, setPrimaryCare, labs, setLabs, fasting, setFasting, imaging, setImaging, 
    xray, setXray, ct, setCT, mri, setMRI, us, setUS, medications, setMedications
  }

  const healthEdProps = {
    handleOpen, setView, cardiovascular, setCardiovascular, diabetes, setDiabetes, cholesterol, setCholesterol, hypertension, setHypertension,
    stroke, setStroke, other, setOther, eating, setEating, exercise, setExercise
  }

  const referralsProps = {
    handleOpen, view, setView, language, setLanguage, zipCode, setZipCode, county, setCounty, pcp, setPCP, insurance, setInsurance,
    primaryCare, setPrimaryCare, labs, setLabs, fasting, setFasting, imaging, setImaging, xray, setXray, ct, setCT, mri, 
    setMRI, us, setUS, medications, setMedications
  }

  return (
    <div className={styles.toolContainer}>
      {view < 5 ?
        <div className={styles.visitView}>
          { view == 0 ? <Start handleOpen={handleOpen} setView={setView} /> : null }
          { view == 1 ? <Screening allProps={screeningProps} /> : null }
          { view == 2 ? <SocialNeeds allProps={socialNeedsProps} /> : null }
          { view == 3 ? <SelectReferrals allProps={selectReferralsProps} /> : null }
          { view == 4 ? <HealthEd allProps={healthEdProps} /> : null }
        </div> : null
      }
      {view >= 5 ? <Referrals allProps={referralsProps} /> : null}
       {/* <Modal
        opened={open}
        centered
        onClose={handleClose}
        size="90%"
        title={<h4>Update Patient Tracker</h4>}
      >
        <div className={styles.tracker}>
          <iframe width="402" height="400" frameBorder="0" src="https://docs.google.com/spreadsheets/d/13KYLABkYfAChfU-MCyZqoLm50KlyHWVca4PYZa36_AA/edit"></iframe>
        </div>
      </Modal>
      <Button onClick={handleOpen} className={styles.trackerButton} uppercase><ChevronUp />Open Patient Tracker</Button> */}
    </div>
  )
}
