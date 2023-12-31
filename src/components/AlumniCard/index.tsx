import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

function AlumniCard() {
  return (
    <Flex margin="auto">
      <Flex
        width={{base:"300px", md:"700px"}}
        padding="24px"
        boxShadow="0px 4px 40px 0px rgba(0,0,0,0.25)"
        borderRadius="16px"
        marginTop="50px"
        gap="40px"
        flexDirection={{base:"column", md:"row"}}
      >
        <Image
          width="300px"
          height={{base:"250px", md:"300px"}}
          borderRadius="16px"
          src="https://images.ecestaticos.com/N_vWPjAR7b-erAJJOcXtt1x5CaU=/0x183:2539x1614/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F782%2Fa64%2F421%2F782a64421b6a68a54f77c217e8837890.jpg"
        />

        <Flex direction="column" gap="34px">
          <Flex direction="column">
            <Heading>Ajay Kumar</Heading>
            <Text>UI/UX Designer</Text>
          </Flex>

          <Flex
            w={{base:"250px", md:"300px"}}
            h={{base:"50px", md:"70px"}}
            backgroundColor="#F7F9FF"
            borderRadius="8px"
            
          ></Flex>

          <Flex mt="20px" justifyContent="space-between" gap="20px">
            <Button
              fontSize="20px"
              fontWeight="500"
              color="white"
              backgroundColor="#1DC6BB"
              w={{base:"140px"}}
              h="52px"
            >
              Follow
            </Button>
            <Button
              w={{base:"140px"}}
              h="52px"
              color="#1DC6BB"
              border="solid 1px #1DC6BB"
              fontSize="20px"
              fontWeight="500
        "
            >
              Connect
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AlumniCard;
