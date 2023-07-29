import { Flex } from "@chakra-ui/react";
import MenuOur from "../MenuOur";

function Menu() {
    return(
     <Flex justifyContent="center" alignItems="center" gap="100px" my="70" >

        <MenuOur precio= "100"/>
        <MenuOur precio= "250"/>
        <MenuOur precio= "400"/>

     </Flex>
    )
}

export default Menu;