"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import styles from "./Videos.module.css";
import Title from "../Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useScreenWidth from "@/lib/customHooks/useScreenWidth";
import { LangContext } from "@/Context/LangContext";
SwiperCore.use([Pagination, A11y]);


function extractYouTubeVideoId(url) {
  const standardLinkPattern = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)(?:&.*)?/;
  const shortsLinkPattern = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?&]+)/;

  let match = url.match(standardLinkPattern);
  if (match && match[1]) {
    return match[1];
  }

  match = url.match(shortsLinkPattern);
  if (match && match[1]) {
    return match[1];
  }

  return null;
}




export default function Videos({ api , langs}) {
  const langCtx = useContext(LangContext);
  const screenWidth = useScreenWidth();
  const swiperRef = useRef(null);
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 1,
      modestbranding: 1,
      loop: 1,
    },
  };
  const ShowVideoApi = api.map((e, index ) => (
    <SwiperSlide key={index}>
    <div className={styles.sub_video}>
      <YouTube
        videoId={extractYouTubeVideoId(e.link)}
        opts={opts}
      />
    </div>
  </SwiperSlide>
  ))





  return (

    <section className={styles.videos}>
      <Title name={langs[41].value} />
      <div className={styles.main_videos}>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={
            screenWidth >= 992 ? 4 :
              screenWidth >= 768 ? 3 :
                screenWidth >= 568 ? 2 :
                  1.6
          }
          thumbs

          loop={false}
          pagination={{
            clickable: true,

          }}
        >
          {ShowVideoApi}
        </Swiper>
      </div>
    </section>
  );
}