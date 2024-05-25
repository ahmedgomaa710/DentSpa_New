import React from 'react';
import styles from "./Package.module.css";
import Title from '../Title/Title';
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function Package({langs}) {
  return (
    <section className={styles.package}>
        <Title name={langs[42].value}  />
        

        <Box className={styles.main_package} sx={{ flexGrow: 1 }} >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a1.svg" alt="images" width={25} height={25} />
                </div>
                <h2>{langs[43].value} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a2.svg" alt="images" width={25} height={25} />
                </div>
                <h2>{langs[50].value}</h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a3.svg" alt="images" width={25} height={25} />
                </div>
                <h2>{langs[51].value} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a4.svg" alt="images" width={25} height={25} />
                </div>
                <h2> {langs[44].value} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a5.svg" alt="images" width={25} height={25} />
                </div>
                <h2> {langs[48].value}</h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a6.svg" alt="images" width={25} height={25} />
                </div>
                <h2>  {langs[49].value} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a7.svg" alt="images" width={25} height={25} />
                </div>
                <h2>  {langs[45].value}</h2>
              </div>
            </Grid>
        
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a8.svg" alt="images" width={25} height={25} />
                </div>
                <h2>  {langs[46].value} </h2>
              </div>
            </Grid>
        
            <Grid item lg={4} xs={12}>
              <div className={styles.sub_package}>
                <div className={styles.img_package}>
                  <Image src="/images/a9.svg" alt="images" width={25} height={25} />
                </div>
                <h2> {langs[47].value}</h2>
              </div>
            </Grid>
        
          </Grid>
        </Box>
    </section>
  )
}
