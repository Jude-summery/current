import { Avatar } from '@mui/material';

export default function Cowboy(props: Cowboy) {
  const { name, recent } = props;
  return (
    <div className="cowboy">
      <div className="cowboy__avatar">
        <Avatar
          sx={{ bgcolor: '#9CCC65', width: '42px', height: '42px' }}
          variant="rounded"
        >
          {name.substring(0, 2)}
        </Avatar>
      </div>
      <div className="cowboy__info">
        <div className="cowboy__info__name">{name}</div>
        <div className="cowboy__info__recent">{recent}</div>
      </div>
    </div>
  );
}
