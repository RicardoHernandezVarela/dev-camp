import { Flex, Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import Image from "next/image";

import LoadingDots from "../LoadingDots";
import LinkWrapper from "../LinkWrapper";
import ImageFromSanity from "../ImageFromSanity";

import useHeader from "./useHeader";

import STATUS from "@/src/constants/status/status";

function Header() {
  const { status, sanityData } = useHeader();

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
        <ImageFromSanity
          src={sanityData?.logo}
          width={188}
          height={50}
          status={status}
        />
      </Flex>

      {/* EXPANDED MENU */}
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
        {status === STATUS.IS_LOADING && <LoadingDots />}

        {status === STATUS.HAS_SUCCEDED && (
          <>
            <LinkWrapper
              href="/"
              textDecoration="none"
              hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Inicio
            </LinkWrapper>
            <LinkWrapper
              href="/portfolio"
              textDecoration="none"
              hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Proyectos
            </LinkWrapper>
            <LinkWrapper
              href="/courses"
              textDecoration="none"
              hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Cursos
            </LinkWrapper>
            <LinkWrapper
              href="contact"
              textDecoration="none"
              hover={{ color: "main", bg: "#fff" }}
              p="8px"
            >
              Contacto
            </LinkWrapper>
          </>
        )}
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

          {status === STATUS.HAS_SUCCEDED && (
            <MenuList display="flex" flexDirection="column">
              <LinkWrapper
                href="/"
                textDecoration="none"
                hover={{ color: "main", bg: "#fff" }}
                p="8px"
              >
                Inicio
              </LinkWrapper>
              <LinkWrapper
                href="/portfolio"
                textDecoration="none"
                hover={{ color: "main", bg: "#fff" }}
                p="8px"
              >
                Proyectos
              </LinkWrapper>
              <LinkWrapper
                href="/courses"
                textDecoration="none"
                hover={{ color: "main", bg: "#fff" }}
                p="8px"
              >
                Cursos
              </LinkWrapper>
              <LinkWrapper
                href="contact"
                textDecoration="none"
                hover={{ color: "main", bg: "#fff" }}
                p="8px"
              >
                Contacto
              </LinkWrapper>
            </MenuList>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Header;
