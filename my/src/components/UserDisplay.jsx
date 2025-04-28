import React from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser } = useFavoriteUser();

  // Function to clear the favorite user from localStorage
  const handleClearFavorite = () => {
    localStorage.removeItem('favoriteUser');
    window.location.reload(); // Refresh to reset the state
  };

  return (
    <div className="text-center mt-6">
      {favoriteUser ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your favorite user is:</h2>
          <p className="text-lg mb-4">
            <span className="font-semibold">{favoriteUser.name}</span> (
            {favoriteUser.email})
          </p>
          {/* Clear Favorite Button */}
          <button
            onClick={handleClearFavorite}
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200"
          >
            Clear Favorite
          </button>
        </div>
      ) : (
        <p className="text-lg">You haven't selected a favorite user yet.</p>
      )}
    </div>
  );
};

export default UserDisplay;
