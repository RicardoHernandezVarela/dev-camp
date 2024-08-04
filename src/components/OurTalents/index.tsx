import { Flex, Image, Text } from "@chakra-ui/react";
import TalentCard from "../TalentCard";
import CommonButton from "../Layout/CommonButton";

const talenList = [
  {
    imagen: "https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-133242.jpg",
    name: "ricardo",
    pocision: "teacher 1"
  },
  {
    imagen: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067",
    name: "ricardo 1",
    pocision: "teacher 2"
  },
  {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLZcfk8pZ92hwkh8hPi_nVRm4qELyVyQ14w&usqp=CAU",
    name: "ricardo 2",
    pocision: "teacher 3"
  },
 
]

function OurTalents() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mb="54px"
      w="100%"
    >
      <Flex
        w={{ base: "100%", md: "80%", lg: "100%" }}
        justifyContent="center"
        alignItems="center"
        gap={{ base: "47px", md: "30px", lg: "20px" }}
        direction={{ base: "column", md: "row" }}
        flexWrap={{ base: "nowrap", md: "wrap", lg: "nowrap" }}
      >
       

        {talenList.map((item, index) => {
          return(
            <TalentCard key={index} nombre={item.name} pocision={item.pocision} imagen={item.imagen}/>
          )
        })}

      </Flex>

      <CommonButton text={"Learn More"} color={"#fff"} bg={"darkButtonBg"} />
    </Flex>
  );
}

export default OurTalents;
