import { useEffect, useState } from 'react';
import styles from '../../styles/Tool.module.css';

import template from "../../data/AVS_template.json";

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
// import RichTextEditor from './RichText';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export default function PCP(props) {
  const { avs, prevScreen, nextScreen } = props;

  const [value, setValue] = useState(avs.join(''));

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
    <div className={styles.referralsView}>
      <div className={styles.avs}>
        <h2 className={styles.sectionHeader}>After Visit Summary</h2>
        <QuillNoSSRWrapper className={styles.quill} modules={modules} formats={formats} theme="snow" value={value} id="quill"/>
        <div className={styles.progress}>
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
