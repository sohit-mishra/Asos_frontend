import React, { useContext, useEffect, useState } from 'react';
import { Box, Center, Text, Flex, Image, Button, Divider, Link as ChakraLink, Stack, useToast, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import VisaCard from '../assets/visacard.png';
import MasterCard from '../assets/mastercard.png';
import Paypal from '../assets/paypal.png';
import American from '../assets/american.png';
import Visa from '../assets/visa.png';
import { FaTruckArrowRight } from "react-icons/fa6";
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import CartCard from '../component/CartCard';
import CartNotFound from '../assets/cartfound.svg';

export default function Cart() {
  const { userId, accessToken } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePrice = (e) => {
    setSum(e + sum);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}cart/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      toast({
        title: 'Failed to fetch data',
        description: error.message,
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (userId && accessToken) {
      fetchData();
    }
  }, [userId, accessToken, sum]);

  const orderCreate = async () => {
    const order = { userId, productList: data, totalPrice: sum };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(order),
      });
      const result = await response.json();

      toast({
        title: 'Order Created',
        description: `Order ID: ${result.orderId}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to create order',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Center m="30px 0" flexDirection={{ base: 'column', md: 'row' }} justifyContent="center" alignItems={'flex-start'}>
      {data.length > 0 ? (
        <>
          <Box width={{ base: "90%", sm: "80%", md: "450px" }} padding="10px" margin="10px">
            <Flex justifyContent="space-between" fontSize="1.5xl">
              <Text fontWeight="bold">MY BAG</Text>
              <Text>Items are reserved for 60 minutes</Text>
            </Flex>

            <Stack spacing={4} bg="#fff" m="30px 0" padding="10px">
              {data?.map((item, index) => (
                <CartCard product={item} key={index} fetchData={fetchData} handlePrice={handlePrice} />
              ))}
            </Stack>

            <Flex alignItems="flex-start" bg="#fff" m="30px 0">
              <Box p="5px 20px">
                <FaTruckArrowRight fontSize="36px" />
              </Box>
              <Box ml="10px">
                <Text fontWeight="bold">FREE* STANDARD DELIVERY</Text>
                <Text>Faster delivery options available to most countries.</Text>
                <ChakraLink as={RouterLink} to="/delivery-info">More info</ChakraLink>
              </Box>
            </Flex>

            <Text fontWeight="bold" fontSize="22px">Wondering where your items have gone?</Text>
            <Divider m="20px 0 10px" borderColor="gray.300" />
            <Text>No worries – you'll find them in your Saved Items.</Text>
            <Button
              colorScheme="gray"
              border="1px solid grey"
              color="#000"
              borderRadius="0"
              m="10px 0"
              padding="20px 15px"
            >
              VIEW ALL SAVED ITEMS
            </Button>
          </Box>

          <Box width={{ base: "90%", sm: "80%", md: "350px" }} padding="10px" margin="10px">
            <Text fontWeight="bold" fontSize="2xl" padding="20px 0px">TOTAL</Text>

            <Flex justifyContent="space-between" fontSize="1.5xl">
              <Text fontWeight="bold">SUB-TOTAL</Text>
              <Text fontWeight="bold">$ {sum}</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text fontWeight="bold">DELIVERY</Text>
              <Text fontWeight="bold">$ 0.00</Text>
            </Flex>
            <Divider m="20px 0 10px" borderColor="gray.300" />
            <Button colorScheme="green" borderRadius="0" width="100%" mb="20px" onClick={onOpen}>CHECKOUT</Button>

            <Text fontWeight="bold" m="10px 0">WE ACCEPT:</Text>

            <Flex m="10px 0" flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
              {[VisaCard, MasterCard, Paypal, American, Visa].map((card, index) => (
                <Image
                  key={index}
                  src={card}
                  alt={`Payment Method ${index + 1}`}
                  width="25px"
                  height="25px"
                  mr="30px"
                  _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                />
              ))}
            </Flex>

            <Text as="p">Got a discount code? Add it in the next step.</Text>
          </Box>

          {/* Checkout Modal */}
          <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Checkout</ModalHeader>
              <ModalBody>
                {/* Your checkout details here */}
                <Text>Your order summary goes here.</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={orderCreate}>
                  Confirm Order
                </Button>
                <Button variant="ghost" onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'} flexDirection={'column'}>
          <Image src={CartNotFound} />
          <Heading mt={5}>No Items Found</Heading>
        </Flex>
      )}
    </Center>
  );
}
