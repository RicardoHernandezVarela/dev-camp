import { Flex } from "@chakra-ui/react";
import PageWrapper from "@/src/components/Layout/PageWrapper";
import SearchCard from "@/src/components/SearchCard";
import AlumniCard from "@/src/components/AlumniCard";

function Alumni() {
    return(
       <PageWrapper title={"Egresados"}>
        <Flex direction="column">
            <SearchCard/>

            <Flex direction={{base:"column", xl:"row"}} pb="50px"  flexWrap="wrap" px={{base:"0", xl:"0px", xxl:"60px"}} >
                <AlumniCard/>
                <AlumniCard/>
                <AlumniCard/>
                <AlumniCard/>
            </Flex>
        </Flex>

       </PageWrapper> 
    )
}

export default Alumni;