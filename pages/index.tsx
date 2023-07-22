import { Flex, Text, Box, Heading, Button, Image } from "@chakra-ui/react";

import Header from "../src/components/Layout/Header";

const styles = {};

function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Text>Home - page</Text>

      <Button w="100px">es un button</Button>

      <Flex border="1px" gap="20px" justifyContent="center" margin="20px">
        <Flex w="200px" h="300px" border="1px" direction="column">
          <Flex w="100%" h="200px" bg="blue.100">
            <Text>1</Text>
          </Flex>

          <Flex w="100%" h="100px" alignItems="center" pl="10px">
            <Heading>Card 1</Heading>
          </Flex>
        </Flex>

        <Flex w="200px" h="300px" border="1px" direction="column">
          <Flex w="100%" h="200px" bg="red.100">
            <Text>2</Text>
          </Flex>

          <Flex w="100%" h="100px" alignItems="center" pl="10px">
            <Heading>Card 2</Heading>
          </Flex>
        </Flex>

        <Flex w="200px" h="300px" border="1px" direction="column">
          <Flex w="100%" h="200px" bg="green.100">
            <Text>3</Text>
          </Flex>

          <Flex w="100%" h="100px" alignItems="center" pl="10px">
            <Heading>Card 3</Heading>
          </Flex>
        </Flex>
      </Flex>


    <Flex w="100px" h="100px" border="1px" bg={{base: "blue.100"}}></Flex>
    </Flex>
  );
}

export default Home;
