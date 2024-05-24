'use client'
import React, { useContext } from "react";
import Title from "../Title/Title";
import styles from "./Medical.module.css";
import { LangContext } from "@/Context/LangContext";
export default function Medical({ api }) {
  const langCtx = useContext(LangContext);

  const { hiv, cardiac_disorder, blood_pressure, hepatitis, diabetes, asthma, epilepsy, cancer, other, medical_history, chief_complaint, wishes, expectations } = api;

  return (
    <section className={styles.medical}>
      <Title name="Medical History Anamnesis" />
      <div className={styles.sub_medical}>
        <h2>

          Do you have or have had any of the following medical conditions?
        </h2>
        <ul className={`${styles.medical_checked} ${langCtx === "ar" ? styles.medical_ar : null} `}>
          <li className={hiv ? styles.active : ""} > HIV </li>
          <li className={cardiac_disorder ? styles.active : ""}> Cardiac Disorder </li>
          <li className={blood_pressure ? styles.active : ""}> Blood Pressure </li>
          <li className={hepatitis ? styles.active : ""}> Hepatitis </li>
          <li className={diabetes ? styles.active : ""}> Diabetes </li>
          <li className={asthma ? styles.active : ""}> asthma </li>
          <li className={epilepsy ? styles.active : ""}> epilepsy </li>
          <li className={cancer ? styles.active : ""}> cancer </li>
          <li className={other ? styles.active : ""}> other </li>
        </ul>
      </div>
      <div className={styles.sub_medical}>
        <h2>Is there a significant major illness you had in the past? </h2>
        <div className={styles.answer_sub_medical}> Lorem ipsum </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>What are the surgical operations you had before? </h2>
        <div className={styles.answer_sub_medical}> {medical_history} </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>Chief Complaint:</h2>
        <div className={styles.answer_sub_medical}>
          {chief_complaint}
        </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>Wishes </h2>

        <div className={styles.answer_sub_medical}>

          {wishes}
        </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>Expectations </h2>
        <div className={styles.answer_sub_medical}>
          {expectations}
        </div>
      </div>
    </section>
  );
}
