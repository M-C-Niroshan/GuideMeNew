import React, { useState } from 'react';
import Axios from 'axios';
import { useUserContext } from '../pages/UserContext'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Context provides `updateUser` function to set user data
  const { updateUser } = useUserContext(); 
  
  // Hook for programmatic navigation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the login request to the API
      const response = await Axios.post('http://localhost:3001/api/api/login', { email, password });

      // Set user data using context
      updateUser(response.data);

      // Determine navigation based on ID type
      const { renterId, guiderId, travelerId } = response.data;

      if (renterId) {
        navigate('/16');
      } else if (guiderId) {
        navigate('/17');
      } else if (travelerId) {
        navigate('/8');
      } else {
        console.error('Unknown user type');
      }

    } catch (error) {
      // Handle errors (e.g., invalid credentials or server issues)
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
