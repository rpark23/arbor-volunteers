import { useState } from 'react';
import styles from '../../styles/Tool.module.css';

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function HealthEd(props) {
  const { handleOpen, setView } = props;

  const prevView = (e) => {
    e.preventDefault();
    setView(3);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setView(5);
  }

  const CheckboxStyle = { 
    root: { marginTop: '1rem' },
    label: { marginLeft: '-0.25rem' },
    input: { border: 'solid 1px #888' }
  }

  return (
    <div className={styles.healthEd}>
      <h2 className={styles.sectionHeader}>Health Education</h2>
      <form onSubmit={handleSubmit}>
        <h3>Select any disease-specific pamphlets used by the MD:</h3>
        <div className={styles.group}>
          {/* <FormControlLabel control={<Checkbox sx={{ p: 0.5 }} />} label="Diabetes" /> */}
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="/healthed/cardiovascular-disease" target="_blank" rel="noreferrer">Cardiovascular Disease</a>} 
            styles={CheckboxStyle} />
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="/healthed/diabetes" target="_blank" rel="noreferrer">Diabetes</a>}
            styles={CheckboxStyle} />
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="/healthed/hyperlipidemia-cholesterol" target="_blank" rel="noreferrer">Hyperlipidemia & Cholesterol</a>}
            styles={CheckboxStyle} />
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="/healthed/hypertension" target="_blank" rel="noreferrer">Hypertension</a>}
            styles={CheckboxStyle} />
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="/healthed/stroke" target="_blank" rel="noreferrer">Stroke</a>}
            styles={CheckboxStyle} />
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<span>Other: <a href="https://www-healthwise-net.laneproxy.stanford.edu/stanford/Content/CustDocument.aspx?XML=STUB.XML&XSL=CD.FRONTPAGE.XSL" target="_blank" rel="noreferrer">Healthwise</a></span>}
            styles={CheckboxStyle} />
        </div>
        <h3 style={{ marginTop: '4vh' }}>If NO disease-specific pamphlets were used, ask if the patient is interested in:</h3>
        <div className={styles.group}>
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="https://drive.google.com/drive/folders/1WDbLrRAsq1lkHT7I3G4eH9keWDawaqPW" target="_blank" rel="noreferrer">Healthy Eating Resources</a>}
            styles={CheckboxStyle} />
          <Checkbox /*checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} */
            label={<a href="https://drive.google.com/drive/folders/19wAFYNQoR7YmYg9viBt3t5I7ID0JDwDb" target="_blank" rel="noreferrer">Exercise Resources</a>}
            styles={CheckboxStyle} />          
        </div>
        <div className={styles.progress}>
          <Button className={styles.backButton} onClick={prevView}><ArrowLeft/></Button>
          <Button className={styles.next} type="submit" uppercase>
            Review Referrals
            <ArrowRight className={styles.right}/>
          </Button>
        </div>
      </form>
    </div>
  )
}
