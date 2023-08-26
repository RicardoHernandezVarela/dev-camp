import { Button } from "@chakra-ui/react";

function CommonButton(props: any) {
  return (
    <Button
      bg={props.bg}
      borderRadius="5px"
      mt="55px"
      w="170px"
      h="48px"
      color={props.color}
      fontSize="20px"
      fontWeight="400"
      border="1px"
      borderColor="transparent"
      _hover={{ color: props.bg, bg: props.color, borderColor: props.bg }}
    >
      {props.text}
    </Button>
  );
}

export default CommonButton;
