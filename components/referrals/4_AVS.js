import { useEffect, useState } from 'react';
//import { HTMLtoDOCX } from 'html-to-docx';
//import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
import styles from '../../styles/Tool.module.css';

import template from "../../data/AVS_template.json";

import { Button, Checkbox, TextInput, Tooltip } from '@mantine/core';
import { ArrowLeft, ArrowRight, FileX } from 'tabler-icons-react';
// import RichTextEditor from './RichText';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export default function AVS(props) {
  const { avs, prevScreen, nextScreen } = props;

  const [value, setValue] = useState(avs.join(''));

  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const nestedTags = (text, child, size, bold, underline, italics) => {
    if (child.children.length) {
      let docxChildren = []
      for (const tag of child.children) {
        let split = text.split('<' + tag.tagName.toLowerCase() +'>');
        if (split[0]) {
          docxChildren.push(new TextRun({
              text: split[0],
              font: "Calibri",
              bold: bold,
              size: size,
            })
          );
          text = split[1].split('</' + tag.tagName.toLowerCase() +'>');

          if (tag.tagName == "STRONG") {
            bold = true;
            console.log(text[0]);
            console.log(typeof(text[0]));
            const el = document.createElement('div');
            el.innerHTML = text[0];
            let recursiveChildren = nestedTags(text[0], el, size, bold, underline, italics);
            docxChildren.push(recursiveChildren);
            bold = false;
          }

          if (tag.tagName == "U") {
            underline = true;
            console.log(text[0]);
            console.log(typeof(text[0]));
            const el = document.createElement(tag.tagName.toLowerCase());
            el.innerHTML = text[0];

            let recursiveChildren = nestedTags(text[0], el, size, bold, underline, italics);
            docxChildren.push(recursiveChildren);
            underline = false;
          }

          if (underline) {
            underline = {}
          }
          
          docxChildren.push(new TextRun({
            text: text[1],
            font: "Calibri",
            bold: bold,
            size: size,
            underline: underline,
          }));

          return docxChildren;
        }
      }
    } else {
      return [new TextRun({
        text: text,
        font: "Calibri",
        bold: bold,
        size: size,
      })];
    }
  }

  useEffect(() => {
    const el = document.createElement('div');
    el.innerHTML = value;
    let paragraphs = []
    for (const child of el.children) {
      if (child.tagName == "BR") {
        paragraphs.push(new Paragraph({}))
      }
      let text = child.innerHTML;
      let size = 24;
      let bold = false;
      let underline = false;
      let italics = false;
      if (child.tagName[0] == "H") {
        bold = true;
      }
      if (child.tagName == "H1") {
        size = 48;
      }
      if (child.tagName == "H2") {
        size = 36;
      }

      //let docxChildren = []
      let docxChildren = nestedTags(text, child, size, bold, underline, italics);
      paragraphs.push(new Paragraph({
        children: docxChildren,
      }));
      // if (child.children.length) {
      //   for (const tag of child.children) {
      //     let docxChildren = nestedTags(text, tag, size, bold, italics)
      //     paragraphs.push(new Paragraph({
      //       children: docxChildren,
      //     }));
      //   }
      //   continue
      // } else {
      //   paragraphs.push(new Paragraph({
      //     children: [new TextRun({
      //       text: text,
      //       font: "Calibri",
      //       bold: bold,
      //       size: size,
      //     })],
      //   }))
      // }
      console.log(child.tagName, child.innerHTML);
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs
        },
      ],
    });

    // Packer.toBlob(doc).then((blob) => {
    //   // saveAs from FileSaver will download the file
    //   saveAs(blob, "AVS.docx");
    // });
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

  async function generateDocx() {
    const doc = new Document({
      sections: [
          {
              properties: {},
              children: [
                  new Paragraph({
                      children: [
                          new TextRun("Hello World"),
                          new TextRun({
                              text: "Foo Bar",
                              bold: true,
                          }),
                          new TextRun({
                              text: "\tGithub is the best",
                              bold: true,
                          }),
                      ],
                  }),
              ],
          },
      ],
    });
    // Packer.toBlob(doc).then((blob) => {
    //   // saveAs from FileSaver will download the file
    //   saveAs(blob, "AVS.docx");
    // });
  }

  return (
    <div className={styles.referralsView}>
      <div className={styles.avs}>
        <h2 className={styles.sectionHeader}>After Visit Summary</h2>
        <QuillNoSSRWrapper className={styles.quill} modules={modules} formats={formats} theme="snow" value={value} id="quill"/>
        {/* <div style={{ display: "flex", marginTop: "3vh", justifyContent: "center", width: "100%" }}>
          <Button className={styles.secondaryButton} onClick={generateDocx}>Download AVS</Button>
        </div> */}
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
