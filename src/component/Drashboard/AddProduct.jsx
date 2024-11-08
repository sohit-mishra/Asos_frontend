import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import { AuthContext } from '../../AuthContext';
import ProductCardAdmin from './ProductCardAdmin';

const AddProduct = () => {
  const { accessToken } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const toast = useToast();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}product`);
      setProducts(response.data.products);
      if (response.status === 200) {
        toast({
          title: 'Products fetched successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error fetching products',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleCreateOrUpdateProduct = async () => {
    if (!name || !description || !price || !cost || !category || !stock) {
      toast({
        title: 'All fields are required.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('cost', cost);
    formData.append('category', category);
    formData.append('stock', stock);
    if (file) {
      formData.append('file', file);
    }

    try {
      let response;
      if (editMode) {
        response = await axios.put(`${import.meta.env.VITE_API_URL}product/${editingProductId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === editingProductId ? response.data : product
          )
        );
        toast({
          title: 'Product updated successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        fetchProduct();
      } else {
        response = await axios.post(`${import.meta.env.VITE_API_URL}product`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProducts((prevProducts) => [...prevProducts, response.data]);
        toast({
          title: 'Product created successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }

      resetForm();
      fetchProduct()
    } catch (error) {
      toast({
        title: `Error ${editMode ? 'updating' : 'creating'} product`,
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}product/${productId}`;
      await axios.delete(URL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      toast({
        title: 'Product deleted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      fetchProduct();
    } catch (err) {
      toast({
        title: 'Error deleting product.',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = (product) => {
    setEditMode(true);
    setEditingProductId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCost(product.cost);
    setCategory(product.category);
    setStock(product.stock);
    setPreview(product.image);
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setCost('');
    setCategory('');
    setStock('');
    setFile(null);
    setPreview(null);
    setEditMode(false);
    setEditingProductId(null);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Box mx="auto" borderRadius="lg" boxShadow="lg" p={5}>
      <FormControl id="name" isRequired mb={4}>
        <FormLabel>Product Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
      </FormControl>

      <FormControl id="description" isRequired mb={4}>
        <FormLabel>Product Description</FormLabel>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description" />
      </FormControl>

      <FormControl id="price" isRequired mb={4}>
        <FormLabel>Product Price</FormLabel>
        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
      </FormControl>

      <FormControl id="cost" isRequired mb={4}>
        <FormLabel>Product Cost</FormLabel>
        <Input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Enter product cost" />
      </FormControl>

      <FormControl id="category" isRequired mb={4}>
        <FormLabel>Product Category</FormLabel>
        <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product category" />
      </FormControl>

      <FormControl id="stock" isRequired mb={4}>
        <FormLabel>Product Stock</FormLabel>
        <Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Enter stock quantity" />
      </FormControl>

      <FormControl id="image" isRequired mb={4}>
        <FormLabel>Product Image</FormLabel>
        <Input type="file" accept="image/*" name="file" onChange={handleImageChange} />
        {preview && (
          <Box mt={2}>
            <strong>Preview:</strong>
            <img src={preview} alt="Product preview" width={100} style={{ marginTop: '10px' }} />
          </Box>
        )}
      </FormControl>

      <Button colorScheme="blue" onClick={handleCreateOrUpdateProduct} width="full" mt={4}>
        {editMode ? 'Update Product' : 'Create Product'}
      </Button>

      <Box mt={6}>
        {products.map((product) => (
          <ProductCardAdmin key={product._id} product={product} onDelete={handleDeleteProduct} onUpdate={handleUpdateProduct} />
        ))}
      </Box>
    </Box>
  );
};

export default AddProduct;
