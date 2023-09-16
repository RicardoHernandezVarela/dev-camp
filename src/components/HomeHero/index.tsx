import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import ImgGrupo from "../../assets/img_grupo.png";
import CommonButton from "../Layout/CommonButton";

function HomeHero(props: any) {
  return (
    <Flex
      bg={props.bgColor}
      px="20px"
      pt="40px"
      justifyContent="space-between"
      direction={{ base: "column-reverse", md: props.direction }}
    >
      <Flex direction="column" w={{ base: "100%", md: "416px" }} my="60px">
        <Text color=" #FFF" fontSize="16px" fontWeight="700" mb="15px">
          WELCOME
        </Text>

        <Heading
          w="100%"
          color={props.textColor}
          fontSize="40px"
          fontWeight="700"
          mb="15px"
        >
          Lorem ipsum dolor sit amet consectetur
        </Heading>

        <Text w="100%" fontSize="15px" fontWeight="700" color={props.textColor}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
          voluptate culpa nesciunt delectus iste?
        </Text>

        <CommonButton
          text={props.buttonText}
          color={props.buttonColor}
          bg={props.buttonBg}
        />
      </Flex>

      <Flex
        w={{ base: "100%", md: "644px" }}
        h={{ base: "250px", md: "378px" }}
        mb={{ base: "20px", md: "83px" }}
      >
        <Image src={ImgGrupo} alt="" />
      </Flex>
    </Flex>
  );
}

export default HomeHero;
