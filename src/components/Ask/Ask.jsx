"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Ask.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import YouTube from "react-youtube";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
SwiperCore.use([Pagination, A11y, Autoplay]);

export default function Ask() {

  const opts = {
    height: "350",
    width: "240",
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 1,
      modestbranding: 1,
      loop: 1,
    },
  };

  const videoIds = ["q8sg9Tj5kyk", "q8sg9Tj5kyk", "q8sg9Tj5kyk"];

  return (
    <section className={styles.ask}>
      <div className={styles.main_ask}>
        <h2> topics that may have your interest</h2>
        <a
          href="https://www.dentspa.com.tr/city-choice-affects-dental-treatment-in-turkey/"
          target="_blank"
        >
          How Your City Of Choice Affects Your Dental Treatment In Turkey
        </a>
        <a
          href="https://www.dentspa.com.tr/digital-smile-design-at-dentspa/"
          target="_blank"
        >
          Digital Smile Design at Dentspa
        </a>
        <a
          href="https://www.dentspa.com.tr/smoking-after-tooth-extraction/"
          target="_blank"
        >
          What You Should Know About Smoking After Tooth Extraction
        </a>
      </div>

      <div className={styles.ask_links}>
        <h2> patients had the same treatment that you are going to do </h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          thumbs
          key="ask1"
          pagination={{
            clickable: true,
          }}
        >
          {videoIds.map((videoId, index) => (
            <SwiperSlide key={index}>
              <div className={styles.sub_askvideo}>
                <YouTube
                  videoId={videoId}
                  opts={opts}
                
                />
                <a href="https://www.youtube.com/shorts/q8sg9Tj5kyk"  target="_blank"> At DentSpa, we make smiles happen that reflect your inner joy! </a> 
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
