import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Avatar from '../Avatar';
import './index.scss';
import FrameOperation from '../FrameOperation';
import Bubble from '../Bubble';

interface ChatProps {
  currentCowboy: Cowboy;
}

const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  console.log(event.target.value);
};

const onTextKeyDown = (records, setRecords) => {
  return (event: KeyboardEvent) => {
    if (event.shiftKey && event.keyCode === 13) {
      event.preventDefault();
      const e = (event.target as HTMLInputElement).value;
      (event.target as HTMLInputElement).value = `${e}\n`;
    } else if (event.keyCode === 13) {
      event.preventDefault();
      setRecords(
        records.concat([
          {
            type: 'ours',
            name: 'AD',
            content: (event.target as HTMLInputElement).value,
          },
        ]),
        ((event.target as HTMLInputElement).value = '')
      );
    }
  };
};

const defaultRecords = [
  { type: 'ours', name: 'AD', content: '80' },
  { type: 'others', name: 'CC', content: '80' },
  { type: 'ours', name: 'AD', content: '我就是80' },
  { type: 'others', name: 'CC', content: '豪门' },
  { type: 'ours', name: 'AD', content: '豪门' },
];

export default function Chat(props: ChatProps) {
  const [records, setRecords] = useState(defaultRecords);
  const { currentCowboy } = props;
  return (
    <div className="chat__container">
      <div className="chat__name">
        <FrameOperation />
        <span className="chat__name--no-drag">{currentCowboy.name}</span>
      </div>
      <div className="chat__records">
        {records.map((record) => {
          const { type, name, content } = record;
          if (type === 'ours') {
            return (
              <div className="chat__record--ours">
                <Avatar name={name} />
                <Bubble type="ours" content={content} />
              </div>
            );
          }
          return (
            <div className="chat__record--others">
              <Avatar name={currentCowboy.name} />
              <Bubble type="others" content={content} />
            </div>
          );
        })}
      </div>
      <div className="chat__textarea">
        <textarea
          onChange={onTextareaChange}
          onKeyDown={onTextKeyDown(records, setRecords)}
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
