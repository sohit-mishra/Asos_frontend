import React, { useState } from 'react';
import {
  Center, Box, Input, Text, Button, VStack, Heading,
  useToast, Link as ChakraLink
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Signup() {
  // Initialize toast for displaying messages
  const toast = useToast();
  // State variables to hold input values and loading state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Validate inputs
    if (!name || !email || !password) {
      toast({
        title: "Error.",
        description: "All fields are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false); // Reset loading state
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Error.",
        description: "Password must be at least 6 characters long.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false); // Reset loading state
      return;
    }

    try {
      const URL = `${import.meta.env.VITE_API_URL}auth/signup`; // API URL for signup
      const response = await fetch(URL, {
        method: "POST", // POST request to create a new user
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Send user data
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`); // Throw an error if response is not ok
      }

      const data = await response.json(); // Parse the response data
      toast({
        title: "Account created!",
        description: "You can now log in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear input fields after successful signup
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle errors during signup
      toast({
        title: "Error.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // Reset loading state regardless of outcome
    }
  };

  return (
    <Box>
      <Center m="140px 0">
        <VStack spacing={4} width="sm" bg="white" p={6} boxShadow="md" borderRadius="md">
          <Heading textAlign="center" mb={6}>ASOS Sign Up</Heading>

          {/* Input fields for user data */}
          <Text textAlign="left" w="full">Name</Text>
          <Input
            size="md"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Text textAlign="left" w="full">Email Address</Text>
          <Input
            size="md"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Text textAlign="left" w="full">Password</Text>
          <Input
            size="md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Sign Up button */}
          <Button
            colorScheme="blackAlpha"
            width="full"
            onClick={handleSubmit}
            isLoading={loading}
            loadingText="Creating Account"
          >
            Sign Up
          </Button>

          {/* Link to login page */}
          <ChakraLink color="blue.500" as={RouterLink} to="/login" textAlign="center" fontSize="sm">
            Already have an account? Login
          </ChakraLink>
        </VStack>
      </Center>
    </Box>
  );
}
