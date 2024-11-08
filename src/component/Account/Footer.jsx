import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = chakra(RouterLink); // Use chakra to style react-router links

function Footer() {
  return (
    <Box as="footer" bg="gray.100" py={4} display={{base:'none', md:'block'}}>
      <Flex 
        maxW="1200px" 
        mx="auto" 
        px={4} 
        align="center" 
        justify="space-between" 
        wrap="wrap"
      >
    
        <Flex gap={4}>
          <StyledLink to="/" color="gray.600" _hover={{ color: "gray.800" }}>
            Homepage
          </StyledLink>
          <StyledLink to="/termsandconditions" color="gray.600" _hover={{ color: "gray.800" }}>
            Terms & Conditions
          </StyledLink>
          <StyledLink to="/privacy&Cookies" color="gray.600" _hover={{ color: "gray.800" }}>
            Privacy Policy
          </StyledLink>
        </Flex>

        <Text color="gray.600" textAlign="right">
          © ASOS 2024
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
