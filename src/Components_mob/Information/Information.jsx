"use client";
import React, { useContext } from "react";
import styles from "./Information.module.css";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LangContext } from "@/Context/LangContext";
import Title from "@/components/Title/Title";

export default function Information({ api, langs }) {


  const { case_id, gender, age, language, country, guest_id, x_rays, intraoral_records } = api
  const showRays = x_rays.map((e, index) => (
    <Grid item lg={6} xs={6} key={index}>
      <div className={styles.sub_rays} >
        <Image
          src={e}
          alt="rays"
          width={320}
          height={230}
        />
      </div>
    </Grid>
  ))

  const showintraoral = intraoral_records.map((e, index) => (
    <Grid item lg={6} xs={6} key={index}>
      <div className={styles.sub_rays}>
        <Image
          src={e}
          alt="intraoral_records"
          width={320}
          height={230}
        />
      </div>
    </Grid>
  ))


  const langCtx = useContext(LangContext);
  return (
    <section className={styles.information}>
      <p>
        {langs[3].value}
      </p>
      <Title name="Your Information" />

      <div className={styles.general}>
        <h2> {langs[4].value} </h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2>  {case_id} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {gender} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {age} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {language} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {country} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {guest_id} </h2>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>


      {x_rays.length === 0 ? null : <div className={styles.rays}>
        <h2> {langs[4].value} </h2>

        <div className={styles.slider_reys}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} rowSpacing={1}>
              {showRays}
            </Grid>
          </Box>
        </div>
      </div>
      }


      {intraoral_records.length === 0 ? null :
        <div className={styles.rays}>
          <h2> {langs[5].value} </h2>
          <div className={styles.slider_reys}>
            <div className={styles.sub_rays}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} rowSpacing={1}>
                  {showintraoral}
                </Grid>
              </Box>
            </div>
          </div>
        </div>}

    </section>
  );
}
