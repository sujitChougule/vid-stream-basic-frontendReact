import React from 'react';
import {Box, Button, Heading, HStack, Input, Stack, VStack,Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16'color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w='full' px='4'>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    Sunscribe to get updates   
                </Heading>
            <HStack borderBottom={'2px solid white'} py='2'>
                <Input placeholder="Enter your Email Here..."
                        border={'none'} 
                        borderRadius={'none'}
                        outline={"none"}
                        focusBorderColor={'none'}
                        />
                <Button
                    p={0}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                >
                    <AiOutlineSend/>
                </Button>
            </HStack>
            </VStack>

            <VStack 
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VIDEO HUB
                </Heading>
                    <Text>All rights received</Text>
                    <Text>@Sujit Chougule</Text>
            
            </VStack>

        <VStack w={'full'}>
           <Heading size={'md'} textTransform={'uppercase'}>
            Social meadia
           </Heading>
           <Button variant={"link"} colorScheme={'purple'}>
                <a href='https://www.instagram.com/sujit_chougule_7'>
                    Instagram
                </a>
           </Button>
           <Button variant={"link"} colorScheme={'purple'}>
                <a href='https://www.github.com/sujitChougule'>
                    GitHub
                </a>
           </Button>
           <Button variant={"link"} colorScheme={'purple'}>
                <a href='https://www.linkedin.com/in/sujit-chougule-259932230/'>
                    LinkedIn
                </a>
           </Button>
        </VStack>
        </Stack>
    </Box>
  )
}

export default Footer