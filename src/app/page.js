import Image from "next/image";
import styles from "./page.module.css";
import Information from "@/components/Information/Information";
import Medical from "@/components/Medical/Medical";
import Treatment from "@/components/treatment/Treatment";
import Visit1 from "@/components/Visit/Visit";
import Visit2 from "@/components/Visit/Visit2";
import FormApprove from "@/components/FormApprove/FormApprove";
import Discount from "@/components/Discount/Discount";

export default function Home() {
  return (
    <main className="home">
      <Information />
      <Medical />
      <Treatment />
      <Visit1 />
      <Visit2 />
      <FormApprove />
      <Discount />
    </main>
  );
}
