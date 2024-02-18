import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="#f2e3d2" color="#628395" p={4} top="0" left="0" right="0" zIndex="1000" width="100%">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl">Live Study Buddy</Text>
        <Flex>
          <Link fontSize="xl" as={ReactRouterLink} to="/" mx={2}>
            Home
          </Link>
          <Link fontSize="xl" as={ReactRouterLink} to="/about" mx={2}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
 
export default Navbar;