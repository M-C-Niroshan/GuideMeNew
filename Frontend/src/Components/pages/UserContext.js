// src/pages/UserContext.js

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Function to update user data
  const updateUser = (data) => {
    setUserData(data);
    
    console.log('User data updated:', data); // Log user data to console
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
