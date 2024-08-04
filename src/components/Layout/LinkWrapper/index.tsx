import Link from "next/link";
import NextLink from "next/link";
import { Link as ChakraLink, Flex } from "@chakra-ui/react";

type linkWrapper = {
  href: string;
  textDecoration?: string;
  textDecorationColor?: string;
  hover?: any;
  target?: string;
  p?: string;
  children: any;
};

function LinkWrapper(props: linkWrapper) {
  const {
    href,
    textDecoration,
    textDecorationColor,
    hover,
    target,
    p,
    children,
  } = props;

  const isExternalLink = href.startsWith("http");

  if (isExternalLink) {
    return (
      <ChakraLink
        w="max-content"
        as={NextLink}
        href={href}
        textDecoration={textDecoration || "none"}
        textDecorationColor={textDecorationColor || "companyPic"}
        _hover={hover}
        target={target}
        p={p}
      >
        {children}
      </ChakraLink>
    );
  } else {
    return (
      <Link
        href={href}
        style={{
          width: "max-content",
          height: "100%",
          textDecoration: `${textDecoration || "none"}`,
          textDecorationColor: `${textDecorationColor || "#0193FE"}`,
        }}
      >
        <Flex p={p} _hover={hover}>
          {children}
        </Flex>
      </Link>
    );
  }
}

export default LinkWrapper;
