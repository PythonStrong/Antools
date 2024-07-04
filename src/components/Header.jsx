import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { hero, logo } from '../assets'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  return (
    <Box>
      {/* navbar  */}
      <Box display='flex' alignItems='center' justifyContent='space-between' pt='30px'>
        <Image src={logo} />
        <Box display='flex' alignItems='center' gap='30px'>
          <Text fontSize='20px' cursor='pointer'>Home</Text>
          <Text fontSize='20px' cursor='pointer' display='flex' alignItems='center'>Categories <RiArrowDropDownLine size='35' /></Text>
          <Text fontSize='20px' cursor='pointer'>My Collections</Text>
          <Text fontSize='20px' cursor='pointer'>Blog</Text>
        </Box>
        <Box display='flex' alignItems='center' gap='30px'>
          <Text fontSize='20px' cursor='pointer'>Login</Text>
          <Button bg='#FF6E30' color='white' _hover='none'>Sign up</Button>
        </Box>
      </Box>

      {/* mobile navbar  */}
      <Box>

      </Box>

      {/* hero  */}
      <Box display='flex' alignItems='start' justifyContent='space-between' mt={{ xl: '130px', md: '120px', base: '80px' }} flexDir={{ xl: 'row', md: 'row', base: 'column' }}>
        <Box display='flex' alignItems='start' flexDir='column' gap='40px'>
          <Text fontSize={{ xl: '70px', md: '50px', base: '30px' }} fontWeight='600'>Awesome tools for Designer & Developer.</Text>
          <Text color='gray' fontSize='20px'>Antool is a web collection of information on paid or free Design and Development tools</Text>
          <Box width={{ md: '497px', base: '100%' }} display='flex' alignItems='center' border='1px solid gray' padding='15px' borderRadius='20px' bg='#283036'>
            <Input placeholder='find more than 430+ tools...' border='none' />
            <Button _hover='none' bg='#FF6E30' color='white' width='138px' height='48px'>Search</Button>
          </Box>
        </Box>
        <Image src={hero} display={{ xl: 'block', md: 'none', base: 'none' }} w='50%'/>
      </Box>
    </Box>
  )
}
