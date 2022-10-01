import { useEffect, useState } from 'react';
import styles from '../../styles/Tool.module.css';

import PCP from '../referrals/0_PCP';
import Labs from '../referrals/1_Labs';
import Imaging from '../referrals/2_Imaging';
import Medications from '../referrals/3_Medications';
import AVS from '../referrals/4_AVS';
import Forms from '../referrals/5_Forms';

import template from "../../data/AVS_template.json";

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function Referrals(props) {
  const { allProps } = props
  const { handleOpen, view, setView, language, setLanguage, zipCode, setZipCode, county, setCounty, pcp, setPCP, insurance, 
    setInsurance, primaryCare, setPrimaryCare, labs, setLabs, fasting, setFasting, imaging, setImaging, xray, setXray, 
    ct, setCT, mri, setMRI, us, setUS, medications, setMedications, avs, pcpProps, pcpSite, coupons, setCoupons,
    meds, setMeds, pharmacyImgs, setPharmacyImgs } = allProps;
  
  const [ screens, setScreens ] = useState(null);
  const [ screen, setScreen ] = useState(0);

  // const [ pcpSite, setPcpSite ] = useState('');
  const [ imagingTypes, setImagingTypes ] = useState([]);
  const [ note, setNote ] = useState('');
  const [ form, setForm ] = useState('');

  //const [ pcpProps, setPcpProps ] = useState(null);
  const [ labsProps, setLabsProps ] = useState(null);
  const [ imagingProps, setImagingProps ] = useState(null);
  const [ medicationProps, setMedicationProps ] = useState(null);

  const emrNote = () => {
    setNote(`
    <p><strong>County</strong>: ${county}</p>
    <p><strong>PCP</strong>: ${pcpSite}</p>
    <p><strong>Specialty</strong>: </p>
    <p><strong>Social Needs</strong>: </p>
    <p><strong>Labs</strong>: ${labs ? "Yes" : "No"}</p>
    <p><strong>Imaging</strong>: ${imaging ? "Yes" : "No"}</p>
    <p><strong>Medication</strong>: ${medications ? "Yes" : "None"}</p>
    <p><strong>Other</strong>: </p>
    `);
  }

  const referralsForm = () => {
    setForm(template[0][pcpSite].form);
    console.log(template[0][pcpSite].form);
  }

  const getScreens = async () => {
    let newAVS = avs;
    // newAVS[0] = '<h1>After Visit Summary of Referrals</h1>'
    // setAVS(newAVS);
    let newScreens = []
    if (primaryCare) {
      newScreens.push(0);
      // findPCP();
    }
    if (labs) {
      newScreens.push(1);
      // findLabs();
    }
    if (imaging) {
      newScreens.push(2);
      // findImaging();
    }
    if (medications) {
      newScreens.push(3);
    }
    setScreens(newScreens);
    emrNote();
    referralsForm();
    console.log(newScreens);
    return newScreens;
  }

  useEffect(() => {
    getScreens();
  }, []);

  useEffect(() => {
    referralsForm();
  }, [pcpSite]);

  const prevScreen = () => {
    if (screen == 0) {
      setView(3);
    } else if (screen==4) {
      setScreen(screens.length-1);
    } else {
      setScreen(screen-1);
    }
  }

  const nextScreen =  () => {
    console.log(screens);
    let currScreens = screens;
    if (!currScreens) {
      currScreens = getScreens();
    }
    if (screen == currScreens.length-1) {
      setScreen(4);
    } else {
      setScreen(screen+1);
    }
  }

  const medProps = { prevScreen, nextScreen, coupons, setCoupons, meds, setMeds, pharmacyImgs, setPharmacyImgs };

  return (
    <>
      { screens ? 
        <>
          { screens[screen] == 0 ? <PCP allProps={pcpProps} prevScreen={prevScreen} nextScreen={nextScreen}/> : null }
          { screens[screen] == 1 ? <Labs allProps={allProps} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
          { screens[screen] == 2 ? <Imaging allProps={allProps} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
          { screens[screen] == 3 ? <Medications allProps={allProps} medProps={medProps}/> : null }
          { screen == 4 ? <AVS avs={avs} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
          { screen == 5 ? <Forms note={note} form={form} pcpSite={pcpSite} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
        </> : null
      }
    </>
  )
}
