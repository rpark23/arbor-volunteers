import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Tool.module.css';

import template from "../../data/AVS_template.json";

import { Button, Checkbox, Text, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight, ExternalLink, MoodHappy } from 'tabler-icons-react';
// import RichTextEditor from './RichText';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export default function Forms(props) {
  const { note, form, pcpSite, prevScreen, nextScreen } = props;

  const [value, setValue] = useState(note);

  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  useEffect(() => {
    // const description = template[0].description + '<br>' + template[0].Ravenswood.description;
    // document.getElementById('referral-site').innerHTML = description;
    // setValue('<h1>After Visit Summary of Referrals</h1><br>' + description);
  }, []);

  const modules = {
    toolbar: [
      [{ size: [] }],
      ['bold', 'italic', 'underline', {'background': []}, {'color': []}],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    }
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'background',
    'color'
  ]

  return (
    <div className={styles.visitView}>
      <div className={styles.forms}>
        <h2 className={styles.sectionHeader}>Forms & EMR Note</h2>
        { form ?
          <Link href={form} passHref>
            <Button component="a" download={form.slice(7)} target="_blank" rel="noreferrer" className={styles.secondaryButton} rightIcon={<ExternalLink />}>{pcpSite} Cover Sheet</Button>
          </Link> : "No referral forms needed!"
        }
        
        <QuillNoSSRWrapper className={styles.quillNote} modules={modules} formats={formats} theme="snow" value={value} id="quill"/>
        {/* <p leftIcon={<MoodHappy/>}>Congratulations on finishing your patient visit!</Text> */}
        <div className={styles.progress}>
          <Button className={styles.backButton} onClick={prevScreen}><ArrowLeft/></Button>
          {/* <Button className={styles.next} onClick={nextScreen} uppercase>
            Next
            <ArrowRight className={styles.right}/>
          </Button> */}
        </div>
      </div>
    </div>
  )
}
