import React from 'react';
import {
  Heading,
  Text,
  VStack,
  Box,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';

export default function PrivacyPolicy() {
  document.title = 'Privacy & Cookies | ASOS';

  return (
    <VStack
      width={{ base: '90%', sm: '80%', md: '800px' }}
      margin="60px auto"
      spacing={6}
    >
      <Heading
        as="h1"
        fontSize={{ base: '4xl', md: '6xl' }}
        textAlign="center"
      >
        Privacy & Cookies: Our promises
      </Heading>
      <Text
        as="p"
        textAlign="center"
        fontSize={{ base: 'md', md: 'lg' }}
        paddingX={{ base: '5%', md: '0' }}
      >
        We’ll always keep your data safe and secure. So you’re clued up, here’s
        why we need it and how we use it.
      </Text>

      <Box textAlign="center" width="100%" height={{ base: "300px", md: "560px" }} overflow="hidden">
      <ReactPlayer
        className="player"
        url="https://www.asos-video.com/video/upload/v1725449437/_navigation__content_consent_privacy_message_uk_female_withmusic_v10_mp4_564_720_1200k_25fps_gmmbxm.mp4"
        playing={false}
        loop={true}
        width="100%"
        height="100%"
        controls={true}
      />
    </Box>

      {[
        { title: '1. Only the good Stuff', text: 'We will only use your data to improve your ASOS experience and ASOS services.' },
        { title: '2. Locked Down', text: 'We’ll protect and secure your data.' },
        { title: '3. Straight Talking', text: 'We’ll always talk your language and be open – no nonsense, no surprises.' },
        { title: '4. You\'re in control', text: 'You decide if you want to hear from us and how you hear from us.' },
        { title: '5. Just the Essentials', text: 'Your info won’t just hang about – if we don’t need it, we’ll delete it.' },
      ].map(({ title, text }) => (
        <Box
          key={title}
          width={{ base: '100%', md: '740px' }}
          textAlign="justify"
        >
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
            {title}
          </Heading>
          <Text textAlign="center" fontSize={{ base: 'sm', md: 'md' }}>
            {text}
          </Text>
        </Box>
      ))}

      <Box width={{ base: '100%', md: '740px' }} textAlign="justify">
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} p="10px 0">
          Protecting Your Privacy
        </Heading>
        <Text p="10px 0">
          At ASOS, we are committed to protecting your privacy and security. We
          are customers ourselves of ASOS, so we totally appreciate and respect
          how important privacy is.
        </Text>
        <Text p="10px 0">
          For all ASOS services, the data controller — the company that’s
          responsible for protecting your privacy — is ASOS.com Limited.
        </Text>

        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} p="10px 0">
          Full Privacy Policy
        </Heading>
        <List spacing={3} styleType="disc" m="0 20px">
          {[
            'How we use your information',
            'Sharing your information',
            'Marketing messages',
            'July 2023 marketing preference changes',
            'Seeing adverts for ASOS.com online',
            'Your information and countries outside Europe',
            'Keeping your information',
            'Your rights',
            'Changes to how we protect your privacy',
            'Cookies',
            'Contact us',
          ].map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Box>

      <Box width="100%" m="40px 0">
        <Accordion allowMultiple>
          {[
            {
              title: 'Your information and countries outside Europe',
              content:
                'ASOS is a global business with operations inside and outside of the United Kingdom and we use suppliers and fulfilment centres located across the world. Some of these locations will not offer the same level of protection for your personal data as the UK or the EU, but if we transfer your information to one of these locations we will take steps to ensure that your data and rights are protected through methods approved within the relevant Data Protection laws. Please contact us if you would like further information about how we protect your transferred information.',
            },
            {
              title: 'Keeping your information',
              content:
                'If you no longer wish to be a customer you can contact our Customer Care team and request that we close your account. However, we have a legal requirement to keep some of your personal data even after you have asked us to delete it. We will only keep what we absolutely need to, and only to make sure we can meet our legal or regulatory requirements, resolve disputes, prevent fraud and abuse, or enforce our Terms & Conditions.',
            },
            {
              title: 'Changes to how we Protect Your Privacy',
              content:
                'We may change this page from time to time, to reflect how we are processing your data. If we make significant changes, we will make that clear on the ASOS website or other ASOS services, or by some other means of contact such as email, so that you are able to review the changes before you continue to use ASOS.',
            },
            {
              title: 'Cookies',
              content:
                'We use cookies on our website. For more information on cookies, please see our cookie notice.',
            },
          ].map(({ title, content }) => (
            <AccordionItem key={title}>
              <AccordionButton fontWeight="bold" fontSize={{ base: 'lg', md: '22px' }} padding="10px 0">
                <Box flex="1" textAlign="left">
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text py="4">{content}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </VStack>
  );
}
