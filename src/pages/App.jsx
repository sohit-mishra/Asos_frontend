import React from 'react';
import { VStack, Text, Heading, Image, Box, Flex } from '@chakra-ui/react';
import { TbCirclePercentage } from "react-icons/tb";
import BgBarcode from '../assets/BgBarcode.png';
import QrCode from '../assets/qrCode.svg';
import Store from '../assets/store.png';
import BgMenCode from '../assets/bgwomenandmen.png';
import Shirt from "../assets/shirt.svg";
import Return from "../assets/Return.svg";
import Edit from '../assets/edit.svg';
import CheckImage from '../assets/Check.svg';

export default function App() {
  return (
    <VStack spacing={6} width="100%" align="center">
      <Flex width="100%" flexDirection="column" align="center" position="relative">
        <Flex justifyContent="space-between" alignItems="center" wrap="wrap" position="relative" zIndex="2" px={{ base: 4, md: 8 }}>
          <Box width={{ base: '100%', md: '50%' }}>
            <Image src={BgMenCode} alt="ASOS promotion background" />
          </Box>
          <Box p={4} textAlign="center" zIndex="2" width={{ base: '100%', md: '50%' }}>
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} mb={4}>Get more with the ASOS app</Heading>
            <Flex alignItems="center" justifyContent="center">
              <Box mr={4}>
                <Image src={QrCode} alt="QR code to download app" width={{ base: '140px', md: '180px' }} />
              </Box>
              <Flex flexDirection="column" alignItems="center">
                <Image src={Store} alt="Download on App Store" width={{ base: '140px', md: '200px' }} objectFit="cover" />
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Box width="100%">
          <Image src={BgBarcode} alt="Barcode background" objectFit="cover" width="100%" mb={5} />
        </Box>
      </Flex>

      {/* Discount Section */}
      <Flex
        justifyContent="center" bg="#26e066" textAlign="center" flexDirection="column" alignItems="center" width="100%" p={10}>
        <TbCirclePercentage
          aria-label="Discount Icon"
          size="80px"
          style={{ fontSize: "80px" }}
        />
        <Heading as="h3" fontSize="2xl" mt={4}>Discount & Offers</Heading>
        <Text mt={2}>Sweet deals exclusive for app users - how can you say no?!</Text>
      </Flex>

      {/* Perks Section */}
      <Text as="span" bg="#000" fontSize={{ base: '2xl', md: '4xl' }} color="#fff" px={4} py={2} borderRadius="md">Even more perks…</Text>

      <Flex wrap="wrap" justifyContent="center" gap={8} mt={6} alignItems={'flex-end'} mb={40}>
        <Box textAlign="center" p={4} maxWidth={{ base: '200px', md: '250px' }} bg="gray.50" borderRadius="md" boxShadow="md">
          <Image src={CheckImage} width={'60px'} margin={'0 auto'} />
          <Heading as="h4" fontSize="xl" mt={2}>Back In Stock Notifications</Heading>
          <Text mt={1}>Don't miss out when your saved items are back!</Text>
        </Box>

        <Box textAlign="center" p={4} maxWidth={{ base: '200px', md: '250px' }} bg="gray.50" borderRadius="md" boxShadow="md">
          <Image src={Edit} width={'60px'} margin={'0 auto'} />
          <Heading as="h4" fontSize="xl">Your <br /> Edit</Heading>
          <Text mt={1}>Selections based on you & your style!</Text>
        </Box>

        <Box textAlign="center" p={4} maxWidth={{ base: '200px', md: '250px' }} bg="gray.50" borderRadius="md" boxShadow="md">
          <Image src={Shirt} width={'60px'} margin={'0 auto'} />
          <Heading as="h4" fontSize="xl" mt={2}>Style <br /> Match</Heading>
          <Text mt={1}>Outfit inspo from your pics & screenshots.</Text>
        </Box>

        <Box textAlign="center" p={4} maxWidth={{ base: '200px', md: '250px' }} bg="gray.50" borderRadius="md" boxShadow="md">
          <Image src={Return} width={'60px'} margin={'0 auto'} />
          <Heading as="h4" fontSize="xl" mt={2}>Order & Returns Notifications</Heading>
          <Text mt={1}>Stay in the know of your order status.</Text>
        </Box>
      </Flex>
    </VStack>
  );
}
