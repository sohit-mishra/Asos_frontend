import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Button, Flex, Image, Select, Text, useToast } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';

export default function CartCard({ product, fetchData, handlePrice }) {
  const { accessToken } = useContext(AuthContext);
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialPriceCalculated, setInitialPriceCalculated] = useState(false); 
  const toast = useToast();

  const fetchProduct = async () => {
    const productUrl = `${import.meta.env.VITE_API_URL}product/${product.productId}`;
    try {
      const response = await axios.get(productUrl);
      setProductDetail(response.data.product);

      // Calculate price only once initially
      if (!initialPriceCalculated) {
        handlePrice(response.data.product.price * product.quantity);
        setInitialPriceCalculated(true);
      }
    } catch (error) {
      setError('Could not fetch product details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const updateCart = async (quantity) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}cart/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ quantity, productId: productDetail._id }),
      });

      handlePrice(productDetail.price * (quantity - product.quantity));
      product.quantity = quantity;

      toast({
        title: 'Updated Successfully',
        description: 'Cart item updated.',
        duration: 5000,
        isClosable: true,
      });
      fetchData();
    } catch (error) {
      toast({
        title: 'Update Failed',
        description: error.message,
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const removeCart = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}cart/${product._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      handlePrice(-productDetail.price * product.quantity);
      toast({
        title: 'Removed Successfully',
        description: 'Cart item removed.',
        duration: 5000,
        isClosable: true,
      });
      fetchData();
    } catch (error) {
      toast({
        title: 'Failed to Remove Cart',
        description: error.message,
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [product.productId]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!productDetail) return null;

  return (
    <Flex alignItems="flex-start" key={productDetail.id}>
      <Image src={productDetail.image} alt={productDetail.name} width={{ base: "80px", md: "100px" }} />
      <Box ml="10px" width={"100%"}>
        <Text>{productDetail.name}</Text>
        <Text fontWeight={"bold"}>${productDetail.price}</Text>
        
        <Flex alignItems="center" justifyContent="space-between">
          <Text>{productDetail.color}</Text>
          <Select
            name="quantity"
            aria-label="Select Quantity"
            value={product.quantity}
            onChange={(e) => updateCart(parseInt(e.target.value))}
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>Qty {num + 1}</option>
            ))}
          </Select>
        </Flex>
        
        <Flex justifyContent={'space-between'} m={2}>
          <Button variant="link" leftIcon={<FaHeart />} colorScheme="gray">Save for later</Button>
          <Button variant="link" colorScheme="gray" onClick={removeCart}>Remove</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
