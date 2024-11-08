import {
  VStack,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Link as ChakraLink,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdErrorOutline } from "react-icons/md";
import { Link as RouterLink } from 'react-router-dom';
import BarCode from '../assets/barCode.png';
import Gift1 from '../assets/gift1.png';
import Gift2 from '../assets/gift2.png';
import Gift3 from '../assets/gift3.png';
import Gift4 from '../assets/gift4.png';
import Gift5 from '../assets/gift5.png';
import Gift6 from '../assets/gift6.png';

export default function GiftVouchers() {
  const [currentImage, setCurrentImage] = useState(Gift1);
  const [amount, setAmount] = useState('£20');
  const [email, setEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [yourName, setYourName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleClick = (src) => {
    setCurrentImage(src);
  };

  const handleAmount = (amt) => {
    setAmount(amt);
  };

  const handlePayment = async () => {
    if (!email || !recipientName || !yourName || !deliveryDate) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  
    setLoading(true);
    const formData = {
      currentImage,
      email,
      recipientName,
      yourName,
      deliveryDate,
      personalMessage,
      amount,
    };
  
    try {
      const URL = `${import.meta.env.VITE_API_URL}giftVoucher`;
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error('Payment failed!');
  
      toast({
        title: 'Payment Successful!',
        description: 'Your gift voucher has been sent.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Payment Failed',
        description: err.message || 'Something went wrong.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <VStack mt={10} bg='#eeeeee' p={{ base: 3, md: 5 }} spacing={5} w="full">
        <Heading as='h1' textAlign="center">Gift Vouchers</Heading>
        <Text textAlign="center">Delivered by email, on a date of your choice</Text>

        <Box position='relative' display='inline-block' mt={5} w={{ base: '90%', md: '600px' }}>
          <Image src={BarCode} width="100%" />
          <Box
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            bg='#000'
            p={{ base: 5, md: 10 }}
            color='#fff'
            textAlign='center'
            width='80%'
            height={{ base: '100px', md: '140px' }}
          >
            <Heading fontSize={{ base: '24px', md: '36px' }}>Gift it to me, baby</Heading>
          </Box>
        </Box>

        <Text
          textAlign='justify'
          fontSize='sm'
          padding={{ base: '10px 20px', md: '20px 100px' }}
          width={{ base: '100%', md: '800px' }}
        >
          ASOS gift vouchers – AKA the easiest way to win at presents. Simply choose a design, top it up with an amount of your choice, drop in a message, and we'll slide it straight into the lucky person's inbox on your chosen day.
        </Text>

        <Box textAlign='left' width={{ base: '100%', md: '600px' }} bg='#fff' p={5} borderRadius='md' boxShadow='md'>
          <Text as='span'>Step 1</Text>
          <Box borderBottom='1px solid #777777' pb={3}>
            <Heading fontSize='2xl'>Voucher style</Heading>
          </Box>
          {currentImage && (
            <Image src={currentImage} alt="Selected Gift Style" mt={3} width={'200px'} margin={'20px auto'} />
          )}
          <Flex flexWrap={'wrap'} mt={3} justifyContent={'center'}>
            {[Gift1, Gift2, Gift3, Gift4, Gift5, Gift6].map((gift, index) => (
              <Image
                key={index}
                src={gift}
                onClick={() => handleClick(gift)}
                cursor="pointer"
                m={4}
                width={'90px'}
                height={'70px'}
              />
            ))}
          </Flex>
        </Box>

        <Box textAlign='left' width={{ base: '100%', md: '600px' }} bg='#fff' p={5} borderRadius='md' boxShadow='md'>
          <Text as='span'>Step 2</Text>
          <Box borderBottom='1px solid #777777' pb={3}>
            <Heading fontSize='2xl'>Voucher amount</Heading>
          </Box>

          <Flex justifyContent='space-between' mt={5} wrap='wrap' gap={2}>
            {['£20', '£25', '£30', '£40', '£50', '£75', '£100'].map((amt) => (
              <Button
                key={amt}
                border='1px solid #000'
                borderRadius='0'
                _hover={{ border: '2px solid blue', color: 'blue', bg: '#fff' }}
                flexBasis={{ base: '45%', sm: '30%', md: 'auto' }}
                onClick={() => handleAmount(amt)}
                isActive={amt === amount}
              >
                {amt}
              </Button>
            ))}
          </Flex>

          <FormControl mt={5}>
            <FormLabel>Other (Max £250)</FormLabel>
            <Input placeholder='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </FormControl>

          <Flex alignItems='center' m={3} ml={0}>
            <MdErrorOutline />
            <Text mt={3} fontSize='sm' color='gray.600' ml={1}>
              This voucher can only be used in India in £ GBP.
            </Text>
          </Flex>
        </Box>

        <Box textAlign='left' width={{ base: '100%', md: '600px' }} bg='#fff' p={5} borderRadius='md' boxShadow='md'>
          <Text as='span'>Step 3</Text>
          <Box borderBottom='1px solid #777777' pb={3}>
            <Heading fontSize='2xl'>Make it personal</Heading>
          </Box>

          <Box mt={5} pb={3}>
            <Heading fontSize='22px'>To:</Heading>
          </Box>

          <FormControl mt={5}>
            <FormLabel>Recipient's email address:</FormLabel>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Recipient's name:</FormLabel>
            <Input value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
          </FormControl>

          <Box mt={5} pb={3}>
            <Heading fontSize='22px'>From:</Heading>
          </Box>

          <FormControl mt={5}>
            <FormLabel>Your name:</FormLabel>
            <Input value={yourName} onChange={(e) => setYourName(e.target.value)} />
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Delivery date:</FormLabel>
            <Input type='date' value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Personal message:</FormLabel>
            <Textarea value={personalMessage} onChange={(e) => setPersonalMessage(e.target.value)} placeholder='Want to add a little message?' />
          </FormControl>
        </Box>

        <Box textAlign='left' width={{ base: '100%', md: '600px' }} p={5} borderRadius='0'>
          <Button colorScheme='green' size='lg' w='full' onClick={handlePayment} isLoading={loading}>
            Buy now
          </Button>


          <Text fontSize="sm" mt={3}>
            ASOS gift vouchers can only be applied to purchases in the same country and currency they were bought from.
          </Text>


          <Box borderBottom='1px solid #777777' pb={3} mt={5}>
            <Heading fontSize='2xl'>Need help?</Heading>
          </Box>

          <Flex mt={3}>
            <Text>Question? </Text>
            <ChakraLink as={RouterLink} to='#' ml={1}>
              Contact Customer Care
            </ChakraLink>
          </Flex>

          <ChakraLink to='/termsandconditions' as={RouterLink}>Gift Voucher Terms and Conditions
          </ChakraLink>
        </Box>

      </VStack>
    </>
  );
}
