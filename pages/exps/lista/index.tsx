import { Flex, Text } from "@chakra-ui/react";

const usuarios = [
  {
    name: "James",
    age: "32",
  },
  {
    name: "Amber",
    age: "30",
  },
  {
    name: "Abigail",
    age: "34",
  },
  {
    name: "Mark",
    age: "38",
  },
];

function Lista() {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      gap="32px"
      p="25px"
      bg="red.100"
    >
      {usuarios.map((item, index) => {
        return (
          <Flex
            key={index}
            w="280px"
            borderRadius="20px"
            border="1px"
            p="10px"
            direction="column"
          >
            {/* NAME */}
            <Text>{`NAME: ${item.name}`}</Text>

            {/* AGE */}
            <Text>{`AGE: ${item.age}`}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default Lista;
