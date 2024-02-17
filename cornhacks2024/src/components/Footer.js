import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom';

const Footer = () => {
  return (
    <Box bg="#DFD5A5" color="#628395" p={4} position="fixed" bottom="0" left="0" right="0" zIndex="1000" width="100%">
      <Flex justify="space-between" align="center">
        <Text fontSize="md">© 2024 Live Study Buddy</Text>
        <Flex>
          <Link mx={2} href="#">
            Terms of Service
          </Link>
          <Link mx={2} href="#">
            Privacy Policy
          </Link>
          <Link as={ReactRouterLink} to="/about" mx={2}>
            About Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;


//href="/about" target="_blank" rel="noopener noreferrer"