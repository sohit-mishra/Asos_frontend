import React from 'react';
import { VStack, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';
import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import About3 from '../assets/About3.png';

export default function About() {
  return (
    <VStack mt={10} spacing={8} align="center">
      <Heading as="h1" fontSize="5xl">
        About ASOS.
      </Heading>
      <Text textAlign="center">
        Everything you wanted to know about your fave fashion brand. And then some.
      </Text>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
        justify="center"
        align="flex-start"
        alignContent={'center'}
        width="100%"
        maxW="1200px"
        mb={10}
      >
        <Flex
          direction="column"
          align="center"
          m={4}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          width={{ base: '90%', sm: '360px' }}
          p={4}
        >
          <Image src={About1} width="100%" borderRadius="md" objectFit="cover" />
          <Heading as="h2" size="lg" mt={4}>
            Who we are
          </Heading>
          <Text textAlign="center">Your biggest fans, that's who.</Text>
          <Button mt={4} border={"1px solid Black"} borderRadius={'0'}>READ THE ASOS 101</Button>
        </Flex>

        <Flex
          direction="column"
          align="center"
          m={4}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          width={{ base: '90%', sm: '360px' }}
          p={4}
        >
          <Image src={About2} width="100%" borderRadius="md" objectFit="cover" />
          <Heading as="h2" size="lg" mt={4}>
            The ASOS Brands
          </Heading>
          <Text textAlign="center">Made by us, loved by you.</Text>
          <Button mt={4} border={"1px solid Black"} borderRadius={'0'}>RIGHT THIS WAY</Button>
        </Flex>

        <Flex
          direction="column"
          align="center"
          m={4}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          width={{ base: '90%', sm: '360px' }}
          p={4}
        >
          <Image src={About3} width="100%" borderRadius="md" objectFit="cover" />
          <Heading as="h2" size="lg" mt={4}>
            The ASOS experience
          </Heading>
          <Text textAlign="center">Cos there's so much more to us.</Text>
          <Button mt={4} border={"1px solid Black"} borderRadius={'0'}>DISCOVER IT NOW</Button>
        </Flex>
      </Flex>
    </VStack>
  );
}
