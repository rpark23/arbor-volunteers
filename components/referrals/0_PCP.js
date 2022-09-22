import { useEffect, useState } from 'react';
import styles from '../../styles/Tool.module.css';

import { Button } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function PCP(props) {
  const { map, description, prevScreen, nextScreen } = props.allProps;

  useEffect(() => {
    document.getElementById('referral-site').innerHTML = description;
  }, []);

  return (
    <div className={styles.referralsView}>
      <div className={styles.pcp}>
        <h2 className={styles.sectionHeader}>Primary Care Referral</h2>
        <div className={styles.referral}>
          <div className={styles.map}>
            <iframe src={map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className={styles.description}>
            <div id="referral-site" />
            <div className={styles.progress}>
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
