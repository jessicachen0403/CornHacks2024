import { Flex, useColorModeValue } from '@chakra-ui/react';
import './App.css';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import Leaderboards from './components/Leaderboards';


function LiveSession() {

  const users = [
    { id: 1, name: 'John Doe', points: 150 },
    { id: 2, name: 'Jane Smith', points: 120 },
    // Add more users as needed
  ];

 return (
   <Flex 
    bg='#687dac'
    alignItems='center'
    justifyContent='center'
   >
    <Timer />
    <TodoList />
    <Leaderboards users={users} />
   </Flex>
 );
}
//{useColorModeValue('gray.100', 'gray.700')}


export default LiveSession;