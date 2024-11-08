import React, { useEffect, useState } from 'react';
import {
  Center,
  Box,
  Input,
  Text,
  Button,
  Flex,
  VStack,
  Link,
  Heading,
  Link as ChakraLink,
  useToast
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function ForgotPassword() {
  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
    document.title = "ASOS | Forgot Password";
  }, []);

  const toast = useToast();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!username) {
      toast({
        title: "Error.",
        description: "Email address is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
      toast({
        title: "Error.",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true); // Start loading

    try {
      const URL = `${import.meta.env.VITE_API_URL}auth/forgotpassword`;
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset link. Please try again.');
      }

      toast({
        title: "Email Sent!",
        description: "Check your email for the password reset link.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setUsername('');
    } catch (err) {
      toast({
        title: "Error.",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box>
      <Center m="200px 0">
        <VStack spacing={4} width="sm" bg="white" p={6} boxShadow="md" borderRadius="md">
          <Heading textAlign="center" mb={6}>ASOS</Heading>

          <Text textAlign="left" w="full">Email Address</Text>
          <Text textAlign="left" w="full" fontSize='sm'>
            I will send the link to your email address. Please check it now!
          </Text>
          <Input
            size="md"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Email Address'
            aria-required="true"
            aria-label="Email Address"
          />

          <Button
            colorScheme="teal"
            width="full"
            onClick={handleClick}
            isLoading={loading} // Show loading state
            loadingText="Sending..."
          >
            Send
          </Button>

          <Link color="blue.500" to="/login" as={RouterLink} textAlign="center" fontSize="sm">
            Login
          </Link>
        </VStack>
      </Center>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        padding={{ base: '10px 20px', md: '10px 100px' }}
        bg="#dddddd"
        textAlign="center"
      >
        <Text>&copy; 2024 ASOS</Text>

        <Flex mt={{ base: '10px', md: '0' }} flexDirection={{ base: 'column', md: 'row' }} justifyContent="center">
          <ChakraLink
            as={RouterLink}
            to='/privacy&Cookies'
            mx={{ base: '0', md: '2' }}
            mb={{ base: '5px', md: '0' }}
            aria-label="Privacy and Cookies"
          >
            Privacy & Cookies
          </ChakraLink>
          <Text mx="1" display={{ base: 'none', md: 'inline' }} color="#666">|</Text>
          <ChakraLink
            as={RouterLink}
            to='/Ts&Cs'
            mx={{ base: '0', md: '2' }}
            mb={{ base: '5px', md: '0' }}
            aria-label="Terms and Conditions"
          >
            Ts&Cs
          </ChakraLink>
          <Text mx="1" display={{ base: 'none', md: 'inline' }} color="#666">|</Text>
          <ChakraLink
            as={RouterLink}
            to='/Accessibility'
            mx={{ base: '0', md: '2' }}
            aria-label="Accessibility"
          >
            Accessibility
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
