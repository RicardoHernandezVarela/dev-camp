import { Flex, Heading, Image } from "@chakra-ui/react";

function ImgPorfolio(props:any) {
  return (
    <Flex>
      <Flex w="570px" h="334px" boxShadow="3px 4px 12px 1px rgba(0, 0, 0, 0.25)">
        <Image
         src={props.foto}
        />
      </Flex>
    </Flex>
  );
}

export default ImgPorfolio;
