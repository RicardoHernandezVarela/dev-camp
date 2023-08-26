import { Flex } from "@chakra-ui/react";
import ImgPorfolio from "../Layout/ImgPorfolio";
import CommonButton from "../Layout/CommonButton";

function Imagenes(props: any) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      my="30px"
    >
      <Flex
        gap="55px"
        w="100%"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        // m="30px"
        justifyContent="center"
        alignItems="center"
      >
        <ImgPorfolio
          foto={
            "https://us.123rf.com/450wm/rastudio/rastudio1908/rastudio190800087/128545951-desarrollo-de-software-programaci%C3%B3n-aprendizaje-de-codificaci%C3%B3n-cursos-de-tecnolog%C3%ADa-de-la.jpg"
          }
        />
        <ImgPorfolio
          foto={
            "https://educatesiempre.com/wp-content/uploads/2021/03/tiny-programmers-upgrading-operation-system-computer-isolated-flat-illustration_74855-11138.jpg.webp"
          }
        />

        <ImgPorfolio
          foto={
            "https://us.123rf.com/450wm/rastudio/rastudio1908/rastudio190800087/128545951-desarrollo-de-software-programaci%C3%B3n-aprendizaje-de-codificaci%C3%B3n-cursos-de-tecnolog%C3%ADa-de-la.jpg"
          }
        />
        <ImgPorfolio
          foto={
            "https://educatesiempre.com/wp-content/uploads/2021/03/tiny-programmers-upgrading-operation-system-computer-isolated-flat-illustration_74855-11138.jpg.webp"
          }
        />

        <ImgPorfolio
          foto={
            "https://us.123rf.com/450wm/rastudio/rastudio1908/rastudio190800087/128545951-desarrollo-de-software-programaci%C3%B3n-aprendizaje-de-codificaci%C3%B3n-cursos-de-tecnolog%C3%ADa-de-la.jpg"
          }
        />
        <ImgPorfolio
          foto={
            "https://educatesiempre.com/wp-content/uploads/2021/03/tiny-programmers-upgrading-operation-system-computer-isolated-flat-illustration_74855-11138.jpg.webp"
          }
        />

        <ImgPorfolio
          foto={
            "https://us.123rf.com/450wm/rastudio/rastudio1908/rastudio190800087/128545951-desarrollo-de-software-programaci%C3%B3n-aprendizaje-de-codificaci%C3%B3n-cursos-de-tecnolog%C3%ADa-de-la.jpg"
          }
        />
        <ImgPorfolio
          foto={
            "https://educatesiempre.com/wp-content/uploads/2021/03/tiny-programmers-upgrading-operation-system-computer-isolated-flat-illustration_74855-11138.jpg.webp"
          }
        />
      </Flex>

      <CommonButton text="Learn More" color="white" bg="black" />
    </Flex>
  );
}

export default Imagenes;
