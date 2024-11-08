import React, { useState, useContext, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { AuthContext } from '../../AuthContext';
import AddressData from './AddressData';

export default function Addresses() {
  const { accessToken, userId } = useContext(AuthContext);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dataAddress, setDataAddress] = useState([]);
  const [update, setUpdate] = useState(false);
  const [addressId, setAddressId] = useState('');
  const toast = useToast();

  const fetchAddress = async () => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}address/${userId}`;
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch Address.');
      const data = await response.json();
      setDataAddress(data.addresses);
    } catch (err) {
      toast({
        title: 'Error fetching Address.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleCreate = async () => {
    if (!street || !city || !state || !country || !postalCode) {
      toast({
        title: 'All fields are required',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const url = `${import.meta.env.VITE_API_URL}address/${userId}`;
    const body = JSON.stringify({ street, city, state, country, postalCode });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body,
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || 'Failed to save Address');

      toast({
        title: 'Address created!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      fetchAddress(); 
    } catch (error) {
      toast({
        title: 'Error creating Address',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async () => {
    if (!addressId) {
      toast({
        title: 'Address ID is required for update',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const url = `${import.meta.env.VITE_API_URL}address/${addressId}`;
    const body = JSON.stringify({ street, city, state, country, postalCode });

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body,
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || 'Failed to update Address');

      toast({
        title: 'Address updated!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      setUpdate(false);
      fetchAddress();  // Refresh addresses after updating
    } catch (error) {
      toast({
        title: 'Error updating Address',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const deleteAddress = async (addressId) => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}address/${addressId}`;
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete address.');

      toast({
        title: 'Address deleted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      fetchAddress(); // Refresh addresses after deletion
    } catch (err) {
      toast({
        title: 'Error deleting Address.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const resetForm = () => {
    setStreet('');
    setCity('');
    setState('');
    setCountry('');
    setPostalCode('');
    setAddressId('');
    setUpdate(false);
  };

  const handleGetUpdate = (updateValue, getAddress) => {
    setUpdate(updateValue);
    setAddressId(getAddress._id);
    setStreet(getAddress.street);
    setCity(getAddress.city);
    setState(getAddress.state);
    setCountry(getAddress.country);
    setPostalCode(getAddress.postalCode);
  };

  return (
    <>
      <Box mx="auto" p={5} borderRadius="lg">
        <FormControl mb={4}>
          <FormLabel>Street</FormLabel>
          <Input
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Enter street"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>City</FormLabel>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>State</FormLabel>
          <Input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter state"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Country</FormLabel>
          <Input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Postal Code</FormLabel>
          <Input
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter postal code"
          />
        </FormControl>

        {update ? (
          <Button colorScheme="blue" mt={4} onClick={handleUpdate}>
            Update Address
          </Button>
        ) : (
          <Button colorScheme="blue" mt={4} onClick={handleCreate}>
            Create Address
          </Button>
        )}
        <Button colorScheme="teal" mt={4} ml={2} onClick={resetForm}>
          Reset
        </Button>
      </Box>

      <AddressData
        updateData={handleGetUpdate}
        addressesList={dataAddress}
        deleteAddress={deleteAddress}
      />
    </>
  );
}
