import React from 'react';
import { Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap={6}
      p={4}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
