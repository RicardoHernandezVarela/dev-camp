import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";

function PageWrapper(props: any) {
  return (
    <Box w="100%" h="100%">
      <Head>
        <title>{props.title || "dev-camp"}</title>
        <meta name="description" content={props.description || props.title} />
        {/* <link rel="icon" href="/loomium-infinity.ico" /> */}
      </Head>
      <Header />

      {props.children}

      <Footer />
    </Box>
  );
}

export default PageWrapper;
