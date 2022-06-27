import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Menu from './Menu';
import Contacts from './Contacts';
import Chat from './Chat';
import './variable.scss';
import './app.scss';

const Layout = () => {
  const [currentCowboy, setCurrentCowboy] = useState({
    name: '',
    recent: '',
  });
  return (
    <div id="app">
      <CssBaseline />
      <div id="layout">
        <div id="menu">
          <Menu />
        </div>
        <div id="contacts">
          <Contacts
            changeCowboy={(cowboy: Cowboy) => setCurrentCowboy(cowboy)}
          />
        </div>
        <div id="chat">
          <Chat currentCowboy={currentCowboy} />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}
