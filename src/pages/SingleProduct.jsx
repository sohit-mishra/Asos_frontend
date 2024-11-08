import React, { useContext, useEffect, useState } from 'react';
import {
  Flex, Box, Button, Text, Select, Image, Spinner, Alert, AlertIcon,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import deliveryTruck from '../assets/delivery.svg';
import { AuthContext } from '../AuthContext';



export default function SingleProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { userId, accessToken } = useContext(AuthContext);
  const [productDetail, setProductDetail] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();
  

  useEffect(() => {
    const fetchProduct = async () => {
      const productUrl = `${import.meta.env.VITE_API_URL}product/${id}`;
      try {
        const response = await axios.get(productUrl);
        setProductDetail(response.data.product);
        setCurrentImage(response.data.product.image[0] || 'default-fallback-image.jpg');
      } catch (err) {
        setError('Could not fetch product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToBag = async () => {

   
    if (accessToken == null || accessToken == '' || accessToken== undefined) {
      navigate('/login');
      setError('You must be logged in to add items to your bag.');
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}cart/add`, {
        userId,
        productId: id,
        quantity,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: 'Product added to bag!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      setError('Could not add product to bag. Please try again later.');
    }
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Alert status="error" borderRadius="md" mt={4}>
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  if (!productDetail) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text fontSize="xl" color="gray.500">No product found.</Text>
      </Flex>
    );
  }

  const handleImageClick = (imageUrl) => {
    if (imageUrl) {
      setCurrentImage(imageUrl);
    }
  };

  return (
    <Flex p={[2, 4]} align="flex-start" mt={['20px', '40px']} padding={{ base: '10px 20px', md: '10px 100px' }} wrap="wrap" direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
      <Box width={{ base: '100%', md: '40%' }} display="flex" alignItems="flex-start" gap={4} flexWrap="wrap" flexDirection={{ base: 'column', md: 'row' }}>
        <Box mt={4} ml={{ base: 0, md: 4 }} width="100%">
          <Image
            src={productDetail.image}
            width="100%"
            p={"0 20px"}
            objectFit={'cover'}
            height={'400px'}
          />
        </Box>

        <Box display={{ base: 'none', md: 'flex' }} p={"0 20px"}>
          
            <Image
            
              src={productDetail.image}
              alt={`Product thumbnail`}
              boxSize="70px"
              onClick={() => handleImageClick(productDetail.image)}
              cursor="pointer"
              m={4}

            />
        </Box>
      </Box>

      <Box width={{ base: '100%', md: '40%' }} mt={[4, 0]} display="flex" flexDirection="column" gap={4}>
        <Text fontSize={21} display="flex" justifyContent="space-between" alignItems="center" p="10px 0">
          {productDetail.name} <FaHeart aria-label="Wishlist" />
        </Text>
        <Text fontWeight="bold" color="#666666" p="10px 0" fontSize="21px">
          ${productDetail.price?.toFixed(2)}
        </Text>
        <Text p="10px 0">
          <Text as="span" fontWeight="bold" color="#000">Color: </Text>
          {productDetail.color || 'Red'}
        </Text>
        <Text fontWeight="bold">Size</Text>
        <Select placeholder="Select size" aria-label="Size selection">
          {productDetail.sizes?.map((size) => (
            <option key={size} value={size.toLowerCase()}>{size}</option>
          ))}
        </Select>

        <Text fontWeight="bold">Quantity</Text>
        <Select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} aria-label="Quantity selection">
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>{qty}</option>
          ))}
        </Select>

        <Flex mt={4} align="center" direction={{ base: 'column', md: 'row' }} gap={2}>
          <Button bg="#018849" color="#fff" width="100%" borderRadius="0" onClick={handleAddToBag} aria-label="Add product to bag">
            Add to Bag
          </Button>
          <Button variant="outline" colorScheme="teal" width={{ base: '100%', md: 'auto' }} aria-label="Add to Wishlist" display={{ base: 'none', md: 'flex' }}>
            <FaHeart />
          </Button>
        </Flex>

        <Flex alignItems="center" mt={4} direction={{ base: 'column', md: 'row' }} gap={2}>
          <Image src={deliveryTruck} alt="Delivery Truck Icon" objectFit="cover" boxSize="30px" />
          <Text>Free delivery on qualifying orders</Text>
        </Flex>

        <Box mt={4} width="100%">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">Product Details</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {productDetail.description || 'No description available.'}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>


    </Flex>
  );
}
