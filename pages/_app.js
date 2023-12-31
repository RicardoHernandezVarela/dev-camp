import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  main: "#74c69d",
  darkButtonBg: "#000",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const breakpoints = {
  base: "0",
  ssm: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl:"1500px",
  "2xl": "2560px",
};

export const theme = extendTheme({ colors, breakpoints });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
