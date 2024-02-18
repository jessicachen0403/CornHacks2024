// GoalTracker.js
import React, { useState } from 'react';
import { VStack, Input, Button, UnorderedList, ListItem, Progress, Box, Text, Flex, Spacer, Stack } from '@chakra-ui/react';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [user, setUser] = useState(1); // hardcoded user ID

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, { text: newGoal, done: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].done = !updatedGoals[index].done;
    setGoals(updatedGoals);
  };

  const handleSubmit = async () => {
    try {
      await addGoal();
  
      // Assuming newGoal is a state variable
      const userInput = newGoal.trim();
      
      // Validate if userInput is a non-empty string
      if (!userInput) {
        throw new Error('Invalid input. Please enter a JSON string.');
      }
  
      const jsonData = {
        "user": user,
        "title": newGoal,
        "description": "",
        "completed": false
      };
  
      const response = await fetch('http://127.0.0.1:8000/submit_item/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(`Item submitted successfully: ${JSON.stringify(responseData)}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const calculateProgress = () => {
    const completedGoals = goals.filter((goal) => goal.done).length;
    const totalGoals = goals.length;

    if (totalGoals === 0) {
      return 0; // Ensure the progress bar is visible even when there are no goals
    }

    return (completedGoals / totalGoals) * 100;
  };

  return (
    <div>
      <Stack spacing={8} align="left">
        <Box p={6} maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="auto">
          <Text fontSize="3xl" fontWeight="bold" color="#628395">
            User Goals
          </Text>
          <VStack align="left" spacing={4}>
            <Input
              placeholder="Add a goal"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
            />
            <Button colorScheme="teal" onClick={handleSubmit}>
              Add Goal
            </Button>
            <UnorderedList styleType="none" pl={0}>
              {goals.map((goal, index) => (
                <ListItem key={index}>
                  {goal.text}
                  <Button
                    colorScheme={goal.done ? 'green' : 'red'}
                    size="sm"
                    ml={2}
                    onClick={() => toggleGoal(index)}
                  >
                    {goal.done ? 'Completed' : 'Mark as Completed'}
                  </Button>
                </ListItem>
              ))}
            </UnorderedList>
            <Progress value={calculateProgress()} size="md" colorScheme="teal" hasStripe mt={4} />
          </VStack>
        </Box>
      </Stack>
    </div>
  );
};

export default GoalTracker;
