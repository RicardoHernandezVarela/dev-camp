import { Flex } from "@chakra-ui/react";
import MenuOur from "../MenuOur";

function Menu() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={{ base: "25px", xl: "80px" }}
      my="70"
      direction={{ base: "column", lg: "row" }}
      px="15px"
    >
      <MenuOur precio="100" />
      <MenuOur precio="250" />
      <MenuOur precio="400" />
    </Flex>
  );
}

export default Menu;
