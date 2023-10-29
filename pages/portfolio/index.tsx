import { Flex } from "@chakra-ui/react";
import TitleSection from "@/src/components/Layout/TitleSection";
import Imagenes from "@/src/components/Imagenes";

function Portfolio() {
  return (
    <Flex flexDirection="column">
      <TitleSection title={"Portafolio"} subtitle={"Proyectos"} />
      <Imagenes />
    </Flex>
  );
}

export default Portfolio;
