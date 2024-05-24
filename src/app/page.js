"use client";
import Medical from "@/components/Medical/Medical";
import Treatment from "@/components/treatment/Treatment";
import Visit from "@/components/Visit/Visit";
import FormApprove from "@/components/FormApprove/FormApprove";
import Discount from "@/components/Discount/Discount";
import Videos from "@/components/Videos/Videos";
import Images from "@/components/Images_after/Images";
import Package from "@/components/Package_Includes/Package";
import If_Information from "@/components/If_Information/If_Information";
import offerLoader from "@/lib/loader/offerLoader"
import { useEffect, useState } from "react";
export default function Home() {
  const [offerData, setData] = useState(null);
  console.log(offerData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://staging.diagnosdent.com/api/v1/front-end/mMWtKc4KM/get-offer");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const diagnosis = offerData?.data.diagnosis
  const treatment_plan = offerData?.data.treatment_plan.treatment_plan
  const visits = offerData?.data.treatment_plan.visits
  const decline_reasons = offerData?.data.decline_reasons
  console.log("decline_reasons" , decline_reasons);
  return (
    <div className="home">

      {diagnosis && <If_Information api={diagnosis} />}
      {diagnosis && <Medical api={diagnosis} />}
      {treatment_plan && <Treatment api={treatment_plan} />}
      {visits && visits.map((e, index) => (
        <Visit key={index} index={index + 1} dataVisits={e} />
      ))}

      {decline_reasons && <FormApprove api={decline_reasons} />}

      <Discount />
      <Videos />
      <Images />
      <Package />
    </div>
  );
}
