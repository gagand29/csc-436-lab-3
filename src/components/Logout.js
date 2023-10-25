// Logout.js
import React, { useContext } from 'react';
import './Styles.css';
import { UserContext } from './UserContext';

export default function Logout() {
  const { userDispatch } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    // Perform your logout logic...

    // Dispatch the LOGOUT action
    userDispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="login-container">
      <h2>Logout Form:</h2>
      <form className="login-form" onSubmit={handleLogout}>
        <div className="button-container">
          <input type="submit" value="Logout" />
        </div>
      </form>
    </div>
  );
}
