
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import ImgGrupo from "../../assets/img_grupo.png";

function HomeHero() {
  return (
    <Flex bg="#74c69d" px="20px" pt="40px" gap="125px">

      <Flex direction="column" w="416px" mb="123px">
        <Text color=" #FFF" fontSize="16px" fontWeight="700" mb="15px">
          WELCOME
        </Text>
        <Heading color=" #FFF" fontSize="40px" fontWeight="700" mb="15px">
          Lorem ipsum dolor sit amet consectetur
        </Heading>

        <Text fontSize="15px" fontWeight="700" color="#fff">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
          voluptate culpa nesciunt delectus iste?
        </Text>

        <Button
          w="170px"
          h="48px"
          borderRadius="5px"
          fontSize="20px"
          fontWeight="400"
          mt="25px"
        >
          Explore
        </Button>
      </Flex>

      <Flex w="644px" h="378px" mb="83px">
      <Image src={ImgGrupo} alt=""/>

      </Flex>

    </Flex>
  );
}

export default HomeHero;
