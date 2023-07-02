"use client";

import { useEffect, useState } from "react";
import { usePopBoxContext } from "@/context/popBoxContext";
import PopBoxContent from "./PopBoxContent";

export default function PopBox() {
  const { popBox, setPopBox } = usePopBoxContext();
  const [camData, setCamData]: [camData: any, setCamData: any] = useState();

  useEffect(() => {
    if (popBox !== "" && popBox) {
      fetch(popBox)
        .then((res) => res.json())
        .then((data) => {
          setCamData(data.pageProps.camera);
          setPopBox("");
        });
    }
  }, [popBox]);

  function handleClosePopBox() {
    setCamData();
  }

  if (camData !== undefined) {
    return <PopBoxContent camData={camData} closeHandler={handleClosePopBox} />;
  }
}
