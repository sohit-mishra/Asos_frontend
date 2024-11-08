import React from 'react'
import Logo from '../../assets/logo.svg'
import { Flex, Heading, Image, Box } from '@chakra-ui/react';

export default function Header() {
    return (
        <>
            <Flex alignItems={'center'} width={'100%'} justifyContent={'flex-start'} m={3} display={{base:'none', md:'flex'}}>
                <Box width={'50%'}><Image src={Logo} /></Box>
                <Box width={'50%'}><Heading fontSize={'3xl'}>My Account</Heading></Box>
            </Flex>
        </>
    )
}
