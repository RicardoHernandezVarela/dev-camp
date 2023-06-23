import { Flex } from "@chakra-ui/react";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";


function Portfolio() {
    return(
        <Flex flexDirection="column">
             <Header/>
             <Footer/>
        </Flex>
    );
}

export default Portfolio;