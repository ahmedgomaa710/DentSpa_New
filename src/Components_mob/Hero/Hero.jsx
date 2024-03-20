import styles from "./Hero_res.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.header_res}>
      <div className={styles.logo_res}>
        <Image src="/images/logo-w.svg" alt="logo" width={120} height={80} />
      </div>
      <h2> Dental Diagnostic Report </h2>
      <h4> Prepared For Mr. Ned Stark </h4>
    </div>
  );
}
