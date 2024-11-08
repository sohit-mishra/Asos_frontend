import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Box 
      bg="linear-gradient(90deg, #FF385C 0%, #F799BA 100%)" 
      textAlign="center" 
      p={{ base: '20px', md: '0px' }} 
      borderRadius="md" 
      width="100%"
      m={"30px 0"}
    >
      <Button 
        m={4} 
        borderRadius="20px" 
        bg="transparent" 
        border="2px solid #000" 
        p="0 40px"
        _hover={{ bg: 'transparent', border: '2px solid #000' }} 
        fontSize={{ base: '14px', md: '16px' }} 
      >
        THE ASOS APP
      </Button>
      <Text fontSize={{ base: 'sm', md: 'lg' }} mb={2} fontWeight="bold">
        Fave piece sold out?
      </Text>
      <Text fontSize={{ base: 'sm', md: 'lg' }} mb={4} fontWeight="bold">
        Get back-in-stock alerts on the app
      </Text>
      <Button 
        m={4} 
        borderRadius="20px" 
        bg="#000" 
        border="2px solid #000" 
        p="0 40px" 
        color="#fff"
        _hover={{ bg: '#000', border: '2px solid #000', color: '#fff' }} 
        fontSize={{ base: '14px', md: '16px' }} 
      >
        DOWNLOAD NOW
      </Button>
    </Box>
  );
}
