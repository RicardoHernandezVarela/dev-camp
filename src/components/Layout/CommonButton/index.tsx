import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

function CommonButton(props: any) {
  const router = useRouter();

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
      onClick={() => {
        router.push(props.route || "/", undefined, {
          shallow: true,
        });
      }}
    >
      {props.text}
    </Button>
  );
}

export default CommonButton;
