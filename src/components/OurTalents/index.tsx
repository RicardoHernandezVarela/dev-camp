import { Flex, Image, Text } from "@chakra-ui/react";
import TalentCard from "../TalentCard";
import CommonButton from "../Layout/CommonButton";

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
        <TalentCard />

        <TalentCard />

        <TalentCard />

        <TalentCard />
      </Flex>

      <CommonButton text={"Learn More"} color={"#fff"} bg={"darkButtonBg"} />
    </Flex>
  );
}

export default OurTalents;
