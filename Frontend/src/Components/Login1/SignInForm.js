import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUserContext } from '../pages/UserContext';
// import './loading.css'; // Import CSS file for styling

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const { setUserData } = useUserContext();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    try {
      const response = await Axios.post('http://localhost:3001/api/login', { email, password });

      const userData = response.data;

      // Save user data in context
      setUserData(userData);
      
      // Navigate to the home page
      navigate('/');

    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.error || 'Login failed' : 'An error occurred. Please try again.');
    } finally {
      setLoading(false); // Hide loading spinner
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
      <button type="submit" disabled={loading}>Sign In</button>
      {loading && <div className="loader"></div>} {/* Show loader */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default SignInForm;
