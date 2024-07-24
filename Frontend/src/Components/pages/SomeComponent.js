import React from 'react';
import { useUser } from './UserContext';

const SomeComponent = () => {
  const { updateUserData } = useUser();

  const handleLogin = () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      // Other user data
    };

    updateUserData(userData);
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};

export default SomeComponent;
