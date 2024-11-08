import {
  VStack,
  Button,
  Box,
  Image,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import IndiaFlag from "../assets/india.png";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import {useNavigate, Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [product , setProduct] = useState('');
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleClick = ()=>{
    navigate('/customercare')
  }

  const handleSearch = ()=>{
    navigate(`/search?${product}`);
  }

  return (
    <VStack gap={0} width="100%" spacing={0}>
      <Flex
        justify="flex-end"
        width="100%"
        padding={{ base: "0 10px", md: "0 100px" }}
        color="#9b9b9b"
        display={{ base: "none", md: "flex" }}
      >
        <Button
          border="1px solid #9b9b9b"
          borderRadius={0}
          _hover={{ bg: "#fff", color: "#000" }}
          fontSize={{ base: "xs", md: "sm" }}
        >
          Marketplace
        </Button>
        <Button
          border="1px solid #9b9b9b"
          borderLeft="none"
          borderRadius={0}
          _hover={{ bg: "#fff", color: "#000" }}
          fontSize={{ base: "xs", md: "sm" }}
          onClick={handleClick}
        >
          Help & FAQs
        </Button>
        <Button
          border="1px solid #9b9b9b"
          borderLeft="none"
          borderRadius={0}
          _hover={{ bg: "#fff", color: "#000" }}
        >
          <Image src={IndiaFlag} alt="India Flag" boxSize="24px" />
        </Button>
      </Flex>

      <Flex
        align="center"
        width="100%"
        bg="#000"
        padding={{ base: "0 10px", md: "0 100px" }}
        color="#fff"
        height={{ base: "48px", md: "65px" }}
        justify="space-between"
      >
        <Box display={{ base: "flex", md: "none" }} mr={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaBars />}
              variant="outline"
              color="white"
              borderColor="gray.700"
            />
            <MenuList bg="#000" color="white">
              <MenuItem as={RouterLink} to="/women">Women</MenuItem>
              <MenuItem as={RouterLink} to="/men">Men</MenuItem>
              <MenuItem as={RouterLink} to="/marketplace">Marketplace</MenuItem>
              <MenuItem as={RouterLink} to="/help">Help & FAQs</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Image
          src={logo}
          alt="Logo"
          filter="invert(1)"
          display={{ base: "block", md: "block" }}
        />

        <Flex gap={4} display={{ base: "none", md: "flex" }} ml={4}>
          <Link as={RouterLink} to="/women" padding="8px 20px">Women</Link>
          <Link as={RouterLink} to="/men" padding="8px 20px">Men</Link>
        </Flex>

        <InputGroup
          size="md"
          display={{ base: "none", md: "flex" }} 
          width={{ base: "0", md: "100%" }} 
          ml={4}
        >
          <Input
            pr="4.5rem"
            placeholder="Search"
            fontSize="sm"
            bg="#fff"
            borderRadius="18px"
            border="none"
            color={"#000"}
            p={"0 25px"}
            onChange={(e) => setProduct(e.target.value)}
            outline="none"
            _focus={{ boxShadow: "none" }}
          />
          <InputRightElement
            width="4.5rem"
            bg="#fff"
            borderRadius="0 18px 18px 0"
            border="none"
            outline="none"
          >
            <Box color="#9b9b9b">
              <FaSearch onClick={handleSearch}/>
            </Box>
          </InputRightElement>
        </InputGroup>

      
        <Flex
          align="center"
          display={{ base: "flex", md: "none" }} 
          flex="1" 
          justify="space-between"
          ml={2}
        >
         
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            variant="outline"
            color="white"
            borderColor="gray.700"
            onClick={toggleSearch}
            display={showSearch ? "none" : "flex"} 
          />

         
          {showSearch && (
            <InputGroup
              size="md"
              width="100%" 
            >
              <Input
                pr="4.5rem"
                placeholder="Search Product"
                fontSize="sm"
                bg={{ base: "#fff", md: "#fff" }} 
                borderRadius="18px"
                border="none"
                color={"#000"}
                outline="none"
                _focus={{ boxShadow: "none" }}
              />

              <InputRightElement
                width="4.5rem"
                bg="#fff"
                borderRadius="0 18px 18px 0"
                border="none"
                outline="none"
              >
                <Box color="#9b9b9b">
                  <FaSearch/>
                </Box>
              </InputRightElement>
            </InputGroup>
          )}
        </Flex>

        <Flex
          gap={{ base: 2, md: 4 }}
          align="center"
          ml={{ base: 2, md: 4 }}
        >
          <Box as={RouterLink} to="/dashboard">
            <FaUser fontSize={{ base: "18px", md: "22px" }} />
          </Box>
          <FaHeart fontSize={{ base: "18px", md: "22px" }} />
          <Box as={RouterLink} to="/cart">
            <FaShoppingCart fontSize={{ base: "18px", md: "22px" }} />
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
}
