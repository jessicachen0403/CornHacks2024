// Leaderboard.js
import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, VStack, } from '@chakra-ui/react';

const Leaderboard = ({ users }) => {
  // Assuming users is an array of objects with properties like id, name, points, etc.
  
  // Sort users based on points in descending order
  const sortedUsers = users.sort((a, b) => b.points - a.points);

  return (
    <Box className="leaderboard" p={6} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" bg='#f2e3d2'>
      <Heading as="h2" size="md" mb={4}>Study Leaderboard</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th>Points</Th>
            <Th>Goals</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedUsers.map((user, index) => (
            <Tr key={user.id}>
              <Td>{index + 1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.points}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leaderboard;
