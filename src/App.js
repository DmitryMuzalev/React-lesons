import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                createNewPost={props.createNewPost}
                changeProfileInput={props.changeProfileInput}
                changeMessagesInput={props.changeMessagesInput}
              />
            }
          />
          <Route
            path="/messages/*"
            element={
              <Messages
                messagesPage={props.state.messagesPage}
                createNewMessage={props.createNewMessage}
                changeMessagesInput={props.changeMessagesInput}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
