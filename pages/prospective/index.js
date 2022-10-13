import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Prospective.module.css'

// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';

// import ArrowBack from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForward from '@mui/icons-material/ArrowForwardIos';

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

import { Paper } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';

export default function Prospective() {
  const [expanded, setExpanded] = useState('panel1');
  const [flow, setFlow] = useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const nextFlow = (e) => {
    setFlow(flow+1);
  }

  const prevFlow = (e) => {
    setFlow(flow-1);
  }

  const endFlow = (e) => {
    setFlow(8);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Prospective Volunteers</title>
        <meta name="description" content="New Arbor Clinic Workflow for all undergraduate volunteers. Changes
        aim to create an equitable and fulfilling volunteer experience while improving the patient experience.
        The new workflow will go into effect on October 1st following our Fall All Hands from 10:00am-12:30pm.
        Read to the bottom of the page to find details for Fall Shift Signups." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className={styles.letterBackground}>
        <Paper className={styles.letter} elevation={16}>
          <h2>Arbor Roles & Flow</h2>
          <p>Last Updated 10/11/2022</p>
          <h4 className={styles.mobile}>* For a better viewing experience, try opening this link on a bigger screen. *</h4>
          <br/>
          {/* <h3>Motivation</h3>
          <br/><br/> */}
          <h3>Arbor Volunteer Roles</h3>
          <div className={styles.roles}>
            <p>
              &emsp; All first year Arbor volunteers will receive the <strong>Patient Navigator</strong> training during
              MED 181. After 3 quarters in the Patient Navigator role, volunteers 
              are eligible to become <strong>Referrals Chairs</strong>, <strong>Front Desk Managers</strong>, 
              or <strong>Preclinical Volunteers</strong>. For a high level overview of these roles, please refer to our
              clinic flow diagram below.
            </p>
            <div className={styles.img}>
              <Image src="/images/volunteers/roles.png" layout="fill" />
            </div>
          </div>
          <br/>
          <h3>Arbor Clinic Flow</h3>
          <br/>
          <p>&emsp; Click on the arrows to walk through our clinic flow or <a onClick={(e) => endFlow(e)}>jump to the end</a>.</p>
          <div className={styles.flow}>
            {flow == 1 ? <ChevronLeft className={styles.grey}/> : <ChevronLeft className={styles.arrow} onClick={(e) => prevFlow(e)} />}
            <div className={styles.img}>
              <Image src={`/images/volunteers/flow/${flow}.png`} layout="fill" priority={true} />
            </div>
            {flow == 8 ? <ChevronRight className={styles.grey}/> : <ChevronRight className={styles.arrow} onClick={(e) => nextFlow(e)} />}
          </div>
          <br/>
          <h3>Any questions?</h3>
          <div className={styles.training}>
            <p>
              &emsp; Knowledge of clinic roles or flow will NOT enhance your application. Rather, this information is
              provided for you to get a better sense of what Arbor volunteers do in clinic. Please do not worry about
              any acronyms or terminology used. If accepted to Arbor, you will be duly trained to succeed in your role.
            </p>
          </div>
        </Paper>
      </div>
    </div>
  )
}
