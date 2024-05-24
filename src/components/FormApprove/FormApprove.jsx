'use client';
import React, { useState } from "react";
import styles from "./FormApprove.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";

function FormDecline({ api }) {
console.log("FormDecline" , api);
  // const showdecline_reasons = api.map((e, index) => (
  //   <li className={styles.sub_check_decline} key={index}>
  //     <input type="checkbox" name="decline" hidden id={`decline-${e.id}`} />
  //     <label htmlFor={`decline-${e.id}`}> {e.reason_text}</label>
  //   </li>
  // ))
  return (
    <div className={styles.form_decline}>
      <form>
        <h2> The reason of Decline </h2>
        <div className={styles.check_decline}>
          <ul>
            {/* {showdecline_reasons} */}
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
  const [hendleDecline, setHendleDecline] = useState(false)
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
