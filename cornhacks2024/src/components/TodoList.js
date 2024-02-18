// TodoList.js
import React, { useState } from 'react';
import { Box, Input, Button, VStack, Text, Checkbox, Stack } from '@chakra-ui/react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  return (
    <Box p={4}>
      <VStack align="start" spacing={4}>
        <Input
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button colorScheme="teal" onClick={addTodo}>
          Add Todo
        </Button>
        <Stack align="start" spacing={2}>
          {todos.map((todo, index) => (
            <Box key={index}>
              <Checkbox isChecked={todo.done} onChange={() => toggleTodo(index)}>
                <Text textDecoration={todo.done ? 'line-through' : 'none'}>
                  {todo.text}
                </Text>
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

export default TodoList;
