import './App.css';
import UserProfile from './components/UserProfile';
import Leaderboards from './components/Leaderboards';
import { Flex, Box, VStack } from '@chakra-ui/react';


function UserPage() {
 
 const users = [
    { id: 1, name: 'John Doe', points: 150 },
    { id: 2, name: 'Jane Smith', points: 120 },
    // Add more users as needed
  ];
 
  return (
  <>
   <Flex>
      <Box w="50%">
        <UserProfile />
      </Box>
      <Box w="50%" pl={10}>
        <VStack align="start">
        <Leaderboards users={users} />
        </VStack>
      </Box>
    </Flex>
   
  </>
 );
}


export default UserPage;