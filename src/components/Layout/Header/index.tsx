import { Flex, Text, Link, Center } from "@chakra-ui/react";
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
      px={{base:"20px",xl:"50px"}}
      justifyContent={{base:"center",md:"space-between"}}
      alignItems={{base:"center"}}
    >
      <Flex w="188px" h="50px">
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
        display={{base:"none",md:"flex"}}
      >
        <Link
          href="/"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Portfolio
        </Link>
        <Link
          href="/courses"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Cursos
        </Link>
        <Link
          href="contact"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Contacto
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
