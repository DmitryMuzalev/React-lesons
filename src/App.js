import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import Setting from './components/Setting/Setting';
import Profile from './components/Profile/Profile';
import Users from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import NewsContainer from './components/News/NewsContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/music" element={<MusicContainer />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
