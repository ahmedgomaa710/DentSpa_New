'use client';
import React, { useState } from "react";
import styles from "./FormApprove.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";

function FormDecline({ api ,langs }) {
  const showdecline_reasons = api.map((e, index) => (
    <li className={styles.sub_check_decline} key={index}>
      <input type="checkbox" name="decline" hidden id={`decline-${e.decline_reason_id}`} />
      <label htmlFor={`decline-${e.decline_reason_id}`}> {e.reason_text}</label>
    </li>
  ))
  return (
    <div className={styles.form_decline}>
      <form>
        <h2> {langs[36].value} </h2>
        <div className={styles.check_decline}>
          <ul>
            {showdecline_reasons}
          </ul>



        </div>
        <textarea className="ctm-input" ></textarea>
        <div className={styles.main_btn_dene}>
          <button className={styles.btn_dene}>  {langs[38].value} </button>

        </div>
      </form>
    </div>
  );
}

export default function FormApprove({ api , langs }) {
  const handleApprove = async (e) => {
    e.preventDefault();

    try {
      var formdata = new FormData();
      formdata.append("patient_name", "Ibrahim Hasan");

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      const res = await fetch("http://127.0.0.1:8000/api/v1/front-end/mMWtKc4KM/approve-offer", requestOptions)

      if (!res.ok) {
        console.log(await res.json());
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }


  const [hendleDecline, setHendleDecline] = useState(false)
  return (
    <section className={styles.form_approve}>
      <form>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center" spacing={2} rowSpacing={2}>
            <Grid item lg={5} xs={12}>
              <div className={styles.btn_approve}>
                <button className="ctm-btn" onClick={(e) => handleApprove(e)} type="input">  {langs[32].value}  </button>
                <a href="" className="ctm-btn2">
                  <Image
                    src={"/images/download.png"}
                    alt="download"
                    width={20}
                    height={20}
                  />
                  <div>
                    <h3> {langs[34].value} </h3>
                    <span>{langs[35].value} </span>
                  </div>
                </a>
              </div>
              <div className={styles.btn_decline}>
                <button type="button" onClick={() => setHendleDecline(true)}>
                  <Image src={"/images/x.png"} alt="" width={13} height={13} />
                  {langs[33].value}
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
                  {langs[37].value}
                  </i>
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
      {hendleDecline ? <FormDecline api={api} langs={langs}/> : null}

    </section>
  );
}
