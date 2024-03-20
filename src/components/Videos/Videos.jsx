"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import styles from "./Videos.module.css";
import Title from "../Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore  from "swiper";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useScreenWidth from "@/lib/customHooks/useScreenWidth";
import { LangContext } from "@/Context/LangContext";
SwiperCore.use([Pagination, A11y, Autoplay]);

export default function Videos() {
  const langCtx = useContext(LangContext);
  const screenWidth = useScreenWidth();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const swiperRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

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

  const videoIds = ["q8sg9Tj5kyk", "q8sg9Tj5kyk", "q8sg9Tj5kyk"];

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        playNextVideo();
      }, 6000);


      return () => clearInterval(interval);
    }
  }, [currentVideoIndex, autoplay]);

  const onVideoEnd = () => {
    setAutoplay(false);
    playNextVideo();
  };

  const playNextVideo = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    setCurrentVideoIndex(nextVideoIndex);
    swiperRef.current.swiper.slideTo(nextVideoIndex);
    setAutoplay(true);
  };

  return (

    <section className={styles.videos}>
      <Title name="Patients had the same treatment that you are going to do" /> 
      <div className={styles.main_videos}>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={
            screenWidth >= 992 ? 4 :
            screenWidth >= 768 ? 3 :
            screenWidth >= 568 ? 2 :
            1.2
          }
          thumbs
          
          loop={true}
          pagination={{
            clickable: true,
            
          }}
        >
          {videoIds.map((videoId, index) => (
            <SwiperSlide key={index}>
              <div className={styles.sub_video}>
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onEnd={index === currentVideoIndex ? onVideoEnd : null}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}