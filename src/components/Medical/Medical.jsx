'use client'
import React, { useContext } from "react";
import Title from "../Title/Title";
import styles from "./Medical.module.css";
import { LangContext } from "@/Context/LangContext";
export default function Medical() {
  const langCtx = useContext(LangContext);


  
  return (
    <section className={styles.medical}>
      <Title name="Medical History Anamnesis" />
      <div className={styles.sub_medical}>
        <h2>
         
          Do you have or have had any of the following medical conditions?
        </h2>
        <ul className={`${styles.medical_checked} ${langCtx === "ar" ? styles.medical_ar : null } `}>
          <li> HIV </li>
          <li className={styles.active}> Cardiac Disorder </li>
          <li> Blood Pressure </li>
          <li> Hepatitis </li>
          <li> Hepatitis </li>
          <li> Diabetes </li>
          <li> Hepatitis </li>
          <li> Hepatitis </li>
          <li> Diabetes </li>
        </ul>
      </div>
      <div className={styles.sub_medical}>
        <h2>Is there a significant major illness you had in the past? </h2>
        <div className={styles.answer_sub_medical}> Lorem ipsum </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>What are the surgical operations you had before? </h2>
        <div className={styles.answer_sub_medical}> Lorem ipsum </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>Chief Complaint:</h2>
        <div className={styles.answer_sub_medical}>
         
          ex: I have pain while eating, and I don’t smile to hide my bad-looking
          teeth
        </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>Wishes </h2>
        
        <div className={styles.answer_sub_medical}>
         
          ex: I have pain while eating, and I don’t smile to hide my bad-looking
          teeth
        </div>
      </div>
      <div className={styles.sub_medical}>
        <h2>Expectations </h2>
        <div className={styles.answer_sub_medical}>
          I want to keep my remaining teeth, and don’t prefer to have surgery or
          implants. I prefer to make root canal treatments to all the teeth
          before crowning. I want to look like Angelina Jolie.th
        </div>
      </div>
    </section>
  );
}
