import React from 'react'
import {Box, Center, Container, Heading, Image, Stack,Text} from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/4.png";

import { m } from 'framer-motion';

const headingOptions={
  pos:'absolute',
  left:"50%",
  top:"50%",
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
  sixe:'4xl'
}

const Home = () => {
  return<Box>
  <MyCarausel/>
  <Container maxW={'container.xl'} 
  minH={'100vh'} padding={'16'}>
    <Heading textTransform={"uppercase"} 
    py='2' 
    borderBottom={"2px solid"} 
    w={"fit-content"}
    m={"auto"}>
      Services
    </Heading>
    <Stack 
    h={"full"}
    p={'4'}
    alignItems={'center'}
    direction={['column','row']}
    >
      <Image src={img5} h={['40','400']} filter={'hue-rotate(-720deg)'}/>
      <Text letterSpacing={'widest'} lineHeight={'190%'} p={["4","16"]} textAlign={'center'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatem 
      laudantium est aut dolores? Culpa corrupti odit veniam, numquam consequatur 
      voluptate minus libero pariatur vel tempore repellendus expedita provident aut 
      earum eaque. Rem minima eos unde eos tenetur impedit! Repellat non. 

      </Text>
    </Stack>
  </Container>
</Box>
  
}
const MyCarausel=()=>(
    <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>
      <Box w='full' h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w='full' h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
          Gamming is Future
        </Heading>
      </Box>

      <Box w='full' h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Gamming on console
        </Heading>
      </Box>

      <Box w='full' h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Night is Cool
        </Heading>
      </Box>
    </Carousel>
);

export default Home