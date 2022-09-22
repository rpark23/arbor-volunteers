import { useState, useEffect} from 'react';
import styles from '../../styles/Tool.module.css';

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight, ExternalLink } from 'tabler-icons-react';

export default function SocialNeeds(props) {
  const { handleOpen, setView, zipCode, food, setFood, employment, setEmployment, legal, setLegal, housing, setHousing,
    utilities, setUtilities, tech, setTech } = props.allProps;

  const prevView = (e) => {
    e.preventDefault();
    setView(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setView(3);
  }

  const CheckboxStyle = { 
    root: { marginTop: '1rem' },
    label: { marginLeft: '-0.25rem' },
    input: { border: 'solid 1px #888' }
  }

  const NestedStyle = { 
    label: { margin: '0 0.6rem 0 -0.4rem' },
    input: { border: 'solid 1px #888' }
  }

  return (
    <div className={styles.socialNeeds}>
      <h2 className={styles.sectionHeader}>Social Needs</h2>
      <form onSubmit={handleSubmit}>
        <h3>Select the resources your patient is interested in:</h3>
        <div className={styles.group}>
          <div style={{ display: 'flex' }}>
            <Checkbox checked={food} onChange={(e) => setFood(e.currentTarget.checked)} label="Food" styles={CheckboxStyle} />
            {food ? <a className={styles.auntBertha} href={`https://stanford.auntbertha.com/food/food-pantry?postal=${zipCode}`} target="_blank" rel="noreferrer">Aunt Bertha<ExternalLink size={20}/></a> : null}
          </div>
          <div style={{ display: 'flex' }}>
            <Checkbox checked={employment} onChange={(e) => setEmployment(e.currentTarget.checked)} label="Employment" styles={CheckboxStyle} />
            {employment ? <a className={styles.auntBertha} href={`https://stanford.auntbertha.com/work/job-placement?postal=${zipCode}`} target="_blank" rel="noreferrer">Aunt Bertha<ExternalLink size={20}/></a> : null}
          </div>
          <div style={{ display: 'flex' }}>
            <Checkbox checked={legal} onChange={(e) => setLegal(e.currentTarget.checked)} label="Legal Services" styles={CheckboxStyle} />
            {legal ? <a className={styles.auntBertha} href={`https://stanford.auntbertha.com/legal/advocacy-%26-legal-aid?postal=${zipCode}`} target="_blank" rel="noreferrer">Aunt Bertha<ExternalLink size={20}/></a> : null}
          </div>
          <div style={{ display: 'flex' }}>
            <Checkbox checked={housing} onChange={(e) => setHousing(e.currentTarget.checked)} label="Housing" styles={CheckboxStyle} />
            {housing ? <a className={styles.auntBertha} href={`https://stanford.auntbertha.com/housing/help-find-housing?postal=${zipCode}`} target="_blank" rel="noreferrer">Aunt Bertha<ExternalLink size={20}/></a> : null}
          </div>
          <div style={{ display: 'flex' }}>
            <Checkbox checked={utilities} onChange={(e) => setUtilities(e.currentTarget.checked)} label="Utilities" styles={CheckboxStyle} />
            {utilities ? <a className={styles.auntBertha} href={`https://stanford.auntbertha.com/housing/help-pay-for-utilities?postal=${zipCode}`} target="_blank" rel="noreferrer">Aunt Bertha<ExternalLink size={20}/></a> : null}
          </div>
          <div style={{ display: 'flex' }}>
            <Checkbox checked={tech} onChange={(e) => setTech(e.currentTarget.checked)} label="Phone/Internet" styles={CheckboxStyle} />
            {tech ? <a className={styles.auntBertha} href={`https://stanford.auntbertha.com/housing/help-pay-for-internet-or-phone?postal=${zipCode}`} target="_blank" rel="noreferrer">Aunt Bertha<ExternalLink size={20}/></a> : null}
          </div>
        </div>
        <div className={styles.progress}>
          <Button className={styles.backButton} onClick={prevView}><ArrowLeft/></Button>
          <Button className={styles.next} type="submit" uppercase>
            Medical Referrals
            <ArrowRight className={styles.right}/>
          </Button>
        </div>
      </form>      
    </div>
  )
}
