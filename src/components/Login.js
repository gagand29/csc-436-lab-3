// Import React, useState, and useContext
import React, { useState, useContext } from 'react';
// Import UserContext to access global user state
import { UserContext } from './UserContext';

// Import the component's stylesheet
import './Styles.css';

// Functional component Login
const Login = ({ onRegisterClick, onLogin }) => {
  // Use the useContext hook to access userState and userDispatch from UserContext
  const { userDispatch } = useContext(UserContext);

  // Use the useState hook to manage form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Dispatch an action to update global user state
    userDispatch({ type: 'LOGIN', payload: { username } });

    // Call the onLogin callback with the entered username
    onLogin(username);
  };

  // JSX structure for the Login component
  return (
    <div className="login-container">
      {/* Login form */}
      <form className="login-form" onSubmit={handleLoginSubmit}>
        {/* Username input */}
        <label htmlFor="login-username">Username:</label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password input */}
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button container with Login and Register buttons */}
        <div className="button-container">
          <input type="submit" value="Login" />
          <button type="button" onClick={onRegisterClick}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the Login component
export default Login;
