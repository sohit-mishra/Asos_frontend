import React, { useState, useEffect, useContext } from 'react';
import {
  Box, Flex, Text, Button, Stack, useToast, Spinner, IconButton,
  Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { FaBox, FaQuestionCircle,FaHome
,  FaGift, FaUser, FaAddressBook, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MyOrders from '../component/Drashboard/MyOrder';
import MyDetails from '../component/Drashboard/MyDetails';
import AddAddress from '../component/Drashboard/Address';
import Header from '../component/Account/Header';
import Footer from '../component/Account/Footer';
import AddProduct from '../component/Drashboard/AddProduct';
import Coupons from '../component/Drashboard/Coupons';
import Offer from '../component/Drashboard/Offer';
import { AuthContext } from '../AuthContext';

export default function Dashboard() {
  const { userId, accessToken, logout } = useContext(AuthContext);
  const [selectedComponent, setSelectedComponent] = useState('My Details');
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState('User');
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const URL = `${import.meta.env.VITE_API_URL}auth/profile/${userId}`;
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        setUserRole(data.role);
      } catch (error) {
        toast({
          title: "Error fetching user profile.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId, accessToken, toast]);

  const renderComponent = () => {
    if (loading) {
      return <Spinner size="xl" />;
    }

    switch (selectedComponent) {
      case 'My Details':
        return <MyDetails />;
      case 'My Orders':
        return <MyOrders />;
      case 'Add Product':
        return <AddProduct />;
      case 'Coupons':
        return <Coupons />;
        case 'Add Address':
          return <AddAddress />;
      case 'Offers':
        return <Offer />;
      default:
        return <Text>Select an option from the menu.</Text>;
    }
  };

  const handleSignOut = () => {
    logout();
    toast({
      title: "Signed out successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate('/login');
  };

  const handleNeedHelpClick = () => {
    navigate('/customercare');
  };

  const handleGiftVouchers = () => {
    navigate('/giftvouchers');
  };

  const menuItems = userRole === 'admin'
    ? [
        { name: 'My Details', icon: <FaUser /> },
        { name: 'Add Address', icon: <FaHome /> },
        { name: 'My Orders', icon: <FaBox /> },
        { name: 'Add Product', icon: <FaBox /> },
        { name: 'Need Help?', icon: <FaQuestionCircle />, onClick: handleNeedHelpClick },
        { name: 'Gift Cards', icon: <FaGift />, onClick: handleGiftVouchers },
        { name: 'Offers', icon: <FaGift /> },
        { name: 'Coupons', icon: <FaGift /> },
        { name: 'Sign Out', icon: <FaSignOutAlt />, onClick: handleSignOut },
      ]
    : [
        { name: 'My Details', icon: <FaUser /> },
        { name: 'Add Address', icon: <FaHome /> },
        { name: 'My Orders', icon: <FaBox /> },
        { name: 'Need Help?', icon: <FaQuestionCircle />, onClick: handleNeedHelpClick },
        { name: 'Gift Cards', icon: <FaGift />, onClick: handleGiftVouchers },
        { name: 'Address Book', icon: <FaAddressBook /> },
        { name: 'Sign Out', icon: <FaSignOutAlt />, onClick: handleSignOut },
      ];

  return (
    <Box width="100%" maxW="1000px" mx="auto">
      <Header/>
      <Flex alignItems="flex-start" justifyContent="center" flexDirection={{base: 'column', md:'row'}} bg="#fff" gap={2} m={{base :'0', md:'60px 0'}}>
        {/* Mobile menu toggle button */}
        <IconButton
          icon={<FaBars />}
          onClick={onOpen}
          aria-label="Toggle Menu"
          display={{ base: 'block', md: 'none' }}
          m={4}
          p={3}
        />
        
        {/* Drawer for mobile sidebar */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={4} p={4}>
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    onClick={() => {
                      item.onClick ? item.onClick() : setSelectedComponent(item.name);
                      onClose(); // Close the drawer after selecting a menu item
                    }}
                    width="100%"
                    variant="ghost"
                    leftIcon={item.icon}
                    justifyContent="flex-start"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Button>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Sidebar for desktop view */}
        <Box display={{ base: 'none', md: 'block' }} width="250px" borderRight="1px" borderColor="gray.200">
          <Stack spacing={4} p={4}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => {
                  item.onClick ? item.onClick() : setSelectedComponent(item.name);
                }}
                width="100%"
                variant="ghost"
                leftIcon={item.icon}
                justifyContent="flex-start"
                aria-label={item.name}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </Box>
        
        <Box flex="1" p={4} width={{base:'100%'}}>
          {renderComponent()}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
