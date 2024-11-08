import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { AuthContext } from '../../AuthContext';
import OfferData from './OfferData';

export default function Offer() {
  const { accessToken, userId } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [offerId, setOfferId] = useState('');
  const toast = useToast();
  const [offersList, setOffersList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const URL = `${import.meta.env.VITE_API_URL}offer/${userId}`;
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch offers.');
      const data = await response.json();
      setOffersList(data);
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error fetching offers.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, [accessToken]);

  const handleCreate = async () => {
    if (!name || !description || !discount || !startDate || !endDate) {
      toast({
        title: 'All fields are required',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const url = `${import.meta.env.VITE_API_URL}offer/`;
    const body = JSON.stringify({ name, description, discount, userId, startDate, endDate });

    setLoading(true);
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

      if (!response.ok) throw new Error(result.message || 'Failed to save offer');

      toast({
        title: 'Offer created!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      fetchOffers(); 
    } catch (error) {
      toast({
        title: 'Error creating offer',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!offerId) {
      toast({
        title: 'Offer ID is required for update',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const url = `${import.meta.env.VITE_API_URL}offer/${offerId}`;
    const body = JSON.stringify({ name, description, discount, startDate, endDate });

    setLoading(true);
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

      if (!response.ok) throw new Error(result.message || 'Failed to update offer');

      toast({
        title: 'Offer updated!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      setUpdate(false);
      fetchOffers(); // Refresh the offers list
    } catch (error) {
      toast({
        title: 'Error updating offer',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOffer = async (couponId) => {
    setLoading(true);
    try {
      const URL = `${import.meta.env.VITE_API_URL}offer/${couponId}`;
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete offer.');

      toast({
        title: 'Offer deleted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      fetchOffers(); // Refresh the offers list
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error deleting offer.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setDiscount('');
    setStartDate('');
    setEndDate('');
    setUpdate(false);
  };

  const handleGetUpdate = (updateValue, getOffer) => {
    setUpdate(updateValue);
    setOfferId(getOffer._id);
    setName(getOffer.name);
    setDescription(getOffer.description);
    setDiscount(getOffer.discount);
    const startDateObj = new Date(getOffer.startDate);
    setStartDate(startDateObj.toISOString().split('T')[0]);
    const endDateObj = new Date(getOffer.endDate);
    setEndDate(endDateObj.toISOString().split('T')[0]);
  };

  return (
    <>
      <Box mx="auto" p={5} borderRadius="lg">
        <FormControl mb={4}>
          <FormLabel>Offer Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter offer name"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter offer description"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Discount</FormLabel>
          <Input
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Enter discount"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Start Date</FormLabel>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>End Date</FormLabel>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormControl>

        {update ? (
          <Button colorScheme="blue" mt={4} onClick={handleUpdate} isLoading={loading}>
            Update Offer
          </Button>
        ) : (
          <Button colorScheme="blue" mt={4} onClick={handleCreate} isLoading={loading}>
            Create Offer
          </Button>
        )}
        <Button colorScheme="teal" mt={4} ml={2} onClick={resetForm} isLoading={loading}>
          Reset
        </Button>
      </Box>

      <OfferData updateData={handleGetUpdate} offersList={offersList} deleteOffer={handleDeleteOffer} />
    </>
  );
}
