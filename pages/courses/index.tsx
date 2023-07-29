import { Flex } from "@chakra-ui/react";
import TitleSection from "@/src/components/Layout/TitleSection";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import Menu from "@/src/components/Menu";

function Courses() {
  return (
    <Flex flexDirection="column">
      <Header/>
      <TitleSection title={"Nuestros Cursos"} subtitle={"cursos"} />
      <Menu/>
      <Footer/>
    </Flex>
  );
}

export default Courses;
