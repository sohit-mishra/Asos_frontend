import React, { useEffect, useState } from 'react';
import { Box, Spinner, SimpleGrid, Text, useToast, Heading } from '@chakra-ui/react';
import ProductCard from '../component/ProductCard';

export default function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await fetch('http://localhost:3001/api/product');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);

      } catch (error) {
        toast({
          title: 'Error fetching products',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false); // Set loading to false when fetching ends
      }
    };

    fetchProducts();
  }, [toast]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box padding={{ base: '0 20px', md: '10px 100px' }}>
      <Heading mb={4} as="h2" size="lg" mt={10}>
        Product Search Results
      </Heading>
      {products.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={6}
          p={4}
          justifyItems={{ base: 'center' }}
        >
          {products.map((product) => ( 
            <ProductCard key={product._id} product={product} /> 
          ))}
        </SimpleGrid>
      ) : (
        <Box width="100%" textAlign="center" py={10}>
          <Text fontSize={32}>No products found.</Text>
        </Box>
      )}
    </Box>
  );
}
