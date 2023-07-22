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
      direction={props.direction}
    >
      <Flex direction="column" w="416px" mb="123px">
        <Text color=" #FFF" fontSize="16px" fontWeight="700" mb="15px">
          WELCOME
        </Text>
        <Heading
          color={props.textColor}
          fontSize="40px"
          fontWeight="700"
          mb="15px"
        >
          Lorem ipsum dolor sit amet consectetur
        </Heading>

        <Text fontSize="15px" fontWeight="700" color={props.textColor}>
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

      <Flex w="644px" h="378px" mb="83px">
        <Image src={ImgGrupo} alt="" />
      </Flex>
    </Flex>
  );
}

export default HomeHero;
