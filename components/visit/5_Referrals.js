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
    ct, setCT, mri, setMRI, us, setUS, medications, setMedications } = allProps;
  
  const [ screens, setScreens ] = useState(null);
  const [ screen, setScreen ] = useState(0);
  const [ coupons, setCoupons ] = useState(['']);
  const [ meds, setMeds ] = useState(['']);
  const [ pharmacyImgs, setPharmacyImgs ] = useState(['']);

  const [ pcpSite, setPcpSite ] = useState('');
  const [ imagingTypes, setImagingTypes ] = useState([]);
  const [ note, setNote ] = useState('');

  const [ avs, setAVS ] = useState(new Array(5));

  const [ pcpProps, setPcpProps ] = useState(null);
  const [ labsProps, setLabsProps ] = useState(null);
  const [ imagingProps, setImagingProps ] = useState(null);
  const [ medicationProps, setMedicationProps ] = useState(null);

  const findPCP = () => {
    const description = template[0].description + '<br>';
    let map;
    if (county=="Santa Clara County, CA" && language=="English") {
      description += template[0].Ravenswood.description;
      map = template[0].Ravenswood.map;
      setPcpSite("Ravenswood");
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
      description += template[0].SamaritanHouse.description;
      map = template[0].SamaritanHouse.map;
      setPcpSite("Samaritan House");
    }
    if (county=="Alameda County, CA") {
      description += template[0].AHS.description;
      map = template[0].AHS.map;
      setPcpSite("Alameda Health Systems");
    }
    const newAVS = avs;
    newAVS[1] = '<br>' + template[0].title + description;
    setPcpProps({ map, description, prevScreen, nextScreen });
    setAVS(newAVS);
  }

  const findLabs = () => {
    const description = template[1].description + '<br>' + '<h3>Instructions:</h3>' + '<ul>';
    if (fasting) {
      description += template[1].instructions.fasting + template[1].instructions.all + '</ul>'
    } else {
      description += template[1].instructions.noFasting + template[1].instructions.all + '</ul>'
    }
    description += "<br><img src='/images/labs.png' /><br><br>" + template[1].location.boswell.description;
    const newAVS = avs;
    newAVS[2] = '<br>' + template[1].title + description;
    setLabsProps({ description, prevScreen, nextScreen });
    setAVS(newAVS);
  }

  const findImaging = () => {
    const description = template[2].type;
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
    setImagingProps({ description, prevScreen, nextScreen });
    setAVS(newAVS);
  }

  const getMedications = () => {
    const description = template[3].description;
    description += `<ol><li><strong>${meds[0]}</strong><ul><li><a href=${coupons[0]}>GoodRx Coupon link</a></li><li>Pharmacy Location: 
    <span style="color: rgb(230, 0, 0);"><strong><u>PLEASE SPECIFY</u></strong></span></li></ul></li></ol>`;
    const newAVS = avs;
    newAVS[3] = '<br>' + template[3].title + description;
    setMedicationProps({ description, prevScreen, nextScreen });
    setAVS(newAVS);
  }

  const emrNote = () => {
    setNote(`
    <p><strong>County</strong>: ${county}</p>
    <p><strong>PCP</strong>: Ravenswood</p>
    <p><strong>Specialty</strong>: </p>
    <p><strong>Social Needs</strong>: </p>
    <p><strong>Labs</strong>: ${labs ? "Yes" : "No"}</p>
    <p><strong>Imaging</strong>: ${imaging ? "Yes" : "No"}</p>
    <p><strong>Medication</strong>: ${medications ? "Yes" : "None"}</p>
    <p><strong>Health Ed</strong>: General</p>
    <p><strong>Other</strong>: </p>
    `);
  }

  const getScreens = async () => {
    let newAVS = avs;
    newAVS[0] = '<h1>After Visit Summary of Referrals</h1>'
    setAVS(newAVS);
    let newScreens = []
    if (primaryCare) {
      newScreens.push(0);
      findPCP();
    }
    if (labs) {
      newScreens.push(1);
      findLabs();
    }
    if (imaging) {
      newScreens.push(2);
      findImaging();
    }
    if (medications) {
      newScreens.push(3);
    }
    setScreens(newScreens);
    emrNote();
    return newScreens;
  }

  useEffect(() => {
    getScreens();
  }, []);

  const prevScreen = () => {
    if (screen == 0) {
      setView(4);
    } else if (screen==4) {
      setScreen(screens.length-1);
    } else {
      setScreen(screen-1);
    }
  }

  const nextScreen =  () => {
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
          { screens[screen] == 0 ? <PCP allProps={pcpProps} /> : null }
          { screens[screen] == 1 ? <Labs allProps={allProps} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
          { screens[screen] == 2 ? <Imaging allProps={allProps} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
          { screens[screen] == 3 ? <Medications allProps={allProps} medProps={medProps}/> : null }
          { screen == 4 ? <AVS avs={avs} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
          { screen == 5 ? <Forms note={note} prevScreen={prevScreen} nextScreen={nextScreen} /> : null }
        </> : null
      }
    </>
  )
}
