import { Flex } from "@chakra-ui/react";
import PageWrapper from "@/src/components/Layout/PageWrapper";
import SearchCard from "@/src/components/SearchCard";
import AlumniCard from "@/src/components/AlumniCard";

function Exalumnos() {
  return (
    <PageWrapper title={"Egresados"}>
      <Flex direction="column">
        <SearchCard />

        <Flex direction="column" pb="50px">
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
        </Flex>
      </Flex>
    </PageWrapper>
  );
}

export default Exalumnos;
