import { forwardRef, useEffect, useRef, useState } from 'react';
import styles from '../../styles/Tool.module.css';

import axios from "axios";

import template from "../../data/AVS_template.json";

import { Autocomplete, Button, Group, Loader, Menu, Text, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function Labs(props) {
  const { nextScreen, prevScreen } = props;
  const { handleOpen, setView, language, zipCode, county, pcp, insurance } = props.allProps;

  const timeoutRef = useRef(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [ med, setMed ] = useState("");

  useEffect(() => {
    const description = template[0].description + '<br>' + template[0].Ravenswood.description;
    //document.cookie = 'cross-site-cookie2=noneCookie; SameSite=None; Secure';

    alert( document.cookie );
    // document.getElementById('referral-site').innerHTML = description;
    // setValue('<h1>After Visit Summary of Referrals</h1><br>' + description);
  }, []);

  const handleChange = async (val) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(true);
      let res;
      await fetch('https://www.goodrx.com/api/v4/search/autocomplete?term=' + val)
        .then((response) => response.json())
        .then((data) => res = data.results);
      const newData = res.map((med) => ({ ...med, value: med.display }));
      setData(newData);
      setLoading(false);
    }
  };

  const fetchMed = async () => {
    if (data.length > 0 && data[0].display == value) {
      setMed(data[0].slug);
      // await fetch(`https://www.goodrx.com/${data[0].slug}`)
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
    }
    console.log(data[0]);
  }

  useEffect(() => {
    fetchMed();
  }, [data]);

  return (
    <div className={styles.medications}>
      <h2 className={styles.sectionHeader}>Medications</h2>
      <Autocomplete
        value={value}
        data={data}
        onChange={handleChange}
        rightSection={loading ? <Loader size={16} /> : null}
        label="Select Medication (from dropdown):"
        placeholder="Medication Name"
        styles={{ input: { width: '20rem' } }}
      />
      <iframe height={400} width={500} src={`https://www.goodrx.com/${med}`} />
      {/* <TextInput 
        placeholder="Medication Name"
        onChange={handleChange}
      /> */}
      {/* <iframe height={900} width={1000} src="https://www.goodrx.com/oxycodone" /> */}
      <div className={styles.progress}>
        <Button className={styles.backButton} onClick={prevScreen}><ArrowLeft/></Button>
        <Button className={styles.next} onClick={nextScreen} uppercase>
          Next
          <ArrowRight className={styles.right}/>
        </Button>
      </div>
    </div>
  )
}
