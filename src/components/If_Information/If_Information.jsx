"use client";
import dynamic from 'next/dynamic';
import useScreenWidth from '@/lib/customHooks/useScreenWidth';
import React from 'react'
const MyLazyInformation = dynamic(() =>
  import("../Information/Information")
);
const MyLazyInformation_mob = dynamic(() =>
  import("@/Components_mob/Information/Information")
);
export default function If_Information() {
    const screenWidth = useScreenWidth();

  return (
    <> 
        {screenWidth <= 992 ? <MyLazyInformation_mob /> : <MyLazyInformation />}
    </>
  )
}
