import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/Tool.module.css';

import template from "../../data/AVS_template.json";

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function Labs(props) {
  const { nextScreen, prevScreen } = props;
  const { fasting } = props.allProps;

  const [value, setValue] = useState('');

  useEffect(() => {
    let instructions = template[1].description + '<br>' + '<ul>';
    if (fasting) {
      instructions += template[1].instructions.fasting + template[1].instructions.all + '</ul>'
    } else {
      instructions += template[1].instructions.noFasting + template[1].instructions.all + '</ul>'
    }
    document.getElementById('instructions').innerHTML = instructions;
    let referralSite = template[1].location.boswell.description;
    document.getElementById('referral-site').innerHTML = referralSite;
    // setValue('<h1>After Visit Summary of Referrals</h1><br>' + description);
  }, [])

  return (
    <div className={styles.referralsView}>
      <div className={styles.labs}>
        <h2 className={styles.sectionHeader}>Labs Information</h2>
        <div className={styles.referral}>
          <div className={styles.description}>
            <div id="instructions" />
          </div>
          <div className={styles.map}>
            <Image src="/images/labs.png" layout="fill"/>
            <div className={styles.referralSite} style={{ margin: '15rem 0 0 2rem' }} id="referral-site" />
          </div>
        </div>
        <div className={styles.progress} style={{ marginTop: '2.5rem' }}>
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
