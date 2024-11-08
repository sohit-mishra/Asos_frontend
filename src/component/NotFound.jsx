import React from 'react';
import { Box, Center, Text, Heading, Flex } from '@chakra-ui/react';
import FooterBottom from './Footer'; 
import Header from './Header'; 

export default function NotFound() {
  return (
    <Box>
      <Header /> {/* Include the header component */}
      <Center h="calc(100vh - 120px)" bg="#f7fafc"> {/* Adjust height to accommodate header and footer */}
        <Box textAlign="center" p={6} bg="white" borderWidth="1px" borderRadius="md" boxShadow="md">
          <Heading as="h1" size="2xl" mb={4}>404</Heading> {/* Large heading for the error code */}
          <Text fontSize="lg" color="gray.600" mb={4}>
            Oops! The page you are looking for does not exist.
          </Text>
          <Text color="gray.500">
            Please check the URL or return to the homepage.
          </Text>
        </Box>
      </Center>
      <FooterBottom /> {/* Include the footer component */}
    </Box>
  );
}
