import React from 'react';
import BackgroundImage from '../assets/blackbg.png';
import { VStack, Image, Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import BlackGirl from '../assets/BlackGirl.png';
import BlackFridayBoy from '../assets/BlackFridayBoy.png';
import ProductBanner from '../component/ProductBanner';

export default function BlackFriday() {
  document.title = 'Black Friday Sales 2024 Coming Soon | ASOS';

  const productBannerData = [
    {
      heading: "WOMENSWEAR DEALS",
      ProductImage: BlackGirl,
      text: "Today's discounts, all in one place."
    },
    {
      heading: "MENSWEAR DEALS",
      ProductImage: BlackFridayBoy,
      text: "Get ready to save..."
    }
  ];

  return (
    <>
      <VStack padding={{ base: '0 10px', md: '0 50px', lg: '0 100px' }} spacing={10}>
        <Box position={'relative'} width={'100%'}>
          <Image src={BackgroundImage} width={'100%'} />
          <Box position={'absolute'} bottom={'0'} transform={'translate(50%, -150%)'}>
            <Heading as="span" color={'#fff'} bg={'#000'} p={{ base: 2, md: 3 }} fontSize={{ base: 'lg', md: 'xl' }}>
              BLACK FRIDAY AND CYBER MONDAY 2024
            </Heading>
          </Box>
        </Box>

        <Text width={{ base: '100%', md: '80%', lg: '600px' }} mt={10} textAlign="center">
          Update your calendar, write it in your diary, tell all your friends... Do whatever you need to do so you won't miss 2024's amazing Black Friday deals! We've waited all year and now it's finally just around the corner. Expect mega offers from Friday 29 November all the way through to Cyber Monday on 2 December. We’re talking *huge* discounts on your favourite brands (we've got 850+ of them!), plus everything you'll need to get set for winter. Think winter coats and jackets, box-fresh trainers, sportswear and party looks... See you in November for the best Black Friday discounts!
        </Text>

        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} justifyContent="center" gap={4} m="10">
          <Button
            colorScheme="#fff"
            border="2px solid #000"
            color="#000"
            borderRadius="0"
            p={6}
            _hover={{
              border: '2px solid #000',
              bg: '#000',
              color: '#fff'
            }}
            width={{ base: '100%', md: 'auto' }}
          >
            SHOP <br /> WOMENSWEAR
          </Button>
          <Button
            colorScheme="#fff"
            border="2px solid #000"
            color="#000"
            borderRadius="0"
            p={6}
            _hover={{
              border: '2px solid #000',
              bg: '#000',
              color: '#fff'
            }}
            width={{ base: '100%', md: 'auto' }}
          >
            SHOP MENSWEAR <br /> DEALS
          </Button>
        </Box>

        <Flex direction={{ base: 'column', md: 'row' }} gap={6} wrap="wrap" justify="center">
          {productBannerData.map((item, index) => (
            <ProductBanner
              key={index}
              heading={item.heading}
              ProductImage={item.ProductImage}
              text={item.text}
              value="true"
            />
          ))}
        </Flex>

        <Box textAlign="center" width="100%">
          <Heading fontSize={{ base: '2xl', md: '3xl' }}>New In</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }}>All of the latest looks.</Text>
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} justifyContent="center" gap={4} m="10">
            <Button
              colorScheme="black"
              border="2px solid #000"
              color="#fff"
              bg={'#000'}
              borderRadius="0"
              p={6}
              _hover={{
                bg: '#fff',
                color: '#000'
              }}
              width={{ base: '100%', md: 'auto' }}
            >
              SHOP WOMEN'S
            </Button>
            <Button
              colorScheme="black"
              border="2px solid #000"
              color="#fff"
              bg={'#000'}
              borderRadius="0"
              p={6}
              _hover={{
                bg: '#fff',
                color: '#000'
              }}
              width={{ base: '100%', md: 'auto' }}
            >
              SHOP MEN'S
            </Button>
          </Box>
        </Box>

        <Box textAlign={'center'} mb={10}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }}>BLACK FRIDAY FAQS</Heading>
          <Text>We're here to answer all your questions about Black Friday weekend.</Text>
        </Box>

        <Box textAlign={'center'} width={{ base: '100%', md: '80%', lg: '60%' }}>
          <Box mb={10}>
            <Heading as="h1" fontSize={{ base: 'lg', md: 'xl' }}>WHEN IS BLACK FRIDAY? HOW LONG DOES THE BLACK FRIDAY SALE LAST?</Heading>
            <Text>Black Friday 2024 starts on 29 November, lasting through Cyber Monday on 2 December. Four days of great shopping!</Text>
          </Box>

          <Box mb={10}>
            <Heading as="h1" fontSize={{ base: 'lg', md: 'xl' }}>WHAT'S INCLUDED IN THE ASOS BLACK FRIDAY OFFERS?</Heading>
            <Text>Huge discounts on top brands like The North Face, adidas, New Balance, Topshop, Topman, and many more!</Text>
          </Box>

          <Box mb={10}>
            <Heading as="h1" fontSize={{ base: 'lg', md: 'xl' }}>CAN I USE MY STUDENT DISCOUNT ON BLACK FRIDAY DEALS?</Heading>
            <Text>Student discounts don't apply, but the deals are substantial enough for amazing savings.</Text>
          </Box>

          <Box mb={10}>
            <Heading as="h1" fontSize={{ base: 'lg', md: 'xl' }}>DOES ASOS OFFER FREE RETURNS DURING AND AFTER BLACK FRIDAY?</Heading>
            <Text>Yes, free returns are available in many locations. Check the delivery and returns page for more info.</Text>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
