import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Text, useColorModeValue } from '@chakra-ui/react';

function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const backgroundColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      clearInterval(interval);
      setIsActive(false);
      setIsBreak(!isBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  return (
    
    <Center h="100vh">
      <Box 
      textAlign="center"
      bg='#d2e0ee'
      p={4}
      borderRadius="xl"
      boxShadow="md"
      w="100%"
      maxW="500px"
      >
        <Text fontSize="4xl">{isBreak ? 'Break Time' : 'Study Time'}</Text>
        <Text fontSize="6xl" fontWeight="bold">{formatTime(time)}</Text>
        <Box mt={4}>
          {!isActive ? (
            <Button colorScheme="blue" size="lg" onClick={handleStart}>
              Start
            </Button>
          ) : (
            <Button colorScheme="red" size="lg" onClick={handlePause}>
              Pause
            </Button>
          )}
          <Button colorScheme="gray" size="lg" ml={4} onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default Timer;
