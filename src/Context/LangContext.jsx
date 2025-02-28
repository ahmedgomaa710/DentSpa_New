"use client";
import { useEffect, useState } from "react";
import { createContext } from "react";
export const LangContext = createContext();
export const LangContextSet = createContext();

export default function LangContextProvider({ children }) {
  const [lang, setLang] = useState("en"); // en or ar

  useEffect(() => {
    const tokenLang = localStorage.getItem("lang");

    if (tokenLang ) {
      if (tokenLang === "ar" || tokenLang === "en") {
        setLang(tokenLang);
      }
    } else {
     localStorage.setItem("lang","en");
    }
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <LangContextSet.Provider value={setLang}>
        {children}
      </LangContextSet.Provider>
    </LangContext.Provider>
  );
}
