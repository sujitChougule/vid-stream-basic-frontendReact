import { Heading, Stack, VStack,Text, Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Videos = () => {
  const videosArr=['https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1610-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
  'https://cdn.videvo.net/videvo_files/video/premium/video0320/large_watermarked/615_615-0013_preview.mp4',
  'https://cdn.videvo.net/videvo_files/video/premium/video0320/large_watermarked/615_615-0013_preview.mp4',
  'https://joy.videvo.net/videvo_files/video/free/2016-09/large_watermarked/160820_125_NYC_OutOfFocusCarLights5_1080p_preview.mp4',
  'https://joy.videvo.net/videvo_files/video/free/2016-12/large_watermarked/Typing_dark_03_Videvo_preview.mp4',
  'https://joy.videvo.net/videvo_files/video/free/2015-10/large_watermarked/Hacker_glasses_03_Videvo_preview.mp4',
'https://joy.videvo.net/videvo_files/video/free/2017-06/large_watermarked/170209C_018_SLTrain5_1080p_preview.mp4',
'https://joy.videvo.net/videvo_files/video/free/2016-05/large_watermarked/524013672_preview.mp4',
'https://joy.videvo.net/videvo_files/video/premium/partners0351/large_watermarked/BB_23fab3d5-8bf7-4caa-8825-40a3fcfd4092_preview.mp4',
'https://joy.videvo.net/videvo_files/video/premium/partners0001/large_watermarked/BB_964d8797-c69d-4670-b0d9-ced924547bcd_preview.mp4',
]
  const[videoSrc,setVideoSrc]= useState(videosArr[0])
  return (
  <Stack direction={['column','row']} h={'100vh'}>
    <VStack w={'full'}>
      <video
          controls
          controlsList='nodownload'
          src={videoSrc}
          style={{
            width:'100%',
          }}
      ></video>
      <VStack alignItems={'flex-start'} padding={'8'} overflowY={'auto'}>
        <Heading>Sample Video 1</Heading>
        <Text>This is a sample video for testing and demo here will any description </Text>
      </VStack>
  </VStack>
  <VStack w={['full','xl']} 
  alignItems={'stretch'} 

  padding={'1'} 
  spacing={'8'} 
  overflow={'auto'}>
    {videosArr.map((item,index)=>(
              <Button variant={"ghost"}
              colorScheme={'purple'} 
              onClick={()=>setVideoSrc(item)}
              >
                Video {index+1}
              </Button>
    ))}
  </VStack>
  </Stack>
)}

export default Videos