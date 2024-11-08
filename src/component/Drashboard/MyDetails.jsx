import React, { useEffect, useState, useContext } from 'react';
import { Box, Text, Button, Spinner, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { AuthContext } from '../../AuthContext';

export default function MyDetails() {
  const { userId, accessToken } = useContext(AuthContext)
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}auth/profile/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        setProfile(data);
        setFormData({
          name: data.name,
          email: data.email
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, accessToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}auth/profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      setEditable(false);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>My Details</Text>
      {editable ? (
        <Box>
          <FormControl mb={3}>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
            />
          </FormControl>
        
          <Button colorScheme="blue" onClick={handleSave}>Save</Button>
          <Button colorScheme="gray" ml={2} onClick={() => setEditable(false)}>Cancel</Button>
        </Box>
      ) : (
        <Box>
          <Text><strong>Name:</strong> {profile.name}</Text>
          <Text><strong>Email:</strong> {profile.email}</Text>
          <Button colorScheme="yellow" onClick={handleEdit}>Edit</Button>
        </Box>
      )}
    </Box>
  );
}
