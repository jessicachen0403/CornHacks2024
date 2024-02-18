// StudySessions.js
import React from 'react';
import { VStack, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const StudySessions = ({ sessions }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" width="400px">
      <VStack align="left" spacing={4}>
        {sessions.map((session, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" width="100%">
            <Text fontSize="xl" fontWeight="bold">{session.title}</Text>
            <Text fontSize="md">{session.description}</Text>
            <Text fontSize="sm">Hosted by: {session.host}</Text>
            <Text fontSize="sm">Date: {session.date}</Text>
            <Text fontSize="sm">Time: {session.time}</Text>
            <Link to={`/live/${session.id}`}>
              <Button colorScheme="teal">Join Session</Button>
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default StudySessions;
