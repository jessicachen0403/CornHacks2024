// GoalTracker.js
import React, { useState } from 'react';
import { VStack, Input, Button, UnorderedList, ListItem, Progress, Box, Text, Flex, Spacer, Stack } from '@chakra-ui/react';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

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
            <Button colorScheme="teal" onClick={addGoal}>
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
