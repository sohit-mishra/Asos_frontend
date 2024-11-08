import { VStack, Heading, Text, List, ListItem, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import AccessibilityImage from '../assets/accessibility.jpg';

export default function Accessibility() {
  useEffect(() => {
    document.title = 'Accessibility | ASOS';
  }, []);

  return (
    <VStack
      width={{ base: "90%", sm: "80%", md: "700px" }}
      margin="0 auto"
      spacing={6}
      alignItems="flex-start"
      textAlign="left"
    >
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        m="60px 0 15px"
      >
        Accessibility Statement
      </Heading>

      <Text lineHeight="1.6">
        At ASOS.com, we are committed to providing equal access to all our customers. We believe that everyone deserves to have a seamless and enjoyable shopping experience, whether it be on our website or through our mobile apps.
      </Text>

      <Heading fontSize="2xl" mt="40px">
        Web Accessibility Initiative
      </Heading>

      <Text lineHeight="1.6">
        Our website and mobile apps are designed and developed to meet the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards, as outlined by the World Wide Web Consortium (W3C). We train members of our team on accessibility best practices and regularly conduct accessibility audits and usability testing to ensure that our platforms are accessible to all individuals.
      </Text>

      <Heading fontSize="2xl" mt="40px">
        Feedback and Support
      </Heading>

      <Text lineHeight="1.6">
        We welcome feedback from our customers regarding the accessibility of our website and mobile apps. If you have any suggestions, questions, or concerns about accessibility, please raise them via the User Voice platform.
      </Text>

      <Text lineHeight="1.6">
        We are committed to making our website and mobile apps accessible to all users, and we will make every effort to address and resolve any accessibility issues promptly.
      </Text>

      <Heading fontSize="2xl" mt="40px">
        Further Steps
      </Heading>

      <Text lineHeight="1.6">
        Below is a list of further actions we are taking to accomplish an accessible digital offering:
      </Text>

      <List spacing={3} m="20px" listStyleType="number">
        <ListItem>
          We strive to consider accessibility from the start when developing new products and services, ensuring accessibility is embedded in a sustainable way.
        </ListItem>
        <ListItem>
          We understand that accessibility is an ever-evolving field and we are committed to providing training for our staff to reflect that.
        </ListItem>
        <ListItem>
          We aim to ensure accessibility is considered when procuring third-party services.
        </ListItem>
        <ListItem>
          We view accessibility as an ongoing effort due to the constantly evolving nature of digital accessibility and usability considerations, as well as the changing needs of our customers.
        </ListItem>
      </List>

      <Image
        src={AccessibilityImage}
        alt="A representation of accessibility features"
        mt="10px" mb='60px'
        boxSize={{ base: "100px", md: "120px" }}
        alignSelf="flex-start"
      />
    </VStack>
  );
}
