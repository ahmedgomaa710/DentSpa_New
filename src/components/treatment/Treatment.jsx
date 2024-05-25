'use client';
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import styles from "./Treatment.module.css";
import Image from "next/image";

export default function Treatment({ api , langs}) {



  const treatmentImage = api

  const showTreatmentImage = treatmentImage.map((e, index) => (
   
    <li key={index}>  {e.images.map((e ,index) => ( <Image key={index} src={e} alt="treatment" width={40} height={70} />) )}</li>
  ))




  return (
    <section className={styles.treatment}>
      <Title name= {langs[24].value}  />
      <div className={styles.ov_treatment}>
        <div className={styles.main_treatment}>
          <div className={styles.num_plan}>
            <ul>
              <li> 18 </li>
              <li> 17 </li>
              <li> 16 </li>
              <li> 15 </li>
              <li> 14 </li>
              <li> 13 </li>
              <li> 12 </li>
              <li> 11 </li>
              <li> 21 </li>
              <li> 22 </li>
              <li> 23 </li>
              <li> 24 </li>
              <li> 25 </li>
              <li> 26 </li>
              <li> 27 </li>
              <li> 28 </li>
            </ul>
          </div>
          <div className={styles.images_treatment}>
            <ul>

              {showTreatmentImage}

            </ul>
          </div>
          <div className={styles.num_plan}>
            <ul>
              <li> 48 </li>
              <li> 47 </li>
              <li> 46 </li>
              <li> 45 </li>
              <li> 44 </li>
              <li> 43 </li>
              <li> 42 </li>
              <li> 41 </li>
              <li> 31 </li>
              <li> 32 </li>
              <li> 33 </li>
              <li> 34 </li>
              <li> 35 </li>
              <li> 36 </li>
              <li> 37 </li>
              <li> 38 </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
