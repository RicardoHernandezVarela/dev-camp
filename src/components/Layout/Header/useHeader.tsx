import { useEffect, useState } from "react";

import STATUS from "@/src/constants/status/status";

import useCommonComponentsStore from "@/src/store/commonComponentsStore";

function useHeader() {
  const headerData = useCommonComponentsStore((state: any) => state.headerData);

  const setHeaderData = useCommonComponentsStore(
    (state: any) => state.setHeaderData
  );

  /* STATE */
  const [status, setStatus] = useState(STATUS.IS_LOADING);

  const [sanityData, setSanityData] = useState<any>({});

  /* GET HEADER DATA */
  const getHeaderData = async () => {
    if (status === STATUS.HAS_SUCCEDED) return null;

    if (headerData) {
      setSanityData(headerData);

      setStatus(STATUS.HAS_SUCCEDED);

      return null;
    }

    try {
      const headerResponse = await fetch("/api/sanity/get-header");
      const headerJson = await headerResponse.json();

      if (!headerJson?.header) {
        throw new Error(await headerResponse.text());
      }

      const { header } = headerJson;

      const headerComponentData = header[0];
      //console.log("headerComponentData: ", headerComponentData);

      setSanityData(headerComponentData);
      setHeaderData(headerComponentData);

      setStatus(STATUS.HAS_SUCCEDED);
    } catch (error) {
      setStatus(STATUS.HAS_ERROR);
    }
  };

  /* LIFE CYCLE */
  useEffect(() => {
    getHeaderData();
  }, []);

  return { status, sanityData };
}

export default useHeader;
