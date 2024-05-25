"use client";
import { LangContext } from "@/Context/LangContext";
import React, { useContext, useEffect, useState } from "react";
import Hero from "../hero/Hero";
import NavBer from "../navBer/NavBer";
const MyLazyHero = dynamic(() => import('../hero/Hero'), { ssr: false });
const MyLazyHero_mob = dynamic(() => import('../../Components_mob/Hero/Hero'), { ssr: false });
import dynamic from 'next/dynamic';
import Ask from "../Ask/Ask";
import useScreenWidth from "@/lib/customHooks/useScreenWidth"
import Aos from "aos";
import { useParams } from "next/navigation";












export default function Layout(props) {
  const langCtx = useContext(LangContext);
  const screenWidth = useScreenWidth();
  const [offerData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams()
  useEffect(() => {
    Aos.init();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://staging.diagnosdent.com/api/v1/front-end/${params.id}/get-offer`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setLoading(false)
        setData(result);

      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(true)
      }
    };

    fetchData();
  }, []);

  const offer = offerData?.data.offer
  const translations = offerData?.data.translations
  let content = null
  if (offer && translations) {
    if (screenWidth <= 992) {
      content = <MyLazyHero_mob api={{ offer, translations }} />
    } else {
      content = <MyLazyHero api={{ offer, translations }} />
    }
  }






  return (

    <html lang="en">


      <body className="body">
        <div className={langCtx === "ar" ? "lang_ar" : "lang_en"} dir={langCtx === "ar" ? "rtl" : "ltr"}>

          {translations && <NavBer langs={translations} />}
          {content}
          <div className="main-container" >
            <main className="app">
              <div className="content_app">{props.layout_page}</div>
              <Ask />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
