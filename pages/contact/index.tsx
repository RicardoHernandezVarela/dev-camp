import { Flex,FormControl, Input,FormLabel, Button } from "@chakra-ui/react";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";
import TitleSection from "@/src/components/Layout/TitleSection";

function Contact() {
  return (
    <Flex flexDirection="column">
      <Header />
      <TitleSection title={"contacto"} subtitle={"¿quieres saber mas..?"} />

      <Flex px="130px" gap="30px">
      <FormControl w="575px"  display="flex"  flexDirection="column" gap="21px">
        <FormLabel fontSize="20px" lineHeight="125%">Nombre</FormLabel>
        <Input bg="#eee" border="1px" type="text" />

        <FormLabel fontSize="20px" lineHeight="125%">Email</FormLabel>
        <Input bg="#eee" border="1px" type="email" />

        <FormLabel fontSize="20px" lineHeight="125%">Mensaje</FormLabel>
        <Input bg="#eee" border="1px" type="text" />

        <Button bg="black" color="white" w="100%">Enviar</Button>
      </FormControl>

      <Flex border="1px" w="400px" h="385px"></Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Contact;
