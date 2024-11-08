import React from 'react';
import { Box, Button, Text, Image, Stack, useToast, HStack } from '@chakra-ui/react';

const ProductCardAdmin = ({ product, onDelete, onUpdate }) => {
  const toast = useToast();

  const handleDelete = () => {
    if (onDelete) {
      onDelete(product._id);
      toast({
        title: 'Product deleted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate(product);
      toast({
        title: 'Ready to update product.',
        description: 'You can edit the product details now.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Stack spacing={4}>
        <Image
          src={product.image}
          alt={product.name}
          boxSize="150px"
          objectFit="cover"
          mx="auto"
        />
        <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
        <Text color="gray.500" noOfLines={2}>{product.description}</Text>
        <Text>Category: {product.category}</Text>
        <Text>Price: ${product.price}</Text>
        <Text>Cost: ${product.cost}</Text>
        <Text>Stock: {product.stock}</Text>
        
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={handleUpdate}>
            Update Product
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete Product
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ProductCardAdmin;
