import { Flex, Text, Box, Button, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

import Header from "../src/components/Layout/Header";

const styles = {};

function Home() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Text>Home - page</Text>
      <p>TE QUIERO</p>

      <Box>
        Este es un div con dispplay block
      </Box>

      <Heading textAlign="center" textTransform="uppercase">este es un h1</Heading>

      <Text backgroundColor="red.100" color="white">este es un parrafo</Text>

      <Button w="200px" h="30px" margin="0 auto">este es un button</Button>

      <Flex border="1px" gap="20px" justifyContent="center" margin="30px">
        <Flex w="200px" h="300px" border="1px" flexDirection="column" >
          <Flex backgroundColor="pink.800" w="200px" h="200px">1</Flex>
          <Flex w="100%" h="100px" alignItems="center" pl="10px">
          <Heading >card 1</Heading>
          </Flex>
        </Flex>
        <Flex w="200px" h="300px" border="1px" flexDirection="column">
        <Flex backgroundColor="pink.300" w="200px" h="200px">2</Flex>
        <Flex w="100%" h="100px" alignItems="center" pl="10px">
          <Heading >card 2</Heading>
          </Flex>
        </Flex>
        <Flex w="200px" h="300px" border="1px" flexDirection="column">
        <Flex backgroundColor="pink.500" w="200px" h="200px">3</Flex>
        <Flex w="100%" h="100px" alignItems="center" pl="10px">
          <Heading >card 3</Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex border="1px" flexDirection="column" margin="0 auto">
        <Flex  w="300px" marginBottom="10px">
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Flex>
        <Flex w="300px" flexDirection="column"  pl="10px" marginBottom="10px" pr="10px">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Button w="100px" h="40px" color="white" backgroundColor="blue.400" mt="10px" mb="10px">CHANGE</Button>
        </Flex>
      </Flex>

      <Flex border="1px" w="570px" margin="0 auto" justifyContent="center" flexDirection="column" alignItems="center" mt="30px">
        <Flex w="200px" h="200px" mt="20px">
        <Image borderRadius="full" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Flex>
        <Flex  flexDirection="column" >
          <Heading margin="0" fontWeight="800" fontSize="38px" marginTop="20px">AKINWUMI MICHAEL</Heading>
          <Text textAlign="center" color="red.300" marginBottom="30px">Product Design Track</Text>
        </Flex>
        <Flex w="495px" h="84px" flexDirection="column">
          <Text textAlign="center" >I choose product design because i love seeing beautiful interfaces and to be able to solve user’s problems.</Text>
          <Heading textAlign="center" >Contact</Heading>
        </Flex>

        <Flex  w="300px" justifyContent="space-evenly" mt="20px">
            <svg className="svg-icon" viewBox="0 0 20 20" width="30px" hanging="30px">
							<path fill="black" d="M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637 M10.858,7.949c0-0.349,0.036-0.536,0.573-0.536h0.719v-1.3H11c-1.38,0-1.866,0.65-1.866,1.743v0.845h-0.86V10h0.86v3.887h1.723V10h1.149l0.152-1.299h-1.302L10.858,7.949z"></path>
						</svg>
            <svg className="svg-icon" viewBox="0 0 20 20" width="30px" hanging="30px">
							<path fill="black" d="M9.969,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.375,4.805,15.164,0.594,9.969,0.594 M9.969,18.552c-4.723,0-8.551-3.829-8.551-8.552s3.829-8.551,8.551-8.551S18.521,5.277,18.521,10S14.691,18.552,9.969,18.552 M12.534,5.724H7.403c-0.944,0-1.71,0.766-1.71,1.71v5.131c0,0.944,0.766,1.71,1.71,1.71h5.131c0.944,0,1.71-0.766,1.71-1.71V7.435C14.244,6.49,13.479,5.724,12.534,5.724M11.679,7.007h1.283V8.29h-1.283V7.007z M9.969,8.29c0.944,0,1.71,0.766,1.71,1.71s-0.766,1.71-1.71,1.71s-1.71-0.766-1.71-1.71S9.024,8.29,9.969,8.29 M13.39,12.565c0,0.472-0.384,0.854-0.855,0.854H7.403c-0.472,0-0.855-0.383-0.855-0.854V9.573h0.898C7.423,9.712,7.403,9.854,7.403,10c0,1.417,1.149,2.565,2.565,2.565c1.416,0,2.565-1.148,2.565-2.565c0-0.146-0.02-0.288-0.043-0.427h0.898V12.565z"></path>
						</svg>
            <svg className="svg-icon" viewBox="0 0 20 20" width="30px" hanging="30px">
							<path fill="black" d="M14.467,6.707c-0.34,0.198-0.715,0.342-1.115,0.419c-0.318-0.335-0.775-0.545-1.279-0.545c-0.969,0-1.754,0.773-1.754,1.727c0,0.135,0.015,0.267,0.045,0.394C8.905,8.628,7.612,7.94,6.747,6.896C6.596,7.151,6.509,7.448,6.509,7.764c0,0.599,0.31,1.128,0.78,1.438C7.002,9.192,6.732,9.115,6.495,8.985c0,0.007,0,0.014,0,0.021c0,0.837,0.605,1.535,1.408,1.694c-0.147,0.04-0.302,0.06-0.462,0.06c-0.113,0-0.223-0.011-0.33-0.031c0.223,0.687,0.871,1.186,1.638,1.199c-0.6,0.464-1.356,0.739-2.179,0.739c-0.142,0-0.281-0.007-0.418-0.023c0.777,0.489,1.699,0.775,2.689,0.775c3.228,0,4.991-2.63,4.991-4.913c0-0.075-0.002-0.149-0.004-0.223c0.342-0.244,0.639-0.547,0.875-0.894c-0.316,0.137-0.652,0.23-1.008,0.272C14.057,7.448,14.336,7.11,14.467,6.707 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.196,0,9.407-4.211,9.407-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.449,10,1.449c4.723,0,8.551,3.829,8.551,8.551S14.723,18.552,10,18.552"></path>
						</svg>
        </Flex>

        <Flex gap="25px" marginBottom="30px" mt="20px">
          <Button  w="200px" h="40px" bg="gray.500">Contact Me</Button>
          <Button  w="200px" h="40px" bg="pink.200">Hire Me</Button>
        </Flex>
      </Flex>

      <Flex border="1px " bg="blackAlpha.800" justifyContent="center" pt="20px" pb="20px" gap="50px" mt="20px">
        <Flex w="250px" flexDirection="column" >
          <Image borderTopRadius="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_80RhOWrfm7UONWzCs9sUSLsyzk2bfS2LHhBip4RsPKvaqY73g3cnuHGrsP21SSwC2I&usqp=CAU"/>
          <Flex flexDirection="column" alignItems="center" bg="whiteAlpha.800" pb="15px">
            <Text color="pink.600">4 days ago</Text>
            <Heading>Post One</Heading>
            <Text textAlign="center">Lorem ipsum dolor sit amet
              consectetur,  Ducimos,repudiandae
              temporibus omnis illum maxime quod
              deserunt eligendi dolor
            </Text>
          </Flex>
          <Flex  bg="pink.700" justifyContent="space-between" pl="5px" pr="5px" borderBottomRadius="10px" >
            <Flex flexDirection="column" color="whiteAlpha.800">
              <Text textAlign="center">4m</Text>
              <Text>READ</Text>
            </Flex>
            <Flex flexDirection="column" color="whiteAlpha.800" >
              <Text textAlign="center">5123</Text>
              <Text>VIEWS</Text>
            </Flex>
            <Flex flexDirection="column" color="whiteAlpha.800">
              <Text textAlign="center">32</Text>
              <Text>COMMENTS</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex w="250px" flexDirection="column" >
         <Image borderTopRadius="10px" src="https://img.freepik.com/fotos-premium/mujer-joven-haciendo-senderismo-sentinel-dome-lookout-parque-nacional-yosemite_242111-17810.jpg"/>
         <Flex flexDirection="column" alignItems="center" bg="whiteAlpha.800" pb="15px">
            <Text color="orange.400">1 week ago</Text>
            <Heading>Post Two</Heading>
            <Text textAlign="center">Adipisicing elit.Ducimus, repudiandae
            corrupti amet temporibus omnis
            provident illum maxime quod.Lorem
            ipsum dolor
            </Text>
          </Flex>

          <Flex  bg="orange.400" justifyContent="space-between" pl="5px" pr="5px"  borderBottomRadius="10px">
            <Flex flexDirection="column" color="whiteAlpha.800">
              <Text textAlign="center">7m</Text>
              <Text>READ</Text>
            </Flex>
            <Flex flexDirection="column" color="whiteAlpha.800" >
              <Text textAlign="center">7152</Text>
              <Text>VIEWS</Text>
            </Flex>
            <Flex flexDirection="column" color="whiteAlpha.800">
              <Text textAlign="center">21</Text>
              <Text>COMMENTS</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex w="250px" flexDirection="column" >
          <Image borderTopRadius="10px" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"/>
          <Flex flexDirection="column" alignItems="center" bg="whiteAlpha.800" pb="15px">
            <Text color="green.600">3 week ago</Text>
            <Heading>Post Three</Heading>
            <Text textAlign="center">Repudiandae corrupti amet
            temporibus omnis provident illum
            maxime. Ducimus, lorem ipsum dolor adipisicing elit
            </Text>
          </Flex>

          <Flex  bg="green.600" justifyContent="space-between" pl="5px" pr="5px" borderBottomRadius="10px">
          <Flex flexDirection="column" color="whiteAlpha.800">
              <Text textAlign="center">5m</Text>
              <Text>READ</Text>
            </Flex>
            <Flex flexDirection="column" color="whiteAlpha.800" >
              <Text textAlign="center">3021</Text>
              <Text>VIEWS</Text>
            </Flex>
            <Flex flexDirection="column" color="whiteAlpha.800">
              <Text textAlign="center">15</Text>
              <Text>COMMENTS</Text>
            </Flex>
          </Flex>
 
        </Flex>

      </Flex>
    </Flex>
  );
}

export default Home;
