import React from "react";
import styles from "./Discount.module.css";
import Image from "next/image";

export default function Discount({langs}) {
  return (
    <div className={styles.discount}>
      <div className={styles.benner_discount}>
        <h2>
        {langs[39].value}
        </h2>
      </div>

      <div className={styles.main_discount}>
        <h2>{langs[40].value}</h2>
        <ul>
          <li> <button> 5% </button></li>
          <li> <button> 10% </button></li>
          <li> <button> 20% </button></li>
        </ul>
      </div>

      <div className={styles.stripe}>
        <Image src="/images/powered.png" alt="powered" width={140} height={30} />
      </div>
    </div>
  );
}
