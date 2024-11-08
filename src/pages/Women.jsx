import React from 'react';
import { Flex, Box, Image, Button, Text, Heading } from '@chakra-ui/react';
import Banner from '../component/banner';
import TrendingBrand from '../component/TrendingBrand';
import ProductBanner from '../component/ProductBanner';
import productImage1 from '../assets/womenMedia1.png';
import productImage2 from '../assets/womenMedia2.png';
import productImage3 from '../assets/womenMedia3.png';
import productImage4 from '../assets/womenMedia4.png';
import womenBanner1 from '../assets/womenBanner1.png';
import womenBanner2 from '../assets/womenBanner2.png';
import Video from '../assets/Women.mp4';
import PosterImage from '../assets/posterImage.png';
import bgBanner from '../assets/bgBanner.png';

export default function Women() {
  const productImages = [
    { img: productImage1, text: "GIFTING IS SERVED", heading: "Such good taste" },
    { img: productImage2, text: "Bigger and better than ever", heading: "FACE + BODY ADVENT CALENDAR" },
    { img: productImage3, text: "Fresh heat, incoming", heading: "THE LATEST DROPS" },
    { img: productImage4, text: "Dancefloor-ready styles", heading: "PARTY-SEASON 'FITS" },
  ];

  const twoImage = [
    { img: womenBanner1, text: "TOPMAN", heading: "Refresh your rotation" },
    { img: womenBanner2, text: "COLD-WEATHER ESSENTIALS", heading: "We like the cold" },
  ];

  return (
    <>
      <Box mb={100} position="relative">
        <Image 
          src={bgBanner} 
          width="100%" 
          height={{ base: '365px', md: "auto" }} 
          objectFit="cover" 
          alt="Background Banner"
        />
        <Flex
          position="absolute"
          justifyContent="center"
          alignItems="center"
          top="50%"
          transform="translateY(-50%)"
          width="100%"
          left={0}
          flexDir="column"
          padding={{ base: '10px 20px', md: '10px 100px' }}
          textAlign="center"
        >
          <Button borderRadius="30px" p="10px 30px" m={2}>APP EXCLUSIVE</Button>
          <Heading as="h1" m={2}>25% OFF<br />1000S OF STYLE HITS</Heading>
          <Button m={5} borderRadius={0}>DOWNLOAD NOW</Button>
          <Text m={5} bg="#fff">See website banner for Ts&Cs. Selected marked products excluded from promo.</Text>
        </Flex>
      </Box>

      <Box padding={{ base: '0 20px', md: '0 150px' }}>
        <video 
          controls 
          autoPlay 
          loop 
          playsInline 
          poster={PosterImage} 
          style={{ width: '100%', height: 'auto', padding: '0 10px' }}
          onError={(e) => console.error("Video load error", e)}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Flex justifyContent="space-between" padding={{ base: '0 20px', md: '0 100px' }} wrap="wrap" gap={4}>
        {productImages.map((item, index) => (
          <Flex key={index} flexDirection="column" alignItems="center" maxWidth={{ base: '100%', md: '24%' }} marginBottom={4}>
            <ProductBanner heading={item.heading} ProductImage={item.img} text={item.text} value="false" />
          </Flex>
        ))}
      </Flex>

      <Flex justifyContent="space-between" wrap="wrap" mb={4} padding={{ base: '0 20px', md: '0 100px' }}>
        {twoImage.map((item, index) => (
          <Flex key={index} flexDirection="column" alignItems="center" maxWidth={{ base: '100%', md: '48%' }} marginBottom={4}>
            <ProductBanner heading={item.heading} ProductImage={item.img} text={item.text} value="true" />
          </Flex>
        ))}
      </Flex>

      <Banner />
      <TrendingBrand />
    </>
  );
}
