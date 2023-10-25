// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/store';
import { TodoProvider } from './components/TodoContext';
import { UserProvider } from './components/UserContext';
import './components/Styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <UserProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </UserProvider>
  </Provider>
);
