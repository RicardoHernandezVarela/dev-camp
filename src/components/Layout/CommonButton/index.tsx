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
    >
      {props.text}
    </Button>
  );
}

export default CommonButton;
