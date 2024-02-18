import { Flex, useColorModeValue } from '@chakra-ui/react';
import './App.css';
import Timer from './components/Timer';
import TodoList from './components/TodoList';


function LiveSession() {
 return (
   <Flex 
    bg={useColorModeValue('gray.100', 'gray.700')}
    alignItems='center'
    justifyContent='center'
   >
    <Timer />
    <TodoList />
   </Flex>
 );
}


export default LiveSession;