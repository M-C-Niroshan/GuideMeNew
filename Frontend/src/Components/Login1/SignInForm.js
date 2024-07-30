import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUserContext } from '../pages/UserContext';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUserData } = useUserContext(); 
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3001/api/login', { email, password });

      const userData = response.data;

      // Save user data in context
      setUserData(userData);
      console.log(userData)
      // Navigate to the home page
      navigate('/');

    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.error || 'Login failed' : 'An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <span>or use your email and password</span>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <a href="#">Forget Your Password?</a>
      <button type="submit">Sign In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default SignInForm;
