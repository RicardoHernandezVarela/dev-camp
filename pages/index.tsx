import { Flex } from "@chakra-ui/react";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import TitleSection from "@/src/components/Layout/TitleSection";
import HomeHero from "@/src/components/HomeHero";

function Home() {
  return(
     <Flex flexDirection="column">
      <Header/>
      <HomeHero/>
      <TitleSection title={"dev-camp"} subtitle={"bienvenidos"}/>
      <Footer/>

      

     </Flex>
  );
}

export default Home;