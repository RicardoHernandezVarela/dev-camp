import { Flex, Text } from "@chakra-ui/react";
import CommonButton from "../Layout/CommonButton";
import Svg from "../Svg";

function MenuOur(props: any) {
  return (
    <Flex
      w={{base: "95%", md: "340px"}}
      borderRadius="5px"
      justifyContent="center"
      alignItems="center"
      boxShadow="3px 4px 12px 1px rgba(0, 0, 0, 0.25)"
    >
      <Flex m="20px" w="270px" direction="column" alignItems="center">
        <Text fontSize="15px" fontWeight="400">
          Basic
        </Text>
        <Text fontSize="40px" fontWeight="700">
          {props.precio}
        </Text>
        <Text align="center" fontSize="15px" fontWeight="400" mb="20px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam
        </Text>

        <Flex gap="10px" direction="column" w="270px" alignItems="center">
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <Svg />
          <Svg />
        </Flex>

        <CommonButton text="Learn More" color="white" bg="black" />
      </Flex>
    </Flex>
  );
}

export default MenuOur;
