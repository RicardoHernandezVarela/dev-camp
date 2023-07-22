import { Flex } from "@chakra-ui/react";
import TitleSection from "@/src/components/Layout/TitleSection";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";

function Courses() {
  return (
    <Flex flexDirection="column">
      <Header/>
      <TitleSection title={"Nuestros Cursos"} subtitle={"cursos"} />
      <Footer/>
    </Flex>
  );
}

export default Courses;
