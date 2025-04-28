import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="App" style={{ padding: '20px' }}>
        <h1>Favorite User Picker</h1>
        <UserPicker />
        <UserDisplay />
      </div>
    </FavoriteUserProvider>
  );
}

export default App;
