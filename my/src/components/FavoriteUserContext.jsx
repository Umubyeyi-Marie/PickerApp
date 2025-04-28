import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoriteUserContext = createContext();


export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('favoriteUser'));
    if (storedUser) {
      setFavoriteUser(storedUser); 
    }
  }, []);


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

export const useFavoriteUser = () => useContext(FavoriteUserContext);
