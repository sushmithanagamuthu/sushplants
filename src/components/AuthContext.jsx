// authContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username, password) => {
 
      setUser({ username });
      setIsLoading(false);
    };
  };


  const logout = async () => {
   
    setTimeout(() => {
      setUser(null);
    }, 1000);
  };

  // Check if user is already logged in (e.g., on page refresh)
  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  
  const value = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;;


export const useAuth = () => {
  return useContext(AuthContext);
};
