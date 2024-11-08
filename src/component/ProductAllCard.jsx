import React, { useState } from 'react';
import Clothes from '../assets/clothes.png';
import { FaHeart } from "react-icons/fa";
import { Button, Box, Image, Text, Flex } from "@chakra-ui/react";

export default function ProductAllCard() {
    const [isLiked, setIsLiked] = useState(false);

   
    const toggleHeartColor = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">

            <Box position="relative">
                <Image src={Clothes} alt="Clothes" width={'100%'} />
                <Box
                    position="absolute"
                    bottom="10px"
                    right="10px"
                    bg="#fff"
                    borderRadius="50%"
                    padding="10px"
                    boxShadow="md"
                    onClick={toggleHeartColor} 
                >
                    <FaHeart style={{ color: isLiked ? "red" : "#000", fontSize: "20px" }} />
                </Box>
            </Box>

            <Box>
                <Text mt="2" color="gray.600">
                    JJ Rebel ribbed crew neck jumper in beige
                </Text>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    $450
                </Text>
            </Box>

            <Flex p="1">
                <Button size="xs" mr='4' border={'1px solid grey'} borderRadius={'0'} variant="solid">
                    MORE COLOURS
                </Button>
                <Button size="xs" borderRadius={'0'} color="#fff" bg={'grey'}>
                    Selling fast
                </Button>
            </Flex>
        </Box>
    );
}
