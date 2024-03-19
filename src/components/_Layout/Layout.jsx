"use client";
import LangContextProvider, { LangContext } from "@/Context/LangContext";
import React, { useContext } from "react";
import Hero from "../hero/Hero";
import NavBer from "../navBer/NavBer";
import Ask from "../Ask/Ask";

export default function Layout(props) {
  const langCtx = useContext(LangContext);

  return (
    <html lang="en">
      <body className="body">
        <LangContextProvider>
          <div dir={langCtx === "ar" ? "rtl" : "ltr"}>
            <NavBer />
            <Hero />
            <div className="main-container">
              <main className="app">
                <div className="content_app">{props.layout_page}</div>
                <Ask />
              </main>
            </div>
          </div>
        </LangContextProvider>
      </body>
    </html>
  );
}
