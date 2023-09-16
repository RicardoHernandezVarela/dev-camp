import Head from "next/head";
import { Box } from "@chakra-ui/react";

function PageWrapper(props: any) {
  return (
    <Box w="100%" h="100%">
      <Head>
        <title>{props.title || "dev-camp"}</title>
        <meta name="description" content={props.description || props.title} />
        {/* <link rel="icon" href="/loomium-infinity.ico" /> */}
      </Head>

      {props.children}
    </Box>
  );
}

export default PageWrapper;
