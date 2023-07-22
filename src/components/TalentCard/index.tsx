import { Flex, Image, Text } from "@chakra-ui/react";

function TalentCard() {
  return (
    <Flex
      w="255px"
      h="299px"
      justifyContent="center"
      px="25px"
      py="20px"
      borderRadius="5px"
      boxShadow="3px 4px 12px 1px rgba(0, 0, 0, 0.25)"
    >
      <Flex direction="column" gap="18px">
        <Image
          w="175px"
          h="175px"
          borderRadius="full"
          border="1px"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg"
        />
        <Text>Richard Guerra</Text>
        <Text>CTO</Text>
      </Flex>
    </Flex>
  );
}

export default TalentCard;
