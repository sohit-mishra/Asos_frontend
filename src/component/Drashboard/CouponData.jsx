import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export default function CouponData({ updateData, couponsList, deleteCoupon }) {
  return (
    <Box>
      {couponsList.length === 0 ? (
        <Text mb={4} color="gray.500">
          No active coupons found. Create a new coupon to get started!
        </Text>
      ) : (
        couponsList.map((coupon) => (
          <Box key={coupon._id} borderWidth="1px" p={3} borderRadius="md" mb={2}>
            <Text><strong>Code:</strong> {coupon.code}</Text>
            <Text><strong>Discount:</strong> {coupon.discount}%</Text>
            <Text><strong>Expiry Date:</strong> {coupon.expiryDate}</Text>
            <Button colorScheme="red" mt={2} mr={2} onClick={() => deleteCoupon(coupon._id)}>
              Delete Coupon
            </Button>
            <Button
              colorScheme="teal"
              mt={2}
              onClick={() => updateData(true, coupon)}
            >
              Edit Coupon
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
}
