import React from 'react';
import { Box, Text, VStack, Flex, Image, Heading, Button } from '@chakra-ui/react';
import Image1 from '../assets/homemedia1.png';
import Image2 from '../assets/homemedia2.png';
import Image3 from '../assets/homemedia3.png';
import Image4 from '../assets/homemedia4.png';

import Women1 from '../assets/women1.png';
import Women2 from '../assets/women2.png';
import Women3 from '../assets/women3.png';
import Women4 from '../assets/women4.png';
import Home from '../assets/home.png';

import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import men3 from '../assets/men3.png';
import men4 from '../assets/men4.png';
import { useNavigate } from 'react-router-dom';


export default function HomeComponent() {
  const navigate = useNavigate();
  const handleMen = ()=>{
    navigate('/men');
  }

  const handleWomen = ()=>{
    navigate('/women');
  }
  return (
    <VStack spacing={0} align="stretch">

      {/* Promotional Banner */}
      <Box bgColor="rgb(156, 240, 224)" width="100%" textAlign="center" padding="5px">
        <Text fontWeight="bold" lineHeight="18px">
          APP EXCLUSIVE <br />
          25% off 1000s of style hits* <br />
          Download the app now
        </Text>
      </Box>

      {/* Main Image with Buttons */}
      <Box width="100%" textAlign="center" padding={{ base: '0 20px', md: '0 100px' }} position="relative">
        <Image src={Home} mt="0" width="100%" height="auto" />
        <Flex
          position="absolute"
          justifyContent="center"
          alignItems="center"
          top="50%"
          transform="translateY(-50%)"
          width="100%"
          left={0}
          padding={{ base: '10px 20px', md: '10px 100px' }}
          direction={{ base: 'column', md: 'row' }} // Stack buttons on mobile
        >
          <Button bg="#fff" color="#000" borderRadius={0} _hover={{ bg: 'black', color: 'white' }} onClick={handleWomen}>SHOP WOMENS</Button>
          <Button bg="#fff" color="#000" ml={{ base: 0, md: 4 }} mt={{ base: 2, md: 0 }} borderRadius={0} _hover={{ bg: 'black', color: 'white' }} onClick={handleMen}>SHOP MENS</Button>
        </Flex>
      </Box>

      {/* Media Section */}
      <Flex justifyContent="space-between" wrap="wrap" padding={{ base: '10px 20px', md: '10px 100px' }}>
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <Box key={index} maxWidth={{ base: "100%", sm: "48%", md: "24%" }} flex="1" padding="4">
            <Image src={image} objectFit="cover" width="100%" height="auto" />
          </Box>
        ))}
      </Flex>

      <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} textAlign="center" mt="40px">The biggest labels</Heading>

      {/* Women's Brands Section */}
      <Box>
        <Flex justifyContent="center" wrap="wrap" padding={{ base: '10px 20px', md: '10px 100px' }}>
          {[Women1, Women2, Women3, Women4].map((image, index) => (
            <Box key={index} maxWidth={{ base: "100%", sm: "48%", md: "24%" }} flex="1" padding="4">
              <Image src={image} objectFit="cover" width="100%" height="auto" />
            </Box>
          ))}
        </Flex>
        <Box display="flex" justifyContent="center" m={10}>
          <Button
            colorScheme="white"
            border="2px solid #000"
            borderRadius="0"
            width="200px"
            color="#000"
            _hover={{ bg: 'black', color: 'white' }}
            padding="30px 10px"
            margin="0 auto"
            onClick={handleWomen}
          >
            SHOP WOMEN'S <br /> BRANDS
          </Button>
        </Box>
      </Box>

      {/* Men's Brands Section */}
      <Box>
        <Flex justifyContent="center" wrap="wrap" padding={{ base: '10px 20px', md: '10px 100px' }}>
          {[men1, men2, men3, men4].map((image, index) => (
            <Box key={index} maxWidth={{ base: "100%", sm: "48%", md: "24%" }} flex="1" padding="4">
              <Image src={image} objectFit="cover" width="100%" height="auto" />
            </Box>
          ))}
        </Flex>
        <Box display="flex" justifyContent="center" m={10}>
          <Button
            colorScheme="white"
            border="2px solid #000"
            borderRadius="0"
            width="200px"
            color="#000"
            _hover={{ bg: 'black', color: 'white' }}
            padding="30px 10px"
            margin="0 auto"
            onClick={handleMen}
          >
            SHOP MEN'S <br /> BRANDS
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
