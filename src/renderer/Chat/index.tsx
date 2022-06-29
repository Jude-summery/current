import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Avatar from '../Avatar';
import './index.scss';
import Bubble from '../Bubble';

interface ChatProps {
  currentCowboy: Cowboy;
}

interface Record {
  recordId: number;
  type: string;
  name: string;
  content: string;
}

export default function Chat(props: ChatProps) {
  const defaultRecords = [
    { recordId: 1, type: 'ours', name: 'AD', content: '80' },
    { recordId: 2, type: 'others', name: '冰冰', content: '80' },
    { recordId: 3, type: 'ours', name: 'AD', content: '我就是80' },
    { recordId: 4, type: 'others', name: '冰冰', content: '豪门' },
    { recordId: 5, type: 'ours', name: 'AD', content: '豪门' },
  ];
  const [records, setRecords] = useState<Record[]>(defaultRecords);
  const { currentCowboy } = props;

  const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
  };

  const onTextKeyDown = () => {
    return (event: KeyboardEvent) => {
      if (event.shiftKey && event.keyCode === 13) {
        event.preventDefault();
        const e = (event.target as HTMLInputElement).value;
        (event.target as HTMLInputElement).value = `${e}\n`;
      } else if (event.keyCode === 13) {
        event.preventDefault();
        Promise.resolve(
          setRecords(
            records.concat([
              {
                recordId: records.length + 1,
                type: 'ours',
                name: 'AD',
                content: (event.target as HTMLInputElement).value,
              },
            ])
          )
        )
          .then(() => {
            (event.target as HTMLInputElement).value = '';
            return false;
          })
          .catch((e) => {
            console.error(e);
          });
      }
    };
  };

  return (
    <div className="chat__container">
      <div className="chat__name">
        <span className="chat__name--no-drag">{currentCowboy.name}</span>
      </div>
      <div className="chat__records">
        {records.map((record) => {
          const { recordId, type, name, content } = record;
          if (type === 'ours') {
            return (
              <div className="chat__record--ours" key={recordId}>
                <Avatar name={name} />
                <Bubble type="ours" content={content} />
              </div>
            );
          }
          return (
            <div className="chat__record--others" key={recordId}>
              <Avatar name={name} />
              <Bubble type="others" content={content} />
            </div>
          );
        })}
      </div>
      <div className="chat__textarea">
        <textarea
          onChange={onTextareaChange}
          onKeyDown={onTextKeyDown()}
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
