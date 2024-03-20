"use client";
import  { LangContext } from "@/Context/LangContext";
import React, { useContext } from "react";
import Hero from "../hero/Hero";
import NavBer from "../navBer/NavBer";
const MyLazyHero = dynamic(() => import('../hero/Hero'));
const MyLazyHero_mob = dynamic(() => import('../../Components_mob/Hero/Hero'));
import dynamic from 'next/dynamic';
import Ask from "../Ask/Ask";
import useScreenWidth from "@/lib/customHooks/useScreenWidth"
export default function Layout(props) {
  const langCtx = useContext(LangContext);
  const screenWidth = useScreenWidth();
  
  return (
    <html lang="en">
      <body className="body">
        <div dir={langCtx === "ar" ? "rtl" : "ltr"}>

          <NavBer />
          {screenWidth <= 992 ? <MyLazyHero_mob /> : <MyLazyHero /> }
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
