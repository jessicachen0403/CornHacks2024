// UserProfile.js
import React from 'react';
import { Box, Avatar, Text, VStack, HStack, Badge, Divider } from '@chakra-ui/react';

const UserProfile = () => {
  return (
    <Box p={6} maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="auto" >
    <Box
        bgGradient='linear(to-r, #c8d9d3, #84a29f)'
        h="50%"
        borderRadius="lg"
        p={6}
      >
      <HStack spacing={8} align="center">
        <Avatar size="2xl" name="John Doe" src="https://bit.ly/broken-link" />
        <VStack align="start">
          <Text fontSize="3xl" fontWeight="bold" color="#628395">John Doe</Text>
          <Badge colorScheme="yellow">Student</Badge>
          <Text fontSize="md" color="#628395"><strong>About Me:</strong> </Text>
        </VStack>
      </HStack>
      </Box>

      <Divider my={6} borderColor="#628395" />

      <VStack align="start">
        <Text fontSize="lg" color="#628395"><strong>School: </strong>Example University</Text>
        <Text fontSize="lg" color="#628395"><strong>Major: </strong>Computer Science</Text>
        <Text fontSize="lg" color="#628395"><strong>Year of Study: </strong>3rd Year</Text>
        <Text fontSize="lg" color="#628395"><strong>Email: </strong>john.doe@example.com</Text>
      </VStack>
    </Box>
  );
};

export default UserProfile;
