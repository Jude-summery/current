import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Contacts from './Contacts';
import Chat from './Chat';

const Layout = () => {
  return (
    <div>
      <CssBaseline />
      <div>
        <div>
          <Contacts />
        </div>
        <div>
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
