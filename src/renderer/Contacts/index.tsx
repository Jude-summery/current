import './index.scss';
import { useState } from 'react';
import Cowboy from './Cowboy';

export default function Contacts() {
  const [cowboys, setCowboys] = useState([{ name: 'John', recent: 'How R U' }]);
  return (
    <div className="contacts__container">
      {cowboys.map((cowboy) => (
        <Cowboy name={cowboy.name} recent={cowboy.recent} />
      ))}
    </div>
  );
}
