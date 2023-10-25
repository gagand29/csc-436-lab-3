// TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from './todoReducer'; // Adjust the path based on your project structure

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  if (!todo) {
    return null;
  }

  const { id, title, description, author, dateCreated, complete } = todo;

  const handleComplete = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Author: {author}</p>
      <p>Created: {new Date(dateCreated).toLocaleString()}</p>

      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={handleComplete}
        />
        {complete ? 'Completed' : 'Incomplete'}
      </label>
    </li>
  );
}
