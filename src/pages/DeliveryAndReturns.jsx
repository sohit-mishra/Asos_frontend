import React, { useState } from 'react';
import { Flex, Heading, VStack, Box, Button, Text, Image, List, ListItem } from '@chakra-ui/react';
import { FaTruck } from 'react-icons/fa';
import deliveryReturn from "../assets/deliveryReturn.svg";
import TruckImage from "../assets/delivery.svg";
import Flag from '../assets/india.png';

export default function DeliveryAndReturns() {
  const [delivery, setDelivery] = useState(false);

  return (
    <VStack spacing={5} width="full" maxW="container.md" mx="auto">
      <Flex justifyContent="center" mt={6} mb={4}>
        <Heading textAlign="center" textTransform="uppercase" fontSize={{ base: 'lg', md: '2xl' }}>
          Delivery And Returns
        </Heading>
      </Flex>

      <Text textAlign="center" fontSize={{ base: 'sm', md: 'md' }}>
        See below for information about the delivery & returns options in your country
      </Text>

      <Box borderBottom="1px solid grey" width="100%" pt={4} display="flex" justifyContent="center">
        <Button
          aria-label="Delivery option"
          borderRadius="0"
          onClick={() => setDelivery(true)}
          leftIcon={<Image src={TruckImage} boxSize={8} />}
          colorScheme={delivery ? 'gray' : 'gray'}
          variant={delivery ? 'solid' : 'outline'}
          border={delivery ? '1px solid #000' : 'none'}
          borderBottom={delivery ? '1px solid #000' : 'none'}
          mr={4}
          mb={'-1px'}
          color='#000'
        >
          Delivery
        </Button>
        <Button
          aria-label="Return option"
          borderRadius="0"
          onClick={() => setDelivery(false)}
          leftIcon={<Image src={deliveryReturn} boxSize={8} />}
          colorScheme={!delivery ? 'gray' : 'gray'}
          variant={!delivery ? 'solid' : 'outline'}
          border={!delivery ? '1px solid #000' : 'none'}
          borderBottom={!delivery ? '1px solid #000' : 'none'}
          mb={'-1px'}
          color='#000'
        >
          Return
        </Button>
      </Box>

      <Flex alignItems="center" my={4} flexDirection={{ base: 'column', md: 'row' }}>
        <Text fontWeight="bold" mb={{ base: 2, md: 0 }}>{delivery ? 'Deliver to' : 'Return From'}:</Text>
        <Image src={Flag} width="20px" height="20px" mx={2} />
        <Button borderRadius={0} mt={{ base: 2, md: 0 }}>Change</Button>
      </Flex>

      {delivery ? (
        <Flex width="100%" px={{ base: 4, md: 20 }} alignItems="flex-start" my={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Box width={{ base: '100%', md: '50%' }} mb={{ base: 4, md: 0 }}>
            <Flex alignItems="flex-start" flexDirection="column">
              <FaTruck size={28} />
              <Heading as="h6" fontSize="lg" mt={2}>Standard Delivery</Heading>
            </Flex>
            <Text fontSize="sm" mt={2}>Delivered on or before Wednesday, 13 November 2024</Text>
            <Text fontSize="sm" mt={1}>
              Note: Subject to placing your order before specific cut-off times. Details available in checkout.
            </Text>
          </Box>
          <Box width={{ base: '100%', md: '50%' }} textAlign="center" px={4}>
            <Text fontWeight="bold">£7.00</Text>
            <Text>
              <Text as="span" fontWeight="bold">Free –</Text> spend over £55.00
            </Text>
          </Box>
        </Flex>
      ) : (
        <Box width="100%" px={{ base: 4, md: 20 }} my={8}>
          <Heading as="h1" size="md" mb={4}>About ASOS returns</Heading>
          <List spacing={3} pl={4} styleType="disc">
            <ListItem>Read all about our 28-day policy.</ListItem>
            <ListItem>Learn how to create a return and send back to ASOS.</ListItem>
            <ListItem>Returning directly to a brand? Click here for more information.</ListItem>
            <ListItem>Visit our main Customer Care help page if needed.</ListItem>
          </List>

          <Flex mt={6} alignItems="center" flexDirection={{ base: 'column', md: 'row' }} m={'20px 0'}>
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Image src={deliveryReturn} mb={2} />
              <Heading as="h6" fontSize="lg">Local Post Office</Heading>
              <List spacing={2} mt={2} padding={'10px 20px'}>
                <ListItem>Return through your local post office.</ListItem>
                <ListItem>You'll find a label on your returns note. Note: this is not pre-paid.</ListItem>
              </List>
            </Box>
            <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }} textAlign="center">
              <Text fontWeight="bold">Returns fee charged. Exclusions apply.</Text>
            </Box>
          </Flex>
        </Box>
      )}
    </VStack>
  );
}
