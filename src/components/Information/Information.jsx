"use client"
import React from "react";
import styles from "./Information.module.css";
import Title from "../Title/Title";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, A11y, Autoplay } from "swiper/modules";

// styles swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


export default function Information() {
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
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> Case ID </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
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
        <Swiper
            modules={[ Pagination, A11y , Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            thumbs
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}

          >
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.rays}>
        <h2> Intraoral Records  </h2>

        <div className={styles.slider_reys}> 
        <Swiper
            modules={[ Pagination, A11y , Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            key={2}
            thumbs
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}

          >
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sub_rays}> 
                  <Image src={"/images/img1.png"} alt="rays" width={320} height={230} /> 
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
