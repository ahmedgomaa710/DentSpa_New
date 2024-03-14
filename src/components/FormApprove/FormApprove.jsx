'use client'
import React, { useState } from "react";
import styles from "./FormApprove.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";

function FormDecline() {
  return (
    <div className={styles.form_decline}>
      <form>
        <h2> The reason of Decline </h2>
        <div className={styles.check_decline}>
          <ul>
            <li className={styles.sub_check_decline}>
              <input type="checkbox" name="decline" hidden id="decline-1" />
              <label htmlFor="decline-1"> Price</label>
            </li>
            <li className={styles.sub_check_decline}>
              <input type="checkbox" name="decline" hidden id="decline-2" />
              <label htmlFor="decline-2"> I Will come later</label>
            </li>
            <li className={styles.sub_check_decline}>
              <input type="checkbox" name="decline" hidden id="decline-3" />
              <label htmlFor="decline-3"> Agent </label>
            </li>
            <li className={styles.sub_check_decline}>
              <input type="checkbox" name="decline" hidden id="decline-4" />
              <label htmlFor="decline-4"> Flight is expensive</label>
            </li>
            <li className={styles.sub_check_decline}>
              <input type="checkbox" name="decline" hidden id="decline-5" />
              <label htmlFor="decline-5"> I am looking to change my plan.</label>
            </li>
            <li className={styles.sub_check_decline}>
              <input type="checkbox" name="decline" hidden id="decline-6" />
              <label htmlFor="decline-6"> Other </label>
            </li>
          </ul>



        </div>
        <textarea className="ctm-input" ></textarea>
        <div className={styles.main_btn_dene}> 
        <button className={styles.btn_dene}> Submit </button>
            
        </div>
      </form>
    </div>
  );
}

export default function FormApprove() {
    const [hendleDecline , setHendleDecline ] = useState(false) 
  return (
    <section className={styles.form_approve}>
      <form>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center" spacing={2} rowSpacing={2}>
            <Grid item lg={5} xs={12}>
              <div className={styles.btn_approve}>
                <button className="ctm-btn"> Approve </button>
                <a href="" className="ctm-btn2">
                  <Image
                    src={"/images/download.png"}
                    alt="download"
                    width={20}
                    height={20}
                  />
                  <div>
                    <h3> Download </h3>
                    <span> the treatment plan </span>
                  </div>
                </a>
              </div>
              <div className={styles.btn_decline}>
                <button type="button" onClick={() => setHendleDecline(true)}>
                  <Image src={"/images/x.png"} alt="" width={13} height={13} />I
                  want to decline the treatment plan
                </button>
              </div>
            </Grid>
            <Grid item lg={7} xs={12}>
              <div className={styles.info_approve}>
                <Image
                  src={"/images/ico2.svg"}
                  alt="info_approve"
                  width={60}
                  height={60}
                />
                <p>
                  <i>
                    When you approve the treatment plan, your consultant will
                    discuss the finalization details of your visit with you.
                  </i>
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
      {hendleDecline ? <FormDecline /> : null}
      
    </section>
  );
}
