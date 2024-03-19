import Image from "next/image";
import styles from "./page.module.css";
import Information from "@/components/Information/Information";
import Medical from "@/components/Medical/Medical";
import Treatment from "@/components/treatment/Treatment";
import Visit1 from "@/components/Visit/Visit";
import Visit2 from "@/components/Visit/Visit2";
import FormApprove from "@/components/FormApprove/FormApprove";
import Discount from "@/components/Discount/Discount";
import Videos from "@/components/Videos/Videos";
import Images from "@/components/Images_after/Images";
import Package from "@/components/Package_Includes/Package";

export default function Home() {
  return (
    <div className="home">
      <Information />
      <Medical />
      <Treatment />
      <Visit1 />
      <Visit2 />
      <FormApprove />
      <Discount />
      <Videos /> 
      <Images />
      <Package /> 
    </div>
  );
}
