import React, { useEffect } from 'react';
import {
  Text,
  Heading,
  VStack,
  Box,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Grid,
  Icon,
  List,
  ListItem,
  Button, // Import Button
} from '@chakra-ui/react';
import { FaSearch, FaTruck, FaBox, FaShoppingCart, FaGift, FaMobileAlt } from 'react-icons/fa';
import CustomerImage from '../assets/customercare.png';
import CustomerGirl from '../assets/CustomerGirl.png';

export default function CustomerCare() {
  useEffect(() => {
    document.title = "ASOS Customer Service | ASOS Customer Care";
  }, []);

  const customerCareData = [
    {
      category: "Delivery",
      icon: FaTruck,
      items: ["International deliveries", "Where's my order?", "Can I track my order?"],
    },
    {
      category: "Returns & Refunds",
      icon: FaBox,
      items: ["How do I return?", "ASOS Returns Policy", "Refunds"],
    },
    {
      category: "Order issues",
      icon: FaShoppingCart,
      items: ["Amend or cancel order", "Something's wrong with my item", "Missing Item"],
    },
    {
      category: "Product & Stock",
      icon: FaBox,
      items: ["Help with sizing", "Sale terms", "Save for later"],
    },
    {
      category: "Payment, Promos & Gift Vouchers",
      icon: FaGift,
      items: ["Payment types", "Promo codes", "Gift Vouchers"],
    },
    {
      category: "Technical",
      icon: FaMobileAlt,
      items: ["ASOS Account", "ASOS App", "ASOS Notifications"],
    },
  ];

  return (
    <>
      <VStack gap={0} width="100%" spacing={0} padding={{ base: '30px 20px', md: '30px 150px' }}>
        <Box position={'relative'} width="100%">
          <Image src={CustomerImage} filter={'brightness(50%)'} width="100%" />
          <Box
            position={'absolute'}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width={{ base: '80%', md: '50%' }}
          >
            <Heading color="white" textAlign={'center'}>Customer Care</Heading>
            <InputGroup
              size="md"
              display={{ base: "none", md: "flex" }}
              width="100%"
              mt={10}
            >
              <Input
                pr="4.5rem"
                placeholder="Search for help"
                fontSize="sm"
                bg="#fff"
                borderRadius="18px"
                border="none"
                outline="none"
                _focus={{ boxShadow: "none" }}
              />
              <InputRightElement
                width="4.5rem"
                bg="#fff"
                borderRadius="0 18px 18px 0"
                border="none"
                outline="none"
              >
                <Box color="#9b9b9b">
                  <FaSearch />
                </Box>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        <Accordion width="100%" mt={8} allowToggle>
          <AccordionItem bg={'#feeacd'}>
            <Heading as='h4'>
              <AccordionButton fontWeight={'bold'} fontSize={'18px'} padding='15px 30px'>
                <Box flex="1" textAlign="left">Linking to this Website</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel padding='15px 30px' bg={'#feeacd'}>
              <Text py="4">
                It’s fine for you to link to asos.com, as long as you do so in a way that is not-commercial, is fair and legal, and doesn’t damage or take advantage of our reputation.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem bg={'#feeacd'}>
            <Heading as='h4'>
              <AccordionButton fontWeight={'bold'} fontSize={'18px'} padding='15px 30px'>
                <Box flex="1" textAlign="left">Deliveries to Ukraine</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel padding='15px 30px' bg={'#feeacd'}>
              <Text py="4">
                Due to the ongoing situation, it’s not possible for us to fulfill any orders to Ukraine currently - click here for more info.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Flex width="100%" justifyContent="flex-start" mt={8}>
          <Text fontSize="2xl" fontWeight="bold">FAQ Topics</Text>
        </Flex>

        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6} width={'100%'} m='20px'>
          {customerCareData.map((section, index) => (
            <Box key={index} p={4} border="1px solid #E2E8F0" borderRadius="md" boxShadow="sm">
              <Flex mb={0} alignItems={'flex-start'} borderBottom={'1px solid #E2E8F0'}>
                <Icon as={section.icon} w={6} h={6} mr={2} />
                <Text fontSize="lg" fontWeight="bold" mb={4}>{section.category}</Text>
              </Flex>
              <List spacing={2} mt={5}>
                {section.items.map((item, i) => (
                  <ListItem key={i} fontSize="sm" color="gray.600" _hover={{ color: "blue.600", cursor: "pointer" }}>
                    {item}
                  </ListItem>
                ))}
                <ListItem fontSize="sm" fontWeight={'bold'} color="gray.600" _hover={{ color: "blue.600", cursor: "pointer" }}>
                  View All
                </ListItem>
              </List>
            </Box>
          ))}
        </Grid>

        <Flex direction={{ base: 'column', md: 'row' }} width={'100%'}>
          <Box width={{ base: '100%', md: '50%' }} p='4' pl='0'>
            <Flex width="100%" justifyContent="flex-start" mt={8}>
              <Text fontSize="2xl" fontWeight="bold">FAQ Topics</Text>
            </Flex>
            <Box border={'1px solid #ebe8e8'} mt='5' mb='10'>
              <Box borderBottom={'1px solid #E2E8F0'} p='20px'>
                <Text>What is your Returns Policy?</Text>
              </Box>
              <Box borderBottom={'1px solid #E2E8F0'} p='20px'>
                <Text>Can I track the delivery of my order?</Text>
              </Box>
              <Box p='20px'>
                <Text>Will my parcel be charged customs and import charges?</Text>
              </Box>
            </Box>
          </Box>

          <Box width={{ base: '100%', md: '50%' }} p='4' pr='0'>
            <Flex width="100%" justifyContent="flex-start" mt={8}>
              <Text fontSize="2xl" fontWeight="bold">Need to get in touch?</Text>
            </Flex>
            <Box border={'1px solid #ebe8e8'} mt='5' mb='10'>
              <Image src={CustomerGirl} width={'100%'} height={'200px'} objectFit={'cover'} />
              <Flex justifyContent="center" mt={4}>
                <Button border={'1px solid grey'} width={'200px'} mb='4'>
                  Contact us now
                </Button>
              </Flex>
            </Box>
          </Box>

        </Flex>
      </VStack>
    </>
  );
}
