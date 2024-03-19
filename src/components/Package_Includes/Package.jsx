import React from 'react';
import styles from "./Package.module.css";
import Title from '../Title/Title';
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function Package() {
  return (
    <section className={styles.package}>
        <Title name="The package includes:" />
        

        <Box className={styles.main_package} sx={{ flexGrow: 1 }} >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a1.png" alt="images" width={25} height={25} />
                </div>
                <h2> Panoramic Radiography - CBCT </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a2.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a3.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a4.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a5.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a6.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a7.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
        
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a8.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
        
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a9.png" alt="images" width={25} height={25} />
                </div>
                <h2> Painless Anesthesia </h2>
              </div>
            </Grid>
        
          </Grid>
        </Box>
    </section>
  )
}
