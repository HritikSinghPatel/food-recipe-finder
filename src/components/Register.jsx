// Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../Auth/AuthContext';


const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useAuth();

  const handleUserLogin = () => {
    login(user, pass);
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label className="label">
            Username:
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="input-field"
            />
          </label>
          <label className="label">
            Password:
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="input-field"
            />
          </label>
          <label className="label">
            Confirm Password:
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="input-field"
            />
          </label>
          <button type="button" onClick={handleUserLogin} className="button">
            Login
          </button>
        </form>
        <p>
        Already have an account? <Link to="/login">  Log In</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
