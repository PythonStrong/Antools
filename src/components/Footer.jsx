import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { logo } from '../assets'

export default function Footer() {
    return (
        <Box>
            {/* <Box mt={{ xl: '130px', md: '120px', base: '120px' }} display='flex' alignItems='center' flexDir='column' gap='10px'>
                <Text fontWeight='600' fontSize='48px'>Become a contributor?</Text>
                <Text fontSize='18px' color='gray'>Join us and get tips & tricks to become a great Designer and Developer</Text>
                <Box width={{ md: '497px', base: '100%' }} display='flex' alignItems='center' border='1px solid gray' mt={{ md: '60px', base: '50px' }} padding='15px' borderRadius='20px' bg='#283036'>
                    <Input placeholder='Enter your email...' border='none' />
                    <Button _hover='none' bg='#FF6E30' color='white' width='138px' height='48px'>Join Us</Button>
                </Box>
            </Box> */}


            {/* footer  */}
            <Box bg='#283036' display='flex' mt={{ md: '120px', base: '120px' }} alignItems={{ md: 'start', base: 'center' }} flexDir={{ md: 'row', base: 'column' }} pt='60px' textAlign={{ md: 'start', base: 'center' }} justifyContent={{ md: 'space-around', base: 'center' }} height={{ md: '27vh', base: '100%' }}>
                {/* 1 */}
                <Box display='flex' flexDir='column' gap='16px' alignItems={{ md: 'start', base: 'center' }}>
                    <Image src={logo} />
                    <Text>Copyright 2021. Antools</Text>
                    <Text width={{ md: '400px', base: '100%' }}>Antool is a web collection of information on paid or free Design and Development tools</Text>
                </Box>
                {/* 2 */}
                <Box display='flex' flexDir='column' gap='16px' alignItems={{ md: 'start', base: 'center' }}>
                    <Text fontSize='20px' fontWeight='600'>Contact Us</Text>
                    <Text>+621987463</Text>
                    <Text>M Building, No.10 A</Text>
                    <Text>antools@awesome.com</Text>
                </Box>
                {/* 3 */}
                <Box display='flex' flexDir='column' gap='16px' alignItems={{ md: 'start', base: 'center' }}>
                    <Text fontSize='20px' fontWeight='600'>Categories</Text>
                    <Text>Design</Text>
                    <Text>Development</Text>
                </Box>
                {/* 4 */}
                <Box display='flex' flexDir='column' gap='16px' alignItems={{ md: 'start', base: 'center' }}>
                    <Text fontSize='20px' fontWeight='600'>Company Info</Text>
                    <Text>About Us</Text>
                    <Text>Our Partners</Text>
                    <Text>Blog</Text>
                </Box>
            </Box>
        </Box>
    )
}
