import { Flex, Image, Text } from "@chakra-ui/react";
import TalentCard from "../TalentCard";
import CommonButton from "../Layout/CommonButton";

function OurTalents() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mb="54px">
      <Flex justifyContent="center" alignItems="center" gap="47px">
        <TalentCard />

        <TalentCard />

        <TalentCard />

        <TalentCard />
      </Flex>

      <CommonButton text={"Learn More"} color={"#fff"} bg={"#000"} />
    </Flex>
  );
}

export default OurTalents;
