// TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todoReducer'; // Import your addTodo action

export default function TodoList() {
  const todos = useSelector((state) => state); // Assuming your todos are directly in the state
  const dispatch = useDispatch();

  const handleAddTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <div className="form-container">
        <h2>Add new todo list</h2>
        <TodoForm onAddTodo={handleAddTodo} />
      </div>

      <div className="list-container">
        <h2>Your Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
