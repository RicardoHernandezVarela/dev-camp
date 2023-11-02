import { Flex } from "@chakra-ui/react";
import ImgPorfolio from "../Layout/ImgPorfolio";
import CommonButton from "../Layout/CommonButton";

const imgList = [
  {
    imagen:
      "https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496213.jpg",
  },
  {
    imagen: "https://www.fundaciontelefonica.com/wp-content/uploads/2016/07/programacion-730x400.jpg",
  },
  {
    imagen: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
  },
  {
    imagen:
      "https://guru-soft.com/wp-content/uploads/2022/01/%C2%BFQue-es-el-HTML.jpg",
  },
  {
    imagen: "https://www.arsys.es/blog/file/uploads/2018/01/css.jpg",
  },
  {
    imagen: "https://geoinnova.org/wp-content/uploads/2021/08/logos.png",
  },
];

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
        {imgList.map((item, index) => {
          return <ImgPorfolio key={index} foto={item.imagen} />;
        })}
      </Flex>

      <CommonButton
        text="Learn More"
        color="white"
        bg="black"
        route={"/class-notes-examples"}
      />
    </Flex>
  );
}

export default Imagenes;
