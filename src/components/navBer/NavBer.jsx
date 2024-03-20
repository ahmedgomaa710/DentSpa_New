"use client" 
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./navber.module.css";
import { LangContext, LangContextSet } from "@/Context/LangContext";
export default function NavBer() {
  const langCtx = useContext(LangContext);
  const langSetLang = useContext(LangContextSet);

  const handleChangLangContext = () => {
    if (langCtx === "ar") {
      langSetLang("en");
      localStorage.setItem("lang", "en");
    } else if (langCtx === "en") {
      langSetLang("ar");
      localStorage.setItem("lang", "ar");
    }
  };

  return (
    <div className={styles.top_ber}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" width={120} height={70} />
        </div>
        <div className={styles.btn_support}>
          <a href="" target="_blank">
            <Image src="/images/img_button.svg" alt="btn_support" width={25} height={25} />
            Get support
          </a>

          <div className={styles.btn_top_ber}>
            <button onClick={handleChangLangContext}>
              <i className="bi bi-globe2"></i>
              <span>{langCtx}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
