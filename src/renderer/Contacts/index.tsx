import './index.scss';
import { useState } from 'react';
import Cowboy from './Cowboy';

const defaultCowboy = [
  {
    name: 'John',
    recent: 'How R U',
  },
  {
    name: 'Dan',
    recent: 'How R U',
  },
  {
    name: 'Van',
    recent: 'How R U',
  },
  {
    name: 'Bob',
    recent: 'How R U',
  },
  {
    name: 'Anna',
    recent: 'How R U',
  },
  {
    name: 'Ellen',
    recent: 'How R U',
  },
  {
    name: 'Cindy',
    recent: 'How R U',
  },
  {
    name: 'Mimi',
    recent: 'How R U',
  },
  {
    name: 'Willam',
    recent: 'How R U',
  },
  {
    name: 'Kevin',
    recent: 'How R U',
  },
  {
    name: 'Larry',
    recent: 'How R U',
  },
];

interface ContactsProps {
  changeCowboy: (cowboy: Cowboy) => void;
}

export default function Contacts(props: ContactsProps) {
  const { changeCowboy } = props;
  const [cowboys, setCowboys] = useState(defaultCowboy);
  return (
    <div className="contacts__container">
      {cowboys.map((cowboy) => (
        <div
          key={cowboy.name}
          role="button"
          onClick={() => changeCowboy(cowboy)}
          onKeyPress={() => changeCowboy(cowboy)}
          tabIndex={-1}
        >
          <Cowboy name={cowboy.name} recent={cowboy.recent} />
        </div>
      ))}
    </div>
  );
}
