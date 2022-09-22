import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/Tool.module.css';

import template from "../../data/AVS_template.json";

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function Labs(props) {
  const { nextScreen, prevScreen } = props;
  const { xray, ct, mri, us } = props.allProps;

  const [value, setValue] = useState('');

  useEffect(() => {
    let instructions = template[2].type;
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
    instructions += imagingTypes.join(', ') + '</li></ul><br><h3>Imaging Instructions:</h3><ul>'
    if (xray) {
      instructions += template[2].instructions.xray
    }
    if (ct | mri | us) {
      instructions += template[2].instructions.other
    }
    instructions += template[2].instructions.all + "</ul>"
    document.getElementById('instructions').innerHTML = instructions;
    let referralSite = template[2].location.radiology;
    document.getElementById('referral-site').innerHTML = referralSite;
  }, [])

  return (
    <div className={styles.referralsView}>
      <div className={styles.imaging}>
        <h2 className={styles.sectionHeader}>Imaging Information</h2>
        <div className={styles.referral}>
          <div className={styles.map}>
            <Image src="/images/imaging.png" layout="fill"/>
            <div className={styles.referralSite} style={{ margin: '15rem 0 0 0' }} id="referral-site" />
          </div>
          <div className={styles.description} style={{ marginLeft: '2rem' }}>
            <div id="instructions" />
            <div className={styles.progress} style={{ marginTop: '1rem' }}>
              <Button className={styles.backButton} onClick={prevScreen}><ArrowLeft/></Button>
              <Button className={styles.next} onClick={nextScreen} uppercase>
                Next
                <ArrowRight className={styles.right}/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
