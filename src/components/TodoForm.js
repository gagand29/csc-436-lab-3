// TodoForm.js
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import TodoFormFields from './TodoFormFields';
import TodoFormButtons from './TodoFormButtons';

export default function TodoForm({ onAddTodo }) {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({ title: '', description: '', author: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.title.trim()) {
      const newTodoWithTimestamp = {
        ...newTodo,
        id: uuidv4(),
        dateCreated: Date.now(),
        complete: false,
        dateCompleted: null,
      };

      console.log('New todo with timestamp:', newTodoWithTimestamp);

      // Dispatch the CREATE_TODO action
      dispatch({
        type: 'CREATE_TODO',
        payload: newTodoWithTimestamp,
      });

      // Call the onAddTodo function if provided
      if (onAddTodo) {
        onAddTodo(newTodoWithTimestamp);
      }

      setNewTodo({ title: '', description: '', author: '' });
    }
  };

  useEffect(() => {
    console.log('Form state after reset:', newTodo);
  }, [newTodo]);

  return (
    <div>
      <form
        key="todo-form"
        id="todo-form"
        className="login-form"
        onSubmit={handleSubmit}
      >
        <TodoFormFields onInputChange={handleInputChange} newTodo={newTodo} />
        <TodoFormButtons />
      </form>
    </div>
  );
}
