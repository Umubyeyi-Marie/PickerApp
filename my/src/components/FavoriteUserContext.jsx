import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context for the favorite user
const FavoriteUserContext = createContext();

// FavoriteUserProvider component
export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  useEffect(() => {
    // Check if there's a favorite user in localStorage on initial load
    const storedUser = JSON.parse(localStorage.getItem('favoriteUser'));
    if (storedUser) {
      setFavoriteUser(storedUser); // Set from localStorage if available
    }
  }, []);

  // Update localStorage when favoriteUser changes
  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
};

// Custom hook to use favorite user context
export const useFavoriteUser = () => useContext(FavoriteUserContext);
