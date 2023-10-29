import { useEffect, useState } from "react";

import STATUS from "@/src/constants/status/status";

import usePagesDataStore from "@/src/store/pagesDataStore";

function useHome() {
  const homeData = usePagesDataStore((state: any) => state.homeData);

  const setHomeData = usePagesDataStore((state: any) => state.setHomeData);

  /* STATE */
  const [status, setStatus] = useState(STATUS.IS_LOADING);

  const [sanityData, setSanityData] = useState<any>({});

  /* GET HOME DATA */
  const getHomeData = async () => {
    if (homeData) {
      setSanityData(homeData);

      setStatus(STATUS.HAS_SUCCEDED);

      return null;
    }

    try {
      const homeResponse = await fetch("/api/sanity/get-home");
      const homeJson = await homeResponse.json();

      if (!homeJson?.home) {
        throw new Error(await homeResponse.text());
      }

      const { home } = homeJson;

      const homeComponentData = home[0];
      console.log("homeComponentData: ", homeComponentData);

      setSanityData(homeComponentData);

      setHomeData(homeComponentData);

      setStatus(STATUS.HAS_SUCCEDED);
    } catch (error) {
      setStatus(STATUS.HAS_ERROR);
    }
  };

  /* LIFE CYCLE */
  useEffect(() => {
    getHomeData();
  }, []);

  return { status, sanityData };
}

export default useHome;
