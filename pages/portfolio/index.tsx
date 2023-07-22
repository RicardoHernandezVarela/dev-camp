import { Flex } from "@chakra-ui/react";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import TitleSection from "@/src/components/Layout/TitleSection";

function Portfolio() {
    return(
        <Flex flexDirection="column">
             <Header/>
             <TitleSection title={"Portafolio"} subtitle={"Proyectos"} />
             <Footer/>
             
        </Flex>
    );
}

export default Portfolio;