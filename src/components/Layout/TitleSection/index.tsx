import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import CommonButton from "../CommonButton";
import StackList from "../../StackList";

function TitleSection(props: any) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my="30px"
    >
      <Text
        fontSize="16px"
        fontWeight="700"
        lineHeight="125%"
        textTransform="uppercase"
        color="#74c69d"
      >
        {props.subtitle}
      </Text>
      <Heading
        fontSize="40px"
        fontWeight="700"
        lineHeight="125%"
        color="black"
        mb="16px"
        textTransform="capitalize"
      >
        {props.title}
      </Heading>
      <Text fontSize="20px" lineHeight="125%" textAlign={{ base: "center" }}>
        Lorem ipsum, dolor sit amet consectetur adipisising elit.
      </Text>

      
    </Flex>
  );
}

export default TitleSection;
