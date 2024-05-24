"use client";
import React, { useContext } from "react";
import styles from "./Information.module.css";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LangContext } from "@/Context/LangContext";
import Title from "@/components/Title/Title";

export default function Information({api}) {

  
console.log(api);



  const langCtx = useContext(LangContext);
  return (
    <section className={styles.information}>
      <p>
        Here in DentSpa® we put your interests first. Our mission is to provide
        you with the safest and highest-quality options to choose from. We take
        your needs very seriously. Our staff are hand-selected based on strict
        qualification criteria and are subject to constant quality control
        through DentSpa®.
      </p>
      <Title name="Your Information" />

      <div className={styles.general}>
        <h2> General </h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className={styles.rays}>
        <h2> X-Rays </h2>

        <div className={styles.slider_reys}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} rowSpacing={1}>
              <Grid item lg={6} xs={6}>
                <div className={styles.sub_rays}>
                  <Image
                    src={"/images/img1.png"}
                    alt="rays"
                    width={320}
                    height={230}
                  />
                </div>
              </Grid>
              <Grid item lg={6} xs={6}>
                <div className={styles.sub_rays}>
                  <Image
                    src={"/images/img1.png"}
                    alt="rays"
                    width={320}
                    height={230}
                  />
                </div>
              </Grid>
              <Grid item lg={6} xs={6}>
                <div className={styles.sub_rays}>
                  <Image
                    src={"/images/img1.png"}
                    alt="rays"
                    width={320}
                    height={230}
                  />
                </div>
              </Grid>
              <Grid item lg={6} xs={6}>
                <div className={styles.sub_rays}>
                  <Image
                    src={"/images/img1.png"}
                    alt="rays"
                    width={320}
                    height={230}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className={styles.rays}>
        <h2> Intraoral Records </h2>

        <div className={styles.slider_reys}>
          <div className={styles.sub_rays}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1} rowSpacing={1}>
                <Grid item lg={6} xs={6}>
                  <div className={styles.sub_rays}>
                    <Image
                      src={"/images/img1.png"}
                      alt="rays"
                      width={320}
                      height={230}
                    />
                  </div>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <div className={styles.sub_rays}>
                    <Image
                      src={"/images/img1.png"}
                      alt="rays"
                      width={320}
                      height={230}
                    />
                  </div>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <div className={styles.sub_rays}>
                    <Image
                      src={"/images/img1.png"}
                      alt="rays"
                      width={320}
                      height={230}
                    />
                  </div>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <div className={styles.sub_rays}>
                    <Image
                      src={"/images/img1.png"}
                      alt="rays"
                      width={320}
                      height={230}
                    />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
