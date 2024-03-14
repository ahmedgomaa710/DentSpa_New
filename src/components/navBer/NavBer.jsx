import React from "react";
import Image from "next/image";
import styles from "./navber.module.css";
export default function NavBer() {
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
        </div>
      </div>
    </div>
  );
}
