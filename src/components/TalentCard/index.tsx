import { Flex, Image, Text } from "@chakra-ui/react";

function TalentCard(props:any) {
  return (
    <Flex
      w="200px"
      h="299px"
      justifyContent="center"
      px="15px"
      py="20px"
      borderRadius="5px"
      boxShadow="3px 4px 12px 1px rgba(0, 0, 0, 0.25)"
    >
      <Flex direction="column" gap="18px">
        <Image
          w="150px"
          h="150px"
          borderRadius="full"
          border="1px"
          src={props.imagen}
        />
        <Text>{props.nombre}</Text>
        <Text>{props.pocision}</Text>
      </Flex>
    </Flex>
  );
}

export default TalentCard;
