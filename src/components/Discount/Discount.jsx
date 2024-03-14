import React from "react";
import styles from "./Discount.module.css";
export default function Discount() {
  return (
    <div className={styles.discount}>
      <div className={styles.benner_discount}>
        <h2>
          you can get a<span> 5% discount</span> by making a deposit payment.{" "}
        </h2>
      </div>
    </div>
  );
}
