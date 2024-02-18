// GoalTracker.js
import React, { useState, useEffect } from 'react';
import { VStack, Input, Button, UnorderedList, ListItem, Progress, Box, Text, Flex, Spacer, Stack } from '@chakra-ui/react';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [user, setUser] = useState(1); // hardcoded user ID

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, { title: newGoal, done: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (index) => { // Needs to call another endpoint to delete goal
    const updatedGoals = [...goals];
    updatedGoals[index].done = !updatedGoals[index].done;
    setGoals(updatedGoals);
  };

  useEffect(() => {
    // Replace 'your_api_url' with the actual URL of your Django API
    const apiUrl = `http://localhost:8000/user_items/?user=${user}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const extractedGoals = data.map(item => ({
          title: item.title,
          completed: item.completed,
        }));
        console.log(extractedGoals);

        setGoals([...goals, ...extractedGoals]);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [user]);

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
        <Box p={6} maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="auto" bg='white'>
          <Text fontSize="3xl" fontWeight="bold" color='#c8d9d3'>
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
                  {goal.title}
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
