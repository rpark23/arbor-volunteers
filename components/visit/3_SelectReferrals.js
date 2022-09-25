import { useState, useEffect} from 'react';
import styles from '../../styles/Tool.module.css';

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

export default function SelectReferrals(props) {
  const { handleOpen, setView, primaryCare, setPrimaryCare, labs, setLabs, fasting, setFasting, imaging, setImaging, 
    xray, setXray, ct, setCT, mri, setMRI, us, setUS, medications, setMedications } = props.allProps;
  
  const [error, setError] = useState(null);

  const prevView = (e) => {
    e.preventDefault();
    setView(1);
  }

  const handleChange = (e, func) => {
    func(e.target.checked);
  }

  useEffect(() => {
    if (imaging && !xray && !ct && !mri && !us) {
      setError("Please select an imaging type");
    } else {
      setError(false);
    }
  }, [imaging, xray, ct, mri, us]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setView(5);
  }

  const CheckboxStyle = { 
    label: { marginLeft: '-0.25rem' },
    input: { border: 'solid 1px #888' }
  }

  const NestedStyle = { 
    label: { margin: '0 0.6rem 0 -0.4rem' },
    input: { border: 'solid 1px #888' }
  }

  return (
    <div className={styles.selectReferrals}>
      <h2 className={styles.sectionHeader} >Medical Referrals</h2>
      <form onSubmit={handleSubmit}>
        <h3>Which of the following referrals does your patient need?</h3>
        <div className={styles.options}>
          <div>
            <Checkbox checked={primaryCare} onChange={(e) => handleChange(e, setPrimaryCare)} label="Primary Care" styles={CheckboxStyle} />
          </div>
          <div>
            <Checkbox checked={labs} onChange={(e) => handleChange(e, setLabs)} label="Labs:" styles={CheckboxStyle} style={{ marginRight: '1rem' }}/>
            {labs ? <Checkbox checked={fasting} onChange={(e) => handleChange(e, setFasting)} label="Fasting suggested?" styles={CheckboxStyle} /> : null}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Checkbox checked={imaging} onChange={(e) => handleChange(e, setImaging)} label="Imaging:" styles={CheckboxStyle} />
            {imaging ? 
            <div style={{ display: 'flex', margin: '0.75rem 0 0 1.5rem' }}>
              <Checkbox checked={xray} onChange={(e) => handleChange(e, setXray)} label="X-ray" styles={NestedStyle}/>
              <Checkbox checked={ct} onChange={(e) => handleChange(e, setCT)} label="CT" styles={NestedStyle}/>
              <Checkbox checked={mri} onChange={(e) => handleChange(e, setMRI)} label="MRI" styles={NestedStyle}/>
              <Checkbox checked={us} onChange={(e) => handleChange(e, setUS)} label="US" styles={NestedStyle}/>
            </div> : null}
          </div>
          <div>
            <Checkbox checked={medications} onChange={(e) => handleChange(e, setMedications)} label="Medications:" styles={CheckboxStyle} />
            {/* <FormControlLabel control={<Checkbox checked={medications} onChange={(e) => handleChange(e, setMedications)} sx={{ p: 0.5 }}/>} label="Medications" /> */}
          </div>
        </div>
        <div className={styles.progress}>
          <Button className={styles.backButton} onClick={prevView}><ArrowLeft/></Button>
          {error ? 
            <Tooltip label={error} position="bottom" withArrow>
              <span>
                <Button className={styles.next} type="submit" disabled uppercase>
                  Review Referrals
                  <ArrowRight className={styles.right}/>
                </Button>
              </span>
            </Tooltip>  :
            <Button className={styles.next} type="submit" uppercase>
              Review Referrals
              <ArrowRight className={styles.right}/>
            </Button>
          }
        </div>
        {/* <TextField
          className={styles.textfield}
          label="Other Referrals"
          variant="outlined"
          multiline
          rows={3}
        /> */}
        {/* <div className={styles.progress}>
          <Button variant="contained" className={styles.left} onClick={prevView}><ArrowBackIcon/></Button>
          {error ? 
            <Tooltip title={error}>
              <span>
                <Button variant="contained" className={styles.next} type="submit" disabled>
                  Health Ed
                  <ArrowForwardIcon className={styles.right}/>
                </Button>
              </span>
            </Tooltip>  :
            <Button variant="contained" className={styles.next} type="submit" >
              Health Ed
              <ArrowForwardIcon className={styles.right}/>
            </Button>
          }
        </div>     */}
      </form>      
    </div>
  )
}
