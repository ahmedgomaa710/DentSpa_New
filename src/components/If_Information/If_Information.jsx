"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import useScreenWidth from '@/lib/customHooks/useScreenWidth';

const MyLazyInformation = dynamic(() =>
  import("../Information/Information"), { ssr: false }
);

const MyLazyInformation_mob = dynamic(() =>
  import("@/Components_mob/Information/Information"), { ssr: false }
);

export default function If_Information(props) {
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <> 
      {screenWidth <= 992 ? <MyLazyInformation_mob api={props.api}  langs={props.langs} /> : <MyLazyInformation api={props.api}   langs={props.langs}/>}
    </>
  );
}