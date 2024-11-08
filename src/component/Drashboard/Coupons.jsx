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
import CouponData from './CouponData';

export default function Coupons() {
  const { accessToken, userId } = useContext(AuthContext);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [couponId, setCouponId] = useState('');
  const [coupons, setCoupons] = useState([]);
  const [update, setUpdate] = useState(false);
  const toast = useToast();

  const fetchCoupons = async () => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}coupon/${userId}`;
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch coupons.');
      const data = await response.json();
      setCoupons(data);
    } catch (err) {
      toast({
        title: 'Error fetching coupons.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleCreate = async () => {
    if (!code || !discount || !expiryDate) {
      toast({
        title: 'All fields are required',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const url = `${import.meta.env.VITE_API_URL}coupon/`;
    const body = JSON.stringify({ code, discount, expiryDate, userId });

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

      if (!response.ok) throw new Error(result.message || 'Failed to save coupon');

      toast({
        title: 'Coupon created!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      fetchCoupons();  // Refresh coupons after creating one
    } catch (error) {
      toast({
        title: 'Error creating coupon',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async () => {
    if (!couponId) {
      toast({
        title: 'Coupon ID is required for update',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const url = `${import.meta.env.VITE_API_URL}coupon/${couponId}`;
    const body = JSON.stringify({ code, discount, expiryDate });

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

      if (!response.ok) throw new Error(result.message || 'Failed to update coupon');

      toast({
        title: 'Coupon updated!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      resetForm();
      setUpdate(false);
      fetchCoupons();  // Refresh coupons after updating
    } catch (error) {
      toast({
        title: 'Error updating coupon',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const deleteCoupon = async (couponId) => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}coupon/${couponId}`;
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete coupon.');

      // Refresh coupon list after deletion
      setCoupons(coupons.filter((coupon) => coupon._id !== couponId));

      toast({
        title: 'Coupon deleted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Error deleting coupon.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const resetForm = () => {
    setCode('');
    setDiscount('');
    setExpiryDate('');
    setCouponId('');
    setUpdate(false);
  };

  const handleGetUpdate = (updateValue, getCoupon) => {
    setUpdate(updateValue);
    setCouponId(getCoupon._id);
    setCode(getCoupon.code);
    setDiscount(getCoupon.discount);
    setExpiryDate(new Date(getCoupon.expiryDate).toISOString().split('T')[0]);
  };

  return (
    <>
      <Box mx="auto" p={5} borderRadius="lg">
        <FormControl mb={4}>
          <FormLabel>Coupon Code</FormLabel>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter coupon code"
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
          <FormLabel>Expiry Date</FormLabel>
          <Input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </FormControl>

        {update ? (
          <Button colorScheme="blue" mt={4} onClick={handleUpdate}>
            Update Coupon
          </Button>
        ) : (
          <Button colorScheme="blue" mt={4} onClick={handleCreate}>
            Create Coupon
          </Button>
        )}
        <Button colorScheme="teal" mt={4} ml={2} onClick={resetForm}>
          Reset
        </Button>
      </Box>

      <CouponData
        updateData={handleGetUpdate}
        couponsList={coupons}
        deleteCoupon={deleteCoupon}
      />
    </>
  );
}
