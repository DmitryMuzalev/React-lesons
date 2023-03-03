import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<MusicContainer />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
