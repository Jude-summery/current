import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Menu from './Menu';
import Contacts from './Contacts';
import Chat from './Chat';
import './app.scss';

const Layout = () => {
  return (
    <div id="app">
      <CssBaseline />
      <div id="layout">
        <div id="menu">
          <Menu />
        </div>
        <div id="contacts">
          <Contacts />
        </div>
        <div id="chat">
          <Chat />
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
