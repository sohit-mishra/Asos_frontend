import React from 'react';
import { Box, Image, Text, Button, Heading } from '@chakra-ui/react';

export default function ProductBanner({ heading, ProductImage, text, value }) {
  return (
    <Box textAlign="center" p={value === "true" ? { base: 8, md: 15 } : { base: 4, md: 8 }} mt={10}>
      <Image src={ProductImage} alt={heading} width="100%" height="auto" maxWidth="400px" margin="0 auto" />
      <Heading as="h4" fontSize={{ base: 'xl', md: '2xl' }} mt={4}>
        {heading}
      </Heading>
      <Text mt={2} fontSize={{ base: 'md', md: 'lg' }}>
        {text}
      </Text>
      {value === "true" && (
        <Button
          mt={5}
          colorScheme="white"
          border="1px solid #000"
          borderRadius={0}
          color="#000"
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          padding={{ base: '15px', md: '25px' }}
          _hover={{ bg: 'black', color: 'white' }}
        >
          SHOP NOW
        </Button>
      )}
    </Box>
  );
}
