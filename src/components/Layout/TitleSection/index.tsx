import { Flex, Heading, Text } from "@chakra-ui/react";

function TitleSection(props: any) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my="45px"
    >
      <Text
        fontSize="16px"
        fontWeight="700"
        lineHeight="125%"
        textTransform="uppercase"
        color="main"
      >
        {props?.data?.subtitle || props.subtitle}
      </Text>
      <Heading
        fontSize="40px"
        fontWeight="700"
        lineHeight="125%"
        color="black"
        mb="16px"
        textTransform="capitalize"
      >
        {props?.data?.title || props.title}
      </Heading>
      <Text fontSize="20px" lineHeight="125%" textAlign={{ base: "center" }}>
        {props?.data?.content || props.content}
      </Text>
    </Flex>
  );
}

export default TitleSection;
