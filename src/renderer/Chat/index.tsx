import Avatar from '../Avatar';
import './index.scss';
import FrameOperation from '../FrameOperation';
import Bubble from '../Bubble';

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
      <div className="chat__records">
        <div className="chat__record--ours">
          <Avatar name="AD" />
          <Bubble type="ours" content="123" />
        </div>
        <div className="chat__record--others">
          <Avatar name={currentCowboy.name} />
          <Bubble type="others" content="456" />
        </div>
      </div>
      <div className="chat__textarea">
        <textarea />
      </div>
    </div>
  );
}
