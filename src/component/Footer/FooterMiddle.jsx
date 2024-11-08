import React from 'react';
import {
  Flex,
  Box,
  Heading,
  List,
  ListItem,
  Link as ChakraLink,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Link as ReactRouter } from 'react-router-dom';

export default function FooterMiddle() {
  return (
    <Flex
      width="100%"
      padding={{ base: '10px 20px', md: '40px 100px' }}
      margin="0"
      justifyContent={{ base: 'center', md: 'space-between' }}
      bgColor="#eeeeee"
      fontSize={{ base: 'sm', md: 'md' }}
      color="#666"
      direction={{ base: 'column', md: 'row' }}
    >
      <Stack
        spacing={4}
        width={{ base: '100%', md: 'auto' }}
        mb={{ base: 4, md: 0 }}
        textAlign="center"
      >
        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          Help & Information
        </Heading>
        <List spacing={2}>
          <ListItem>
            <ChakraLink
              as={ReactRouter}
              to="/customercare"
              color="#666"
              _hover={{ textDecoration: 'underline' }}
            >
              Help
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={ReactRouter}
              to="/order"
              color="#666"
              _hover={{ textDecoration: 'underline' }}
            >
              Track Order
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={ReactRouter}
              to="/deliveryandreturns"
              color="#666"
              _hover={{ textDecoration: 'underline' }}
            >
              Delivery & Returns
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" as={ReactRouter} color="#666" _hover={{ textDecoration: 'underline' }}>
              Sitemap
            </ChakraLink>
          </ListItem>
        </List>
      </Stack>

      <Stack
        spacing={4}
        width={{ base: '100%', md: 'auto' }}
        mb={{ base: 4, md: 0 }}
        textAlign="center"
      >
        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          About ASOS
        </Heading>
        <List spacing={2}>
          <ListItem>
            <ChakraLink to="/about"  as={ReactRouter} color="#666" _hover={{ textDecoration: 'underline' }}>
              About Us
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666"  as={ReactRouter} _hover={{ textDecoration: 'underline' }}>
              Careers at ASOS
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666"  as={ReactRouter} _hover={{ textDecoration: 'underline' }}>
              Corporate Responsibility
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666"  as={ReactRouter}  _hover={{ textDecoration: 'underline' }}>
              Investor's Site
            </ChakraLink>
          </ListItem>
        </List>
      </Stack>

      <Stack
        spacing={4}
        width={{ base: '100%', md: 'auto' }}
        mb={{ base: 4, md: 0 }}
        textAlign="center"
      >
        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          MORE FROM ASOS
        </Heading>
        <List spacing={2}>
          <ListItem>
            <ChakraLink to="/app"  as={ReactRouter} color="#666" _hover={{ textDecoration: 'underline' }}>
              Mobile and ASOS Apps
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666"  as={ReactRouter} _hover={{ textDecoration: 'underline' }}>
              ASOS Marketplace
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="/giftvouchers"  as={ReactRouter} color="#666" _hover={{ textDecoration: 'underline' }}>
              Gift Vouchers
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="/blackfriday"  as={ReactRouter} color="#666" _hover={{ textDecoration: 'underline' }}>
              Black Friday
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666"  as={ReactRouter} _hover={{ textDecoration: 'underline' }}>
              ASOS x Thrift+
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666"  as={ReactRouter} _hover={{ textDecoration: 'underline' }}>
              Discover the ASOS Credit Card
            </ChakraLink>
          </ListItem>
        </List>
      </Stack>

      <Stack
        spacing={4}
        width={{ base: '100%', md: 'auto' }}
        textAlign="center"
      >
        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
          SHOPPING FROM:
        </Heading>
        <Text fontWeight="medium">You're in the US.</Text>
        <Text>Some of our International Sites:</Text>
        <List spacing={1}>
          <ListItem>
            <ChakraLink to="#" color="#666" _hover={{ textDecoration: 'underline' }}>
              ASOS UK
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink to="#" color="#666" _hover={{ textDecoration: 'underline' }}>
              ASOS AU
            </ChakraLink>
          </ListItem>
        </List>
      </Stack>
    </Flex>
  );
}
