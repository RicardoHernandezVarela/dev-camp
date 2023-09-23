import { Flex } from "@chakra-ui/react";
import TitleSection from "@/src/components/Layout/TitleSection";
import Menu from "@/src/components/Menu";

function Courses() {
  return (
    <Flex flexDirection="column">
      <TitleSection title={"Nuestros Cursos"} subtitle={"cursos"} />
      <Menu />
    </Flex>
  );
}

export default Courses;
