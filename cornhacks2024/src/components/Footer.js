import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#DFD5A5" color="#628395" p={4} position="fixed" bottom="0" left="0" right="0" zIndex="1000" width="100%">
      <Flex justify="space-between" align="center">
        <Text fontSize="md">© 2024 Live Study Buddy</Text>
        <Flex>
          <Link mx={2} href="#" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </Link>
          <Link mx={2} href="#" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          <Link mx={2} href="/about" target="_blank" rel="noopener noreferrer">
            About Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
