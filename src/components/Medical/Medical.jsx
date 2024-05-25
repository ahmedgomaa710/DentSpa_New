'use client'
import React, { useContext } from "react";
import Title from "../Title/Title";
import styles from "./Medical.module.css";
import { LangContext } from "@/Context/LangContext";
export default function Medical({ api, langs }) {
  const langCtx = useContext(LangContext);

  const { hiv, cardiac_disorder, blood_pressure, hepatitis, diabetes, asthma, epilepsy, cancer, other, medical_history, chief_complaint, wishes, expectations } = api;

  return (
    <section className={styles.medical}>
      <Title name={langs[8].value} />
      <div className={styles.sub_medical}>
        <h2>

          {langs[9].value}
        </h2>
        <ul className={`${styles.medical_checked} ${langCtx === "ar" ? styles.medical_ar : null} `}>
          <li className={hiv ? styles.active : ""} >  {langs[10].value} </li>
          <li className={cardiac_disorder ? styles.active : ""}> {langs[11].value} </li>
          <li className={blood_pressure ? styles.active : ""}>  {langs[14].value} </li>
          <li className={hepatitis ? styles.active : ""}>  {langs[12].value}  </li>
          <li className={diabetes ? styles.active : ""}>  {langs[16].value}  </li>
          <li className={asthma ? styles.active : ""}> {langs[13].value} </li>
          <li className={epilepsy ? styles.active : ""}>  {langs[15].value} </li>
          <li className={cancer ? styles.active : ""}> {langs[17].value}  </li>
          <li className={other ? styles.active : ""}> {langs[18].value} </li>
        </ul>
      </div>
      {/* <div className={styles.sub_medical}>
        <h2>Is there a significant major illness you had in the past? </h2>
        <div className={styles.answer_sub_medical}> Lorem ipsum </div>
      </div> */}
      <div className={styles.sub_medical}>
        <h2>{langs[20].value} </h2>
        <div className={styles.answer_sub_medical}> {medical_history} </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>{langs[21].value}</h2>
        <div className={styles.answer_sub_medical}>
          {chief_complaint}
        </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>{langs[22].value} </h2>

        <div className={styles.answer_sub_medical}>

          {wishes}
        </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>{langs[23].value} </h2>
        <div className={styles.answer_sub_medical}>
          {expectations}
        </div>
      </div>
    </section>
  );
}
