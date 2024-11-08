import React from 'react';
import { Flex, Image, Text, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
import VisaCard from '../../assets/visacard.png';
import MasterCard from '../../assets/mastercard.png';
import Paypal from '../../assets/paypal.png';
import American from '../../assets/american.png';
import Visa from '../../assets/visa.png';

export default function FooterTop() {
    return (
        <Flex justifyContent="center" alignItems="center" paddingY={4}>
            <Icon as={FaFacebook} boxSize={6} mr="30px" bgColor="#3d5b97" color="#fff" padding="2px" borderRadius="50%" />
            <Icon as={FaInstagram} boxSize={6} mr="30px" bgColor="#7f32b4" color="#fff" padding="2px" borderRadius="50%" />
            <Icon as={FaSnapchatGhost} boxSize={6} mr="30px" bgColor="#fff800" color="#fff" padding="2px" borderRadius="50%" />
            <Text>|</Text>


            <Image
                src={VisaCard}
                alt="Visa Card"
                width="25px"
                height="25px"
                ml="30px"
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                aria-label="Visa Card"
            />
            <Image
                src={MasterCard}
                alt="MasterCard"
                width="25px"
                height="25px"
                ml="30px"
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                aria-label="MasterCard"
            />
            <Image
                src={Paypal}
                alt="PayPal"
                width="25px"
                height="25px"
                ml="30px"
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                aria-label="PayPal"
            />
            <Image
                src={American}
                alt="American Express"
                width="25px"
                height="25px"
                ml="30px"
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                aria-label="American Express"
            />
            <Image
                src={Visa}
                alt="Visa"
                width="25px"
                height="25px"
                ml="30px"
                _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}
                aria-label="Visa"
            />
        </Flex>
    );
}
