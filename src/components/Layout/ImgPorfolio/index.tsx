import { Flex, Heading, Image } from "@chakra-ui/react";

function ImgPorfolio(props: any) {
  return (
    <Flex
      w={{ base: "90%", md: "570px" }}
      h="334px"
      justifyContent="center"
      boxShadow="0px 4px 40px 0px rgba(0,0,0,0.25)"
      padding="20px"
    >
      <Image src={props.foto} />
    </Flex>
  );
}

export default ImgPorfolio;
