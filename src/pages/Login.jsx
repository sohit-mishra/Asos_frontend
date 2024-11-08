import React, { useState } from 'react';
import {
  Center, Box, Input, Text, Button, VStack, Heading,
  useToast, Link as ChakraLink
} from '@chakra-ui/react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function Login() {
  const { setAccessToken, setRefreshToken, setIsAuthenticated, setUserId } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate input
    if (!email || !password) {
      toast({
        title: "Error.",
        description: "Email and password are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error.",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const URL = `${import.meta.env.VITE_API_URL}auth/login`;
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      toast({
        title: "Login successful!",
        description: "Welcome back!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      // Update context state
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setIsAuthenticated(true);
      setUserId(data.user.id);
      setEmail('');
      setPassword('');
      navigate('/dashboard');

    } catch (error) { 
      setEmail('');
      setPassword('');
      toast({
        title: "Error.",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
     
    }
  };

  return (
    <Box>
      <Center m="140px 0">
        <VStack spacing={4} width="sm" bg="white" p={6} boxShadow="md" borderRadius="md">
          <Heading textAlign="center" mb={6}>ASOS Login</Heading>

          <form onSubmit={handleSubmit}>
            <Text textAlign="left" w="full">Email Address</Text>
            <Input
              size="md"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email Address"
            />

            <Text textAlign="left" w="full">Password</Text>
            <Input
              size="md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />

            <Button
              colorScheme="teal" // Changed to a more common color scheme
              width="full"
              type="submit" // Form submission via Enter key
              isLoading={loading}
              loadingText="Logging In"
              disabled={loading}
              mt={3}
            >
              Login
            </Button>
          </form>

          <ChakraLink color="blue.500" as={RouterLink} to="/signup" textAlign="center" fontSize="sm">
            Don't have an account? Sign Up
          </ChakraLink>

          <ChakraLink color="blue.500" as={RouterLink} to="/forgotPassword" textAlign="center" fontSize="sm">
            Forgot Password
          </ChakraLink>
        </VStack>
      </Center>
    </Box>
  );
}
