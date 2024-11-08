import { VStack } from '@chakra-ui/react';
import React from 'react';
import FooterTop from './Footer/FooterTop';
import FooterMiddle from './Footer/FooterMiddle';
import FooterBottom from './Footer/FooterBottom';

export default function Footer() {
  return (
    <VStack width="100%" spacing={0}>
      <FooterTop />
      <FooterMiddle/>
      <FooterBottom />
    </VStack>
  );
}
