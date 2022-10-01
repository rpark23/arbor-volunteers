import { useState, forwardRef, useEffect } from 'react';
import styles from '../styles/Tool.module.css';

import Start from "./visit/0_Start";
import Screening from './visit/1_Screening';
import SocialNeeds from './visit/2_SocialNeeds';
import SelectReferrals from './visit/3_SelectReferrals';
import HealthEd from './visit/4_HealthEd';
import Referrals from './visit/4_Referrals';

import template from "../data/AVS_template.json";

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

  const [avs, setAVS] = useState(new Array(5));

  const [pcpSite, setPcpSite] = useState('');
  const [pcpForm, setPCPForm] = useState('');
  const [imagingTypes, setImagingTypes] = useState([]);
  const [note, setNote] = useState('');

  const [ coupons, setCoupons ] = useState(['']);
  const [ meds, setMeds ] = useState(['']);
  const [ pharmacyImgs, setPharmacyImgs ] = useState(['']);

  const [ pcpProps, setPcpProps ] = useState(null);
  const [ labsProps, setLabsProps ] = useState(null);
  const [ imagingProps, setImagingProps ] = useState(null);
  const [ medicationProps, setMedicationProps ] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPCP = () => {
    let description = template[0].description + '<br>';
    let map;
    if (county=="Santa Clara County, CA" && language=="English") {
      description += template[0].Ravenswood.description;
      map = template[0].Ravenswood.map;
      setPcpSite("Ravenswood");
      setPCPForm('/forms/Arbor_Ravenswood_Cover_Sheet.pdf');
    }
    if (county=="Santa Clara County, CA" && language=="Mandarin") {
      description += template[0].NEMS.description;
      map = template[0].NEMS.map;
      setPcpSite("NEMS");
    }
    if (county=="Santa Clara County, CA" && language=="Spanish") {
      description += template[0].Gardner.description;
      map = template[0].Gardner.map;
      setPcpSite("Gardner");
    }
    if (county=="San Mateo County, CA") {
      description += template[0]["Samaritan House"].description;
      map = template[0]["Samaritan House"].map;
      setPcpSite("Samaritan House");
    }
    if (county=="Alameda County, CA") {
      description += template[0]["Alameda Health Systems"].description;
      map = template[0]["Alameda Health Systems"].map;
      setPcpSite("Alameda Health Systems");
    }
    const newAVS = avs;
    newAVS[1] = '<br>' + template[0].title + description;
    setPcpProps({ map, description });
    setAVS(newAVS);
  };

  const getLabs = () => {
    let description = template[1].description + '<br>' + '<h3>Instructions:</h3>' + '<ul>';
    if (fasting) {
      description += template[1].instructions.fasting + template[1].instructions.all + '</ul>'
    } else {
      description += template[1].instructions.noFasting + template[1].instructions.all + '</ul>'
    }
    description += "<br><img src='/images/labs.png' /><br><br>" + template[1].location.boswell.description;
    const newAVS = avs;
    newAVS[2] = '<br>' + template[1].title + description;
    //setLabsProps({ description, prevScreen, nextScreen });
    setAVS(newAVS);
  };

  const getImaging = () => {
    let description = template[2].type;
    let imagingTypes = [];
    if (xray) {
      imagingTypes.push('X-ray');
    } 
    if (ct) {
      imagingTypes.push('CT');
    }
    if (mri) {
      imagingTypes.push('MRI');
    }
    if (us) {
      imagingTypes.push('ultrasound');
    }
    description += imagingTypes.join(', ') + '</li></ul><br><h3>Imaging Instructions:</h3><ul>'
    if (xray) {
      description += template[2].instructions.xray
    }
    if (ct | mri | us) {
      description += template[2].instructions.other
    }
    description += template[2].instructions.all + "</ul>";
    description += "<br><img src='/images/imaging.png' /><br><br>" + template[2].location.radiology;
    const newAVS = avs;
    newAVS[3] = '<br>' + template[2].title + description;
    //setImagingProps({ description, prevScreen, nextScreen });
    setAVS(newAVS);
  };

  const getMedications = () => {
    const description = template[3].description;
    for (let i=0; i<meds.length; i++) {
      description += `<ul><li><strong>${meds[i]}</strong><ul><li><a href=${coupons[i]}>GoodRx Coupon link</a></li><li>Pharmacy Location: 
      <span style="color: rgb(230, 0, 0);"><strong><u>PLEASE SPECIFY</u></strong></span></li></ul></li></ul>`;
    }
    const newAVS = avs;
    newAVS[3] = '<br>' + template[3].title + description;
    //setMedicationProps({ description, prevScreen, nextScreen });
    setAVS(newAVS);
  }

  useEffect(() => {
    let newAVS = avs;
    newAVS[0] = '<h1>After Visit Summary of Referrals</h1>'
    setAVS(newAVS);
  }, []);

  useEffect(() => {
    let newAVS = avs;
    newAVS[1] = null;
    setAVS(newAVS);
    setPCPForm('');
    if (pcp) {
      getPCP();
    }
  }, [county, language, pcp]);

  useEffect(() => {
    let newAVS = avs;
    newAVS[2] = null;
    setAVS(newAVS);
    if (labs) {
      getLabs();
    }
  }, [labs, fasting]);

  useEffect(() => {
    let newAVS = avs;
    newAVS[3] = null;
    setAVS(newAVS);
    if (imaging) {
      getImaging();
    }
  }, [imaging, xray, ct, mri, us]);

  useEffect(() => {
    let newAVS = avs;
    newAVS[4] = null;
    setAVS(newAVS);
    if (medications) {
      getMedications();
    }
  }, [medications, meds]);



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
    setMRI, us, setUS, medications, setMedications, avs, pcpProps, pcpSite, coupons, setCoupons, meds, setMeds, 
    pharmacyImgs, setPharmacyImgs
  }

  return (
    <div className={styles.toolContainer}>
      {view < 5 ?
        <div className={styles.visitView}>
          { view == 0 ? <Start handleOpen={handleOpen} setView={setView} /> : null }
          { view == 1 ? <Screening allProps={screeningProps} /> : null }
          {/* { view == 2 ? <SocialNeeds allProps={socialNeedsProps} /> : null } */}
          { view == 3 ? <SelectReferrals allProps={selectReferralsProps} /> : null }
          {/* { view == 4 ? <HealthEd allProps={healthEdProps} /> : null } */}
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
