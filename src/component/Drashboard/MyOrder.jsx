import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext';
import { useToast, Box, Flex, Text, Heading, Badge, VStack } from '@chakra-ui/react';

export default function MyOrder() {
  const { userId, accessToken } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const toast = useToast();

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}order/${userId}`, {
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
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box p={5}>
      {data.length === 0 ? (
        <Text>No Orders</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {data.map((order) => (
            <Box
              key={order.orderId}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              shadow="md"
            >
              <Flex justify="space-between" align="center">
                <Heading size="md">Order ID: {order.orderId}</Heading>
                <Badge colorScheme={
                  order.status === 'Pending' ? 'orange' : 
                  order.status === 'Shipped' ? 'blue' :
                  order.status === 'Delivered' ? 'green' : 'red'
                }>
                  {order.status}
                </Badge>
              </Flex>
              <Text>Total Price: ₹{order.totalPrice}</Text>
              {order.discount > 0 && (
                <Text>Discount: ₹{order.discount}</Text>
              )}
              {order.coupon && <Text>Coupon: {order.coupon}</Text>}
              <Text>Payment: {order.payment}</Text>
              <Text>Created At: {new Date(order.createdAt).toLocaleDateString()}</Text>
              <Text>Updated At: {new Date(order.updatedAt).toLocaleDateString()}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
}
