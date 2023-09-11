import { Flex } from "@chakra-ui/react";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import TitleSection from "@/src/components/Layout/TitleSection";
import HomeHero from "@/src/components/HomeHero";

import StackList from "@/src/components/StackList";
import OurTalents from "@/src/components/OurTalents";
import PageWrapper from "@/src/components/Layout/PageWrapper";

function Home() {
  return (
    <PageWrapper title={"Dev-camp"}>
      <Flex flexDirection="column">
        <HomeHero
          direction={"row"}
          textColor={"#fff"}
          bgColor={"main"}
          buttonText={"Explore"}
          buttonColor={"#000"}
          buttonBg={"#fff"}
        />

        <TitleSection title={"dev-camp"} subtitle={"bienvenidos"} />

        <StackList />

        <HomeHero
          direction={"row-reverse"}
          textColor={"#212529"}
          bgColor={"#fff"}
          buttonText={"Learn More"}
          buttonColor={"#fff"}
          buttonBg={"#000"}
        />

        <HomeHero
          direction={"row"}
          textColor={"#212529"}
          bgColor={"#fff"}
          buttonText={"Learn More"}
          buttonColor={"#fff"}
          buttonBg={"#000"}
        />

        <TitleSection title={"Our Talents"} subtitle={"TEAM"} />

        <OurTalents />
      </Flex>
    </PageWrapper>
  );
}

export default Home;
