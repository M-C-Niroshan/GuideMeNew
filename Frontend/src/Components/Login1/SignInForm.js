import React, { useState } from 'react';
import Axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the login request to the API
      const response = await Axios.post('http://localhost:3001/api/api/login', { email, password });

      // If login is successful, log user details
      console.log('Login successful:', response.data);

      // Optionally redirect or perform additional actions with user details
    } catch (error) {
      // Handle errors (e.g., invalid credentials or server issues)
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.error || 'Login failed' : 'An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <span>or use your email password</span>
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
