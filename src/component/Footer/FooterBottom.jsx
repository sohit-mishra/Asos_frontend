import React from 'react';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function FooterBottom() {
  return (
    <Box
      bgColor="#dddddd"
      width="100%"
      padding={{ base: '10px 20px', md: '10px 100px' }}
      margin="0"
      textAlign="center" 
      fontSize={{ base: 'xs', md: 'sm' }}
    >
      <Flex
        justifyContent="space-between" 
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text>&copy; 2024 ASOS</Text>

        <Flex mt={{ base: '10px', md: '0' }} flexDirection={{ base: 'column', md: 'row' }} justifyContent="center">
          <ChakraLink
            as={Link}
            to='/privacy&Cookies'
            mx={{ base: '0', md: '2' }}
            mb={{ base: '5px', md: '0' }}
            aria-label="Privacy and Cookies"
          >
            Privacy & Cookies
          </ChakraLink>
          <Text mx="1" display={{ base: 'none', md: 'inline' }} color="#666">|</Text>
          <ChakraLink
            as={Link}
            to='/termsandconditions'
            mx={{ base: '0', md: '2' }}
            mb={{ base: '5px', md: '0' }}
            aria-label="Terms and Conditions"
          >
            Ts&Cs
          </ChakraLink>
          <Text mx="1" display={{ base: 'none', md: 'inline' }} color="#666">|</Text>
          <ChakraLink
            as={Link}
            to='/accessibility'
            mx={{ base: '0', md: '2' }}
            aria-label="Accessibility"
          >
            Accessibility
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
