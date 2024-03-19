

import LangContextProvider from "@/Context/LangContext";
import "./globals.css";
import Layout from "@/components/_Layout/Layout";

export const metadata = {
  title: "DentSpa",
  description:
    "Here in DentSpa® we put your interests first. Our mission is to provide you with the safest and highest-quality options to choose from. We take your needs very seriously. Our staff are hand-selected based on strict qualification criteria and are subject to constant quality control through DentSpa®.",
};

export default function RootLayout({ children }) {
  return (
    <LangContextProvider>
      <Layout layout_page={children} />
    </LangContextProvider>
  );
}
