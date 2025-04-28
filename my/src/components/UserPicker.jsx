import React, { useState, useEffect } from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFavoriteUser } = useFavoriteUser();
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user

  // Fetch user list from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    // Set the selected user as the favorite user
    setSelectedUser(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      setFavoriteUser(selectedUser);
    }
  };

  return (
    <div className="text-center min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 p-8">
      {loading ? (
        <p className="text-lg text-gray-500">Loading...</p>
      ) : (
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Pick your favorite user</h2>
          
          {/* Form for user selection */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
            <h3 className="text-xl mb-4 text-center font-semibold text-purple-800">Select Your Favorite User</h3>

            {/* User list with form */}
            <ul className="space-y-4">
              {users.map(user => (
                <li
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className={`cursor-pointer p-4 bg-gray-100 rounded-lg transition duration-300 
                  ${selectedUser?.id === user.id ? 'bg-green-200' : 'hover:bg-gray-200'}`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <p className="text-sm text-gray-500">@{user.username}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    {selectedUser?.id === user.id && (
                      <span className="text-sm text-green-600 font-semibold">Selected</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Submit button */}
            <div className="mt-4">
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg text-white font-semibold 
                ${selectedUser ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!selectedUser} // Disable button if no user is selected
              >
                Confirm Favorite User
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserPicker;
