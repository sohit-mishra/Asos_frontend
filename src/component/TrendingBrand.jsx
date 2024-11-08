import React from 'react';
import { Heading, Flex, Box, Image } from '@chakra-ui/react';
import trendBrand_1 from '../assets/trendbrand1.png';
import trendBrand_2 from '../assets/trendbrand2.png';
import trendBrand_3 from '../assets/trendbrand3.png';
import trendBrand_4 from '../assets/trendbrand4.png';
import trendBrand_5 from '../assets/trendbrand5.png';
import trendBrand_6 from '../assets/trendbrand6.png';

export default function TrendingBrand() {
  return (
    <Box padding={{ base: '10px 20px', md: '10px 100px' }}>
      <Heading as="h1" textAlign="center" mb="6">TRENDING BRANDS</Heading>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        gap={4} 
      >
       {[
          trendBrand_1,
          trendBrand_2,
          trendBrand_3,
          trendBrand_4,
          trendBrand_5,
          trendBrand_6
        ].map((src, index) => (
          <Box
            key={index}
            width="200px" // Fixed width for all items
            height="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={src} objectFit="contain" height="100%" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}