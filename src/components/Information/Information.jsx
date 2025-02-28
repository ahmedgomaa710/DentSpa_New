"use client"
import React, { useContext } from "react";
import styles from "./Information.module.css";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// styles swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { LangContext } from "@/Context/LangContext";
import useScreenWidth from "@/lib/customHooks/useScreenWidth";
import Title from "../Title/Title";


export default function Information({ api, langs }) {




  const { case_id, gender, age, language, country, guest_id, x_rays, intraoral_records } = api
  const showRays = x_rays.map((e, index) => (
    <SwiperSlide key={index}>
      <div className={styles.sub_rays}>
        <Image src={e} alt="rays" width={320} height={230} />
      </div>
    </SwiperSlide>
  ))
  const showintraoral = intraoral_records.map((e, index) => (
    <SwiperSlide key={index}>
      <div className={styles.sub_rays}>
        <Image src={e} alt="rays" width={320} height={230} />
      </div>
    </SwiperSlide>
  ))





  const langCtx = useContext(LangContext);
  const screenWidth = useScreenWidth();
  return (
    <section className={styles.information}>
      <p>
        {langs[3].value}
      </p>
      <Title name={langs[4].value} />

      <div className={styles.general}>
        <h2> {langs[5].value} </h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/1.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {case_id} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/2.svg" alt="img" width={30} height={30} />
                </div>
                <h2>{gender} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/3.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {age} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/4.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {language} </h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/5.svg" alt="img" width={30} height={30} />
                </div>
                <h2> {country}</h2>
              </div>
            </Grid>
            <Grid item lg={4} xs={6}>
              <div className={styles.sub_general}>
                <div className={styles.img_general}>
                  <Image src="/images/6.svg" alt="img" width={30} height={30} />
                </div>
                <h2>{guest_id} </h2>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {x_rays.length === 0 ? null : <div className={styles.rays}>
        <h2> {langs[6].value} </h2>

        <div className={styles.slider_reys}>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={
              screenWidth >= 992 ? 4 :
                screenWidth >= 768 ? 3 :
                  screenWidth >= 568 ? 2 :
                    1
            }
            key={"rays1"}
            thumbs
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}

          >

            {x_rays.length === 0 ? null : showRays}


          </Swiper>
        </div>
      </div>
      }

      {showintraoral.length === 0 ? null : <div className={styles.rays}>
        <h2>{langs[7].value}   </h2>

        <div className={styles.slider_reys}>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={
              screenWidth >= 992 ? 4 :
                screenWidth >= 768 ? 3 :
                  screenWidth >= 568 ? 2 :
                    1
            }
            key={"reys2"}
            thumbs
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}

          >

            {showintraoral.length === 0 ? null : showintraoral}

          </Swiper>
        </div>
      </div>}


    </section>
  );
}
