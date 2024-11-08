import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export default function AddressData({ updateData, addressesList, deleteAddress }) {
  return (
    <Box>
      {addressesList.length === 0 ? (
        <Text mb={4} color="gray.500">
          No active addresses found. Create a new address to get started!
        </Text>
      ) : (
        addressesList.map((address) => (
          <Box key={address._id} borderWidth="1px" p={3} borderRadius="md" mb={2}>
            <Text><strong>Street:</strong> {address.street}</Text>
            <Text><strong>City:</strong> {address.city}</Text>
            <Text><strong>State:</strong> {address.state}</Text>
            <Text><strong>Country:</strong> {address.country}</Text>
            <Text><strong>Postal Code:</strong> {address.postalCode}</Text>
            <Button colorScheme="red" mt={2} mr={2} onClick={() => deleteAddress(address._id)}>
              Delete Address
            </Button>
            <Button
              colorScheme="teal"
              mt={2}
              onClick={() => updateData(true, address)}
            >
              Edit Address
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
}
