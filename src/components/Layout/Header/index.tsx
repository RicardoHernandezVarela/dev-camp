import {
  Flex,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
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
      bg="main"
      px={{ base: "20px", xl: "50px" }}
      justifyContent={{ base: "space-between", md: "space-between" }}
      alignItems={{ base: "center" }}
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
        display={{ base: "none", md: "flex" }}
      >
        <Link
          href="/"
          textDecoration="none"
          _hover={{ color: "main", bg: "#fff" }}
          p="8px"
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          textDecoration="none"
          _hover={{ color: "main", bg: "#fff" }}
          p="8px"
        >
          Portfolio
        </Link>
        <Link
          href="/courses"
          textDecoration="none"
          _hover={{ color: "main", bg: "#fff" }}
          p="8px"
        >
          Cursos
        </Link>
        <Link
          href="contact"
          textDecoration="none"
          _hover={{ color: "main", bg: "#fff" }}
          p="8px"
        >
          Contacto
        </Link>
      </Flex>

      {/* HAMBURGER MENU */}
      <Flex display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={Button}
            variant="unstyled"
            w="35px"
            h="35px"
            color="white"
          >
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="currentColor"
                d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
              ></path>
            </svg>
          </MenuButton>
          <MenuList display="flex" flexDirection="column">
            <Link
              href="/"
              textDecoration="none"
              _hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              textDecoration="none"
              _hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Portfolio
            </Link>
            <Link
              href="/courses"
              textDecoration="none"
              _hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Cursos
            </Link>
            <Link
              href="contact"
              textDecoration="none"
              _hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Contacto
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Header;
