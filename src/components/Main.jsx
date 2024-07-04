import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { brand, item, item2, main, testimonial } from '../assets'

export default function Main() {
    return (
        <Box>
            {/* hero bottom  */}
            <Box display='flex' flexDir='column' alignItems='center' mt={{ xl: '130px', md: '120px', base: '120px' }}>
                <Text fontSize={{ xl: '70px', md: '50px', base: '30px' }} fontWeight='600'>Most Popular Tools</Text>
                <Text color='gray' fontSize='20px'>Tools for the best Designers and Developers most popularly used in the world</Text>
                <Box mt={{ md: '120px', base: '60px' }} display='flex' flexDir='column' gap={{ md: '60px', base: '30px' }}>
                    <Image src={item} />
                    <Image src={item2} />
                </Box>
                <Button color='#FF6E30' border='1px solid #FF6E30' bg='transparent' _hover='none' width='138px' height='48px'>Load More</Button>
            </Box>

            {/* hero bottom img  */}
            <Box display='flex' justifyContent='center' alignItems='center' mt={{ xl: '130px', md: '120px', base: '120px' }}>
                <Image src={brand} />
            </Box>

            {/* img bottom  */}
            <Box display='flex' gap={{ md: '110px', base: '10px' }} justifyContent='center' mt={{ xl: '130px', md: '120px', base: '120px' }} flexDir={{ xl: 'row', md: 'column', base: 'column' }}>
                <Box display='flex' flexDir='column' gap='20px'>
                    <Text fontSize={{ xl: '70px', md: '50px', base: '30px' }} fontWeight='600'>Newcomer Tools</Text>
                    <Text color='gray' fontSize='20px' width={{ md: '400px', base: '100%' }}>Wow! see the latest update of the most recommended tools from reliable designers and developers</Text>
                    <Button _hover='none' bg='#FF6E30' color='white' width='138px' height='48px'>Explore more</Button>
                </Box>
                <Image src={main} />
            </Box>

            {/* footer top img  */}
            <Box display='flex' alignItems='center' justifyContent='center' mt={{ xl: '130px', md: '120px', base: '120px' }}> 
                <Image src={testimonial} />
            </Box>
        </Box>
    )
}
