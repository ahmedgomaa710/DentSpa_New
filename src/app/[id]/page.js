'use client'
import Medical from "@/components/Medical/Medical";
import Treatment from "@/components/treatment/Treatment";
import Visit from "@/components/Visit/Visit";
import FormApprove from "@/components/FormApprove/FormApprove";
import Discount from "@/components/Discount/Discount";
import Videos from "@/components/Videos/Videos";
import Images from "@/components/Images_after/Images";
import Package from "@/components/Package_Includes/Package";
import If_Information from "@/components/If_Information/If_Information";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { useRouter } from "next/navigation";
import ModalError from "@/components/ModalError/ModalError";
import { useParams } from "next/navigation"
import { BASE_URL } from "@/lib/fetch/get";

export default function OfferIdPage() {
    const params = useParams()
    const [offerData, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/front-end/${params.id}/get-offer`);

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
    }, [params.id]);



    if (loading) {
        return <Loader />
    }


    if (error) {
        return <ModalError error={error} />
    }




    const diagnosis = offerData.data.diagnosis
    const treatment_plan = offerData.data.treatment_plan.treatment_plan
    const visits = offerData.data.treatment_plan.visits
    const decline_reasons = offerData.data.decline_reasons
    const videos = offerData.data.videos
    const status = offerData.data.offer.status
    const translations = offerData.data.translations
    console.log(translations);
    return (
        <div className="home">

            <If_Information api={diagnosis} langs={translations} />
            <Medical api={diagnosis} langs={translations} />
            <Treatment api={treatment_plan} langs={translations} />
            {visits.map((e, index) => (
                <Visit key={index} index={index + 1} dataVisits={e} langs={translations} />
            ))}

            {status === "pending" ? <FormApprove api={decline_reasons} /> : null}
            <Discount langs={translations} />
            <Videos api={videos} langs={translations} />
            <Images />
            <Package langs={translations} />
        </div>
    );
}