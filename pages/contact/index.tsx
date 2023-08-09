import { Flex, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import TitleSection from "@/src/components/Layout/TitleSection";

function Contact() {
  return (
    <Flex flexDirection="column">
      <Header />
      <TitleSection title={"contacto"} subtitle={"¿quieres saber mas..?"} />

      <Flex
        px={{ base: "10px", md: "50px" }}
        gap="50px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <FormControl
          w={{ base: "290px", md: "575px" }}
          display="flex"
          flexDirection="column"
          gap="21px"
          mb="25px"
        >
          <FormLabel fontSize="20px" lineHeight="125%">
            Nombre
          </FormLabel>
          <Input bg="#eee" border="1px" type="text" />

          <FormLabel fontSize="20px" lineHeight="125%">
            Email
          </FormLabel>
          <Input bg="#eee" border="1px" type="email" />

          <FormLabel fontSize="20px" lineHeight="125%">
            Mensaje
          </FormLabel>
          <Input bg="#eee" border="1px" type="text" />

          <Button bg="black" color="white" w="100%">
            Enviar
          </Button>
        </FormControl>

        <Flex border="1px" w={{ base: "300px", md: "350px" }} h="385px"></Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Contact;
