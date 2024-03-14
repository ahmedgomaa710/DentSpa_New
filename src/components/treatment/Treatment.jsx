import React from "react";
import Title from "../Title/Title";
import styles from "./Treatment.module.css";
import Image from "next/image";

export default function Treatment() {
  return (
    <section className={styles.treatment}>
      <Title name="Your Treatment Plan " />
      <div className={styles.main_treatment}>
        <div className={styles.num_plan}>
            <ul> 
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
            </ul>
        </div>
        <div className={styles.images_treatment}> 
            <ul> 
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p1.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p2.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
                <li><Image src="/images/p3.png" alt="logo" width={40} height={70} /></li>
            </ul>
        </div>
        <div className={styles.num_plan}>
            <ul> 
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
                <li> 18 </li>
            </ul>
        </div>
      </div>
    </section>
  );
}
