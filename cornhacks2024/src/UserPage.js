import './App.css';
import UserProfile from './components/UserProfile';
//import Leaderboards from './components/Leaderboards';
import GoalsTracker from './components/GoalsTracker';
import StudySessions from './components/StudySession';
import { Flex, Box, VStack } from '@chakra-ui/react';


function UserPage() {
 
 const users = [
    { id: 1, name: 'John Doe', points: 150 },
    { id: 2, name: 'Jane Smith', points: 120 },
    // Add more users as needed
  ];

  const fakeSessionData = [
  {
    id: 1,
    title: 'Math Study Group',
    description: 'Let\'s solve math problems together!',
    host: 'John Doe',
    date: '2024-03-01',
    time: '15:00 - 17:00',
  },
  {
    id: 2,
    title: 'Programming Bootcamp',
    description: 'Coding session covering algorithms and data structures.',
    host: 'Jane Smith',
    date: '2024-03-02',
    time: '18:00 - 20:00',
  },
  {
    id: 3,
    title: 'Language Learning Hangout',
    description: 'Practice speaking a new language with fellow learners.',
    host: 'Alex Johnson',
    date: '2024-03-03',
    time: '14:00 - 16:00',
  },
  // Add more sessions as needed
];
 
  return (
  <>
   <Flex>
      <Box w="50%" ml='20px' mt='20px'>
        <UserProfile />
      </Box>
      <Box w="50%" pl={20} mt='20px'>
        <VStack align="start">
        {/*<Leaderboards users={users} />*/}
        <GoalsTracker />
        </VStack>
      </Box>
      <Box w="50%" pl={10} mt='10px'>
        
        <StudySessions sessions={fakeSessionData} />
      </Box>
    </Flex>
   
  </>
 );
}


export default UserPage;