import { Flex, Text } from "@chakra-ui/react";
import TitleSection from "@/src/components/Layout/TitleSection";
import HomeHero from "@/src/components/HomeHero";

import StackList from "@/src/components/StackList";
import OurTalents from "@/src/components/OurTalents";
import PageWrapper from "@/src/components/Layout/PageWrapper";

import LoadingDots from "@/src/components/Layout/LoadingDots";

import useHome from "@/src/hooks/useHome";

import STATUS from "@/src/constants/status/status";

function Home() {
  const { status, sanityData } = useHome();

  if (status === STATUS.IS_LOADING) {
    return <LoadingDots />;
  }

  if (status === STATUS.HAS_ERROR) {
    return <Text>{STATUS.HAS_ERROR}</Text>; // CREAR COMPONENTE PARA MOSTRAR UN ERROR DE DESCARGA DE DATOS
  }

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
          status={status}
          data={sanityData?.sections[0]}
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
