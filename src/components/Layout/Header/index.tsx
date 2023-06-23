import { Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../assets/logo.png";

const styles = {
  header: {
    w: "100%",
    h: "90px",
    bg: "blue.200",
  },
};

function Header() {
  return (
    <Flex
      w="100%"
      py="38px"
      bg="#74c69d"
      px="130px"
      justifyContent="space-between"
    >
      <Flex w="188px" h="50px" >
        <Image src={logo} alt="" width={188} height={50} />
      </Flex>
      <Flex
        gap="35px"
        justifyContent="center"
        alignItems="center"
        color="#fff"
        textAlign="right"
        fontSize="20px"
        lineHeight="125%"
      >
        <Link href="#" textDecoration="none" _hover={{color: "#74c69d",bg: "#fff"}} p="8px">Home</Link>
        <Link href="#" textDecoration="none" _hover={{color: "#74c69d",bg: "#fff"}} p="8px">Portfolio</Link>
        <Link href="#" textDecoration="none" _hover={{color: "#74c69d",bg: "#fff"}} p="8px">Services</Link>
        <Link href="#" textDecoration="none" _hover={{color: "#74c69d",bg: "#fff"}} p="8px">Contact</Link>
      </Flex>
    </Flex>
  );
}

export default Header;
