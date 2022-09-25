import { useState, useEffect } from 'react';
import styles from '../../styles/Tool.module.css';

import { Button, Radio, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function Screening(props) {
  const { handleOpen, setView, language, setLanguage, zipCode, setZipCode, county, setCounty, pcp, setPCP, insurance, 
    setInsurance, otherLanguage, setOtherLanguage, currPCP, setCurrPCP, currInsurance, setCurrInsurance } = props.allProps;

  const [error, setError] = useState("To proceed, select a preferred language");

  useEffect(() => {
    checkForError();
  })

  const prevView = (e) => {
    e.preventDefault();
    setView(0);
  }

  useEffect(() => {
    if (language == "Other") {
      document.getElementById("other-language").focus();
    }
  }, [language]);

  const checkZip = (e) => {
    const zip = e.target.value;
    if (zip.length == 5) {
      const zipCodes = require("../../data/zip_codes.json");
      const result = zipCodes.filter(
        row => row.zip == zip
      );
      if (result[0]) {
        setCounty(`${result[0].county}, ${result[0].state}`);
        setZipCode(zip);
      } else {
        setCounty("Zip Code Not Found");
      }
    } else {
      setCounty(null);
      setZipCode(null);
    }
  };

  useEffect(() => {
    if (insurance == "Yes") {
      document.getElementById("specify-insurance").focus();
    }
  }, [insurance]);

  useEffect(() => {
    if (pcp == "Yes") {
      document.getElementById("specify-pcp").focus();
    }
  }, [pcp])

  const checkForError = () => {
    if (!language) {
      setError("To proceed, select a preferred language");
    } else if (!zipCode) {
      setError("To proceed, enter a valid zip code");
    } else if (!insurance) {
      setError("To proceed, select an insurance status");
    } else if (!pcp) {
      setError("To proceed, select a PCP status");
    } else {
      setError(null);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setView(3);
  }

  const RadioStyle = { 
    label: { marginLeft: '-0.4rem' }, radio: { border: 'solid 2px #888' } 
  }

  return (
    <div className={styles.screening}>
      <h2 className={styles.sectionHeader}>Screening</h2>
      <form onSubmit={handleSubmit}>
        <h3>Patient&apos;s preferred language:</h3>
        <Radio.Group
          className={styles.group}
          value={language}
          onChange={setLanguage}
        >
          <Radio value="English" label="English" styles={RadioStyle}/>
          <Radio value="Mandarin" label="Mandarin" styles={RadioStyle} />
          <Radio value="Spanish" label="Spanish" styles={RadioStyle} />
          <div style={{ display: 'flex', marginTop: '-0.4rem' }} >
            <Radio value="Other" label="Other:" styles={RadioStyle} />
            <TextInput 
              size="xs"
              styles= {{ input: { marginLeft: '0.4rem', width: '12rem' } }}
              id="other-language"
              value={otherLanguage}
              onChange={(e) => setOtherLanguage(e.target.value)}
              disabled={language!="Other" && language}
            />
          </div>
        </Radio.Group>
        <div className={styles.zipCode} style={{ alignItems: 'center', display: 'flex', marginTop: '3vh' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <h3>Zip Code:</h3>
            <TextInput 
              size="xs"
              styles= {{ input: { marginLeft: '0.4rem', width: '4rem' } }}
              id="other-language"
              onChange={checkZip}
              value={zipCode}
            />
          </div>
          <div className={styles.county}>
            <p>{county}</p>
          </div>
        </div>
        <h3 style={{ marginTop: '3vh' }}>Does your patient have insurance?</h3>
        <Radio.Group
          className={styles.group}
          value={insurance}
          onChange={setInsurance}
        >
          <Radio value="No" label="No" styles={RadioStyle}/>
          <Radio value="Yes" label="Yes:" styles={RadioStyle} />
          <TextInput 
            size="xs"
            styles= {{ input: { marginLeft: '-0.8rem', width: '10rem' } }}
            id="specify-insurance"
            value={currInsurance}
            onChange={(e) => setCurrInsurance(e.target.value)}
            disabled={insurance=="No"}
          />
        </Radio.Group>
        <h3 style={{ marginTop: '3vh' }}>Does your patient have a Primary Care Provider (PCP)?</h3>
        <Radio.Group
          className={styles.group}
          value={pcp}
          onChange={setPCP}
        >
          <Radio value="No" label="No" styles={RadioStyle}/>
          <Radio value="Yes" label="Yes:" styles={RadioStyle} />
          <TextInput 
            size="xs"
            styles= {{ input: { marginLeft: '-0.8rem', width: '10rem' } }}
            id="specify-pcp"
            value={currPCP}
            onChange={(e) => setCurrPCP(e.target.value)}
            disabled={pcp=="No"}
          />
        </Radio.Group>
        <div className={styles.progress}>
          <Button className={styles.backButton} onClick={prevView}><ArrowLeft/></Button>
          {error ? 
            <Tooltip label={error} position="bottom" withArrow>
              <span>
                <Button className={styles.next} type="submit" disabled uppercase>
                  Select Referrals
                  <ArrowRight className={styles.right}/>
                </Button>
              </span>
            </Tooltip>  :
            <Button className={styles.next} type="submit" uppercase>
              Select Referrals
              <ArrowRight className={styles.right}/>
            </Button>
          }
        </div>
      </form>
    </div>
  )
}
