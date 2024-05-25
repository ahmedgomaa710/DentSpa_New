'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./hero.module.css";


const TypingAnimation = ({ text, typingSpeed, eraseSpeed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let isErasing = false;
    let timer;

    const animateText = () => {
      if (!isErasing) {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          isErasing = true;
          timer = setTimeout(() => {
            isErasing = false;
            currentIndex = 0;
            setDisplayText('');
          }, eraseSpeed);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(text.substring(0, displayText.length - 1));
        } else {
          isErasing = false;
          clearTimeout(timer);
          timer = setTimeout(() => {
            currentIndex = 0;
            setDisplayText('');
          }, typingSpeed);
        }
      }

      timer = setTimeout(animateText, isErasing ? eraseSpeed : typingSpeed);
    };

    animateText();

    return () => clearTimeout(timer);
  }, [text, typingSpeed, eraseSpeed, displayText.length]);

  return <h2>{displayText}</h2>;
};

export default function Hero({ api }) {
  console.log(api);
  return (
    <section className={styles.hero}>
      <div className={styles.img_hero}>
        <Image src="/images/img.png" alt="img hero" width={400} height={400} />
      </div>
      <div className={styles.text_hero}>

        <TypingAnimation text={api.translations[1].value} typingSpeed={150} eraseSpeed={1500} />
        <p> <span>{api.translations[2].value}</span>:  {api.offer.patient_name} </p>
      </div>
    </section>
  );
}
