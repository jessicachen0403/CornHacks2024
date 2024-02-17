import { Flex, useColorModeValue } from '@chakra-ui/react';
import './App.css';
import Timer from './components/Timer';


function LiveSession() {
 return (
   <Flex 
    bg={useColorModeValue('gray.100', 'gray.700')}
    minH='100vh'
    alignItems='center'
    justifyContent='center'
   >
    <Timer />
   </Flex>
 );
}


export default LiveSession;