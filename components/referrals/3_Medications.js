import { forwardRef, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../../styles/Tool.module.css';

import template from "../../data/AVS_template.json";

import { Autocomplete, Button, Group, Loader, Menu, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight, ExternalLink, List, Plus, Trash } from 'tabler-icons-react';

export default function Labs(props) {
  const { handleOpen, setView, language, zipCode, county, pcp, insurance } = props.allProps;
  const { nextScreen, prevScreen , coupons, setCoupons, meds, setMeds, pharmacyImgs, setPharmacyImgs } = props.medProps;

  const handleChange = async (e, i) => {
    e.preventDefault();
    let newCoupons = [...coupons];
    newCoupons[i] = e.target.value;
    let newMeds = [...meds];
    let newPharmacyImgs = [...pharmacyImgs];
    let drug = e.target.value.split('drug_id=');
    newPharmacyImgs[i] = null;
    if (drug.length > 1) {
      drug = drug[1].split('&pharmacy_id=');
      if (drug.length > 1) {
        let pharmacy = drug[1].split('&quantity=');
        if (pharmacy.length > 1) {
          let quantity = pharmacy[1].split('&')[0];
          const res = await fetch(`https://www.goodrx.com/api/v4/drugs/${drug[0]}`)
          const json = await res.json();
          newMeds[i] = `${quantity} ${json.drug.plural_display}`;
          await fetch(`https://www.grxstatic.com/pharmacy_logos/circle_icon/${pharmacy[0]}.png`)
            .then(response => response.blob())
            .then(imageBlob => {
              const imageObjectURL = URL.createObjectURL(imageBlob);
              newPharmacyImgs[i] = imageObjectURL;
            });
        }
      }
    }
    setPharmacyImgs(newPharmacyImgs);
    setMeds(newMeds);
    setCoupons(newCoupons);
  }

  const addCoupon = () => {
    setCoupons([...coupons, '']);
  }

  const removeCoupon = (i) => {
    const newCoupons = [...coupons];
    const newMeds = [...meds];
    const newPharmacyImgs = [...pharmacyImgs];
    newCoupons.splice(i, 1);
    newMeds.splice(i, 1);
    newPharmacyImgs.splice(i, 1);
    setCoupons(newCoupons);
  }

  return (
    <div className={styles.visitView}>
      <div className={styles.medications}>
        <h2 className={styles.sectionHeader}>Medications</h2>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '20rem' }}>
          <p>Show your patient how to use GoodRx:</p>
          <Link href="https://goodrx.com" passHref>
            <Button component="a" target="_blank" rel="noreferrer" className={styles.secondaryButton} 
              rightIcon={<ExternalLink />} style={{ margin: '1rem', width: '10rem' }}> GoodRx</Button>
          </Link>
          <p>*Remember to check the <strong>type</strong>, <strong>quantity</strong>, and <strong>dosage strength</strong>{' '}
            of the prescription.</p>
          <p style={{ margin: '1rem 0 0.25rem' }}>
            Then, paste the <span style={{ color: 'red' }}><strong><u>coupon URL(s)</u></strong></span> below:
          </p>
          <div className={styles.coupons}>
            {coupons.map((coupon, i) => (
              <div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem 0', width: '100%' }}>
                <div style={{ alignItems: 'center', display: 'flex', width: '100%' }}>
                  <TextInput value={coupon} onChange={(e) => handleChange(e, i)} compact style={{ width: '100%' }} placeholder='Coupon Link' />
                  { coupons.length > 1 ? <Button onClick={() => removeCoupon(i)} variant="subtle" style={{ marginLeft: '0.5rem' }} color="gray" compact><Trash size={20} /></Button> : null }
                </div>
                { pharmacyImgs[i] ? <div className={styles.med}><img src={pharmacyImgs[i]} /><p>{meds[i]}</p></div> : null }
              </div>
            ))}
          </div>
          
          <Button variant="outline" compact style={{ height: 20,  width: '100%' }} onClick={addCoupon}><Plus size={15}/></Button>
        </div>
        <div className={styles.progress}>
          <Button className={styles.backButton} onClick={prevScreen}><ArrowLeft/></Button>
          <Button className={styles.next} onClick={nextScreen} uppercase>
            Next
            <ArrowRight className={styles.right}/>
          </Button>
        </div>
      </div>
    </div>
  )
}
