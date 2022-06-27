import Avatar from '../Avatar';
import './index.scss';

export default function Cowboy(props: Cowboy) {
  const { name, recent } = props;
  return (
    <div className="cowboy">
      <div className="cowboy__avatar">
        <Avatar name={name} />
      </div>
      <div className="cowboy__info">
        <div className="cowboy__info__name">{name}</div>
        <div className="cowboy__info__recent">{recent}</div>
      </div>
    </div>
  );
}
