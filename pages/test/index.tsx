import { Flex } from "@chakra-ui/react";
import AlumniCard from "@/src/components/AlumniCard";
import SearchCard from "@/src/components/SearchCard";
import GoBackButton from "@/src/components/GoBackButton";

function Test() {
    return(
        <Flex direction="column" >
            <AlumniCard/>
            <SearchCard/>
            <GoBackButton/>
        </Flex>
    )
}

export default Test;