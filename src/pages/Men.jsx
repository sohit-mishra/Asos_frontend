import React from 'react';
import { Flex, Box, Image, Button, Text, Heading } from '@chakra-ui/react';
import Banner from '../component/banner';
import TrendingBrand from '../component/TrendingBrand';
import ProductBanner from '../component/ProductBanner';
import productImage1 from '../assets/productImage1.png';
import productImage2 from '../assets/productImage2.png';
import productImage3 from '../assets/productImage3.png';
import productImage4 from '../assets/productImage4.png';
import menMedia1 from '../assets/menmedia1.png';
import menMedia2 from '../assets/menmedia2.png';
import Video from '../assets/video.webm';
import PosterImage from '../assets/posterImage.png';
import bgBanner from '../assets/bgBanner.png';

export default function Men() {
  // Array of product images and associated text for the main product display
  const productImages = [
    {
      img: productImage1,
      text: "Men's Collection",
      heading: "GIFTING IS SERVED",
    },
    {
      img: productImage2,
      text: "What's trending",
      heading: "CARHARTT",
    },
    {
      img: productImage3,
      text: "Fresh heat, incoming",
      heading: "THE LATEST DROPS",
    },
    {
      img: productImage4,
      text: "Your elevated wardrobe",
      heading: "THE PREMIUM EDIT",
    },
  ];

  // Array of images for the two-image section
  const twoImage = [
    {
      img: menMedia1,
      text: "Refresh your rotation",
      heading: "TOPSHOP",
    },
    {
      img: menMedia2,
      text: "We like the cold",
      heading: "COLD-WEATHER ESSENTIALS",
    },
  ];

  return (
    <>
      {/* Main banner section */}
      <Box mb={100} position={"relative"}>
        <Image 
          src={bgBanner} 
          width="100%" 
          height={{ base: '365px', md: "auto" }} 
          objectFit="cover" 
        />
        <Flex
          position={"absolute"}
          justifyContent={"center"}
          alignItems={"center"}
          top={"50%"}
          transform="translateY(-50%)"
          width={"100%"}
          left={0}
          flexDir={"column"}
          padding={{ base: '10px 20px', md: '10px 100px' }}
          textAlign={"center"}
        >
          <Button borderRadius={"30px"} p={"10px 30px"} m={2}>
            APP EXCLUSIVE
          </Button>
          <Heading as="h1" m={2}>
            25% OFF<br />
            1000S OF STYLE HITS
          </Heading>
          <Button m={5} borderRadius={0}>
            DOWNLOAD NOW
          </Button>
          <Text m={5} bg={"#fff"}>
            See website banner for Ts&Cs. Selected marked products excluded from promo.
          </Text>
        </Flex>
      </Box>

      {/* Video section */}
      <Box padding={{ base: '0 20px', md: '0 150px' }}>
        <video
          controls
          autoPlay
          loop
          playsInline
          poster={PosterImage}
          style={{ width: '100%', height: 'auto', padding: '0 10px' }}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </Box>

      {/* Main product display section */}
      <Flex
        justifyContent="space-between"
        padding={{ base: '0 20px', md: '0 100px' }}
        wrap={{ base: 'wrap', md: 'nowrap' }} // Allow wrapping on mobile
        gap={{ base: 4, md: 0 }} // Add gap between items on mobile
      >
        {productImages.map((item, index) => (
          <Flex
            key={index}
            flexDirection="column"
            alignItems="center"
            maxWidth={{ base: '100%', md: '24%' }} // Full width on mobile, specific width on larger screens
            marginBottom={{ base: 4, md: 0 }} // Add margin at the bottom for mobile spacing
          >
            <ProductBanner
              heading={item.heading}
              ProductImage={item.img}
              text={item.text}
              value="false" // Indicates this is a standard product
            />
          </Flex>
        ))}
      </Flex>

      {/* Secondary product display section with two images */}
      <Flex
        justifyContent="space-between" // Space around items evenly
        wrap={{ base: 'wrap', md: 'nowrap' }} // Allow wrapping on mobile
        mb={4}
        padding={{ base: '0 20px', md: '0 100px' }}
      >
        {twoImage.map((item, index) => (
          <Flex
            key={index}
            flexDirection="column"
            alignItems="center"
            maxWidth={{ base: '100%', md: '48%' }} 
            marginBottom={{ base: 4, md: 0 }}  
          >
            <ProductBanner
              heading={item.heading}
              ProductImage={item.img}
              text={item.text}
              value="true" 
            />
          </Flex>
        ))}
      </Flex>

      {/* Additional components for banners and trending brands */}
      <Banner />
      <TrendingBrand />
    </>
  );
}
