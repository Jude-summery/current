import './index.scss';
import { useState } from 'react';
import Cowboy from '../Cowboy';

interface ContactsProps {
  changeCowboy: (cowboy: Cowboy) => void;
  currentCowboy: Cowboy;
}

export default function Contacts(props: ContactsProps) {
  const defaultCowboy = [
    {
      userId: 1,
      name: 'John',
      recent: 'How R U',
    },
    {
      userId: 2,
      name: 'Dan',
      recent: 'How R U',
    },
    {
      userId: 3,
      name: 'Van',
      recent: 'How R U',
    },
    {
      userId: 4,
      name: 'Bob',
      recent: 'How R U',
    },
    {
      userId: 5,
      name: 'Anna',
      recent: 'How R U',
    },
    {
      userId: 6,
      name: 'Ellen',
      recent: 'How R U',
    },
    {
      userId: 7,
      name: 'Cindy',
      recent: 'How R U',
    },
    {
      userId: 8,
      name: 'Mimi',
      recent: 'How R U',
    },
    {
      userId: 9,
      name: 'Willam',
      recent: 'How R U',
    },
    {
      userId: 10,
      name: 'Kevin',
      recent: 'How R U',
    },
    {
      userId: 11,
      name: 'Larry',
      recent: 'How R U',
    },
  ];
  const { changeCowboy, currentCowboy } = props;
  const [cowboys, setCowboys] = useState<Cowboy[]>(defaultCowboy);
  return (
    <div className="contacts__container">
      {cowboys.map((cowboy) => (
        <div
          key={cowboy.name}
          role="button"
          onClick={() => changeCowboy(cowboy)}
          onKeyPress={() => changeCowboy(cowboy)}
          tabIndex={-1}
          className={
            currentCowboy?.userId === cowboy.userId ? 'contacts--active' : ''
          }
        >
          <Cowboy
            userId={cowboy.userId}
            name={cowboy.name}
            recent={cowboy.recent}
          />
        </div>
      ))}
    </div>
  );
}
