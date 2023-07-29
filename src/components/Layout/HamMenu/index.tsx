import {
  Flex,
  Heading,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

function HamMenu() {
  return (
    <Flex w="100%" bg="blue.100" justifyContent="space-between" p="10px">
      <Heading>Logo</Heading>

      <Flex display={{ base: "none", md: "flex" }}>
        <Link
          href="/"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Home
        </Link>

        <Link
          href="/cursos"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Cursos
        </Link>

        <Link
          href="/portafolio"
          textDecoration="none"
          _hover={{ color: "#74c69d", bg: "#fff" }}
          p="8px"
        >
          Portafolio
        </Link>
      </Flex>

      {/* MENU */}
      <Flex display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton as={Button}>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="black"
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
              _hover={{ color: "#74c69d", bg: "#fff" }}
              p="8px"
            >
              Home
            </Link>

            <Link
              href="/cursos"
              textDecoration="none"
              _hover={{ color: "#74c69d", bg: "#fff" }}
              p="8px"
            >
              Cursos
            </Link>

            <Link
              href="/portafolio"
              textDecoration="none"
              _hover={{ color: "#74c69d", bg: "#fff" }}
              p="8px"
            >
              Portafolio
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default HamMenu;
