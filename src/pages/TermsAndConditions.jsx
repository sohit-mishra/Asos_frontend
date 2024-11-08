import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Heading,
  Text
} from "@chakra-ui/react";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | ASOS';
  }, []);

  return (
    <>
      <VStack
        width={{ base: "90%", sm: "80%", md: "800px" }}
        margin="60px auto"
        spacing={6}
        alignItems="flex-start"
        textAlign="left"
      >
        <Heading as="h1">Terms & Conditions</Heading>

        <Accordion
          defaultIndex={[1]}
          allowMultiple
          w={"100%"}
        >

          <AccordionItem>
            <Heading as='h2'>
              <AccordionButton fontWeight={'bold'} fontSize={'22px'} padding='10px 0'>
                <Box flex="1" textAlign="left">Delivery</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text py="4">Before you finalise your order, you’ll be given various delivery options to choose from with estimated delivery time and dates depending on the delivery address.</Text>
              <Text py="4">All delivery services we offer for all ASOS items will also be available for items sold by an ASOS Brand Partner and shipped by ASOS.</Text>
              <Text py="4">To see more about how delivery works with ASOS Brand Partners, just click here.</Text>
              <Text py="4">We work our ASOS socks off to try to meet all delivery times but sometimes there may be delays – e.g. because of postal/carrier delays, logistics or bad weather. We will keep you updated as much as we can and you should be able to track your parcel’s progress.</Text>
              <Text py="4">ASOS cannot be held liable for any parcels that are lost or stolen as a result of any specific delivery instructions left for the carrier.</Text>
              <Text py="4">Please check out our Delivery and Returns Page for more info. Any problems with your delivery? Please let us know within 30 days of the date which your order should have been delivered and we’ll do our best to help you.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading as='h2'>
              <AccordionButton fontWeight={'bold'} fontSize={'22px'} padding='10px 0'>
                <Box flex="1" textAlign="left">Your information</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text py="4">Our Privacy Policy sets out how we and ASOS Payments use your information. If your details change, remember that you need to update My Account so we can continue giving you our best service (you can also update your marketing preferences there).</Text>
              <Text py="4">At ASOS, we love being able to interact with and chat to you through social media. However, we can’t control those social media platforms or how you set your profiles on them. Please check and set your privacy settings so that you understand and are comfortable with how your personal information on those platforms will be used.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading as='h2'>
              <AccordionButton fontWeight={'bold'} fontSize={'22px'} padding='10px 0'>
                <Box flex="1" textAlign="left">Things you shouldn’t do…</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text py="4">We know it’s obvious, but you must not misuse or tamper with our websites or ASOS Payments’ websites, apps or other services (“Websites”) (e.g. hack, introduce viruses, trojans, worms, logic bombs or other technologically harmful material or carry out denial of service attacks etc) or otherwise mess with our or ASOS Payments tech or functionality or steal our customers’ data or ASOS Payments customers’ data. Doing any of these things may be a criminal offence, but they also get in the way of us giving our loyal ASOS customers the best service, so we take them really seriously. ASOS or ASOS Payments will report any such breach or activity (and all information about the people carrying it out) to the relevant law enforcement authorities.</Text>
              <Text py="4">We recommend you use virus protection software when using any website, including ours. Although we have a dedicated team who work hard to stop people messing with our Website, we can’t guarantee that it will always be secure from bugs, viruses or trouble-makers.</Text>
              <Text py="4">Oh, and you’re not allowed to use automated systems or software to extract data from our Website (AKA 'screen scraping').</Text>
              <Text py="4">Troublemakers take note: you agree to indemnify, defend and hold harmless ASOS, its directors, officers, employees, consultants, agents, and affiliates, from any and all third-party claims, liability, damages and/or costs (including, but not limited to, legal fees) arising from your use (or misuse) of this Website or your breach of the Terms and Conditions.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading as='h2'>
              <AccordionButton fontWeight={'bold'} fontSize={'22px'} padding='10px 0'>
                <Box flex="1" textAlign="left">Intellectual property, software and content</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel>
              <Text py="4">ASOS and ASOS Payments own or has permission to use the intellectual property rights in its Website and its content. These rights are protected around the world. All such rights are reserved.</Text>
              <Text py="4">You’re allowed to store, print and display our Website content only for your own personal use. You are not allowed to use any part of the Website for commercial purposes unless you have our express permission.</Text>
              <Text py="4">You’re also not allowed to use the ASOS logo or any ASOS brand or trade mark (or any marks which are colourably similar) without our express permission.</Text>
              <Text py="4">By submitting a product review or rating to ASOS you agree to comply with the Bazaarvoice terms of use which can be viewed when submitting a rating via the Bazaarvoice platform. For more information on these terms of use please contact privacy@bazaarvoice.com.</Text>
              <Text py="4">We carry out automated checks and spot checks to ensure that only genuine customers post reviews. If we believe that any review is spam or violates our guidelines, we may remove the review.</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading as='h2'>
              <AccordionButton fontWeight={'bold'} fontSize={'22px'} padding='10px 0'>
                <Box flex="1" textAlign="left">Linking to this Website</Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text py="4">It’s fine for you to link to asos.com, as long as you do so in a way that is not-commercial, is fair and legal, and doesn’t damage or take advantage of our reputation.</Text>
              <Text py="4">Please don’t link in a way that suggests any form of approval or endorsement by ASOS where none exists.</Text>
              <Text py="4">Our Website must not be framed on any other site without our permission.</Text>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </VStack>
    </>
  );
}
