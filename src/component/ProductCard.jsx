import React from 'react';
import { Box, Image, Text, Heading, Card, CardBody, Stack, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <RouterLink
      to={`/singleProduct/${product._id}`} // Use product._id for routing
      aria-label={`View details for ${product.name}`}
      style={{ textDecoration: 'none', width: '100%' }}
    >
      <Card
        maxW={{ base: '100%', md: 'sm' }}
        border="1px solid #ddd"
        borderRadius="lg"
        overflow="hidden"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
        mb={4}
      >
        <CardBody p={'0'}>
          {product.image && product.image[0] && (
            <Image
              src={product.image}
              alt={product.name}
              width={'100%'}
              height={'250px'}
              objectFit="cover"
            />
          )}
          <Stack mt="6" spacing="3" p={'0 10px'}>
            <Heading size="md">{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${product.price.toFixed(2)}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </RouterLink>
  );
};

export default ProductCard;
