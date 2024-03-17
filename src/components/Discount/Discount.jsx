import React from "react";
import styles from "./Discount.module.css";
import Image from "next/image";

export default function Discount() {
  return (
    <div className={styles.discount}>
      <div className={styles.benner_discount}>
        <h2>
          you can get a<span> 5% discount</span> by making a deposit payment.
        </h2>
      </div>

      <div className={styles.main_discount}>
        <h2>Please select the amount of the down payment that you would like to pay.</h2>
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
