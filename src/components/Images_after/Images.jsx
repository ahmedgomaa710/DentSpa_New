"use client";
import React from "react";
import styles from "./Images.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// styles swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import 'swiper/swiper-bundle.css';


export default function Images() {
  return (
    <section className={styles.gallary}>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        thumbs
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className={styles.sub_gallary}>
            <Image
              src={"/images/images.png"}
              alt="images"
              width={320}
              height={230}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sub_gallary}>
            <Image
              src={"/images/images.png"}
              alt="images"
              width={320}
              height={230}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sub_gallary}>
            <Image
              src={"/images/images.png"}
              alt="images"
              width={320}
              height={230}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sub_gallary}>
            <Image
              src={"/images/images.png"}
              alt="images"
              width={320}
              height={230}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
