"use client";
import LangContextProvider, { LangContext } from "@/Context/LangContext";
import React, { useContext, useEffect } from "react";
import Hero from "../hero/Hero";
import NavBer from "../navBer/NavBer";
const MyLazyNavber = dynamic(() => import('../navBer/NavBer'));
const MyLazyNavber_mob = dynamic(() => import('../../Components_mob/Navber/Navber'));
import dynamic from 'next/dynamic';
import Ask from "../Ask/Ask";
import useScreenWidth from "@/lib/customHooks/useScreenWidth"
export default function Layout(props) {
  const langCtx = useContext(LangContext);
  const screenWidth = useScreenWidth();
  console.log(screenWidth);
  
  return (
    <html lang="en">
      <body className="body">
        <div dir={langCtx === "ar" ? "rtl" : "ltr"}>
{screenWidth > 992 ?  <MyLazyNavber /> : <MyLazyNavber_mob />}
          <Hero />
          <div className="main-container">
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
