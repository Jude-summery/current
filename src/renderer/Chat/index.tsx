import './index.scss';
import FrameOperation from '../FrameOperation';

interface ChatProps {
  currentCowboy: Cowboy;
}

export default function Chat(props: ChatProps) {
  const { currentCowboy } = props;
  return (
    <div className="chat__container">
      <div className="chat__name">
        <FrameOperation />
        <span className="chat__name--no-drag">{currentCowboy.name}</span>
      </div>
      <div className="chat__records">1</div>
      <div className="chat__textarea">
        <textarea />
      </div>
    </div>
  );
}
