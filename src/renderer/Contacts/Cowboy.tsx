import { Avatar, SvgIcon } from '@mui/material';

interface CowboyProps {
  name: string;
  recent: string;
}

export default function Cowboy(props: CowboyProps) {
  const { name, recent } = props;
  return (
    <div>
      <Avatar
        sx={{ margin: '0 auto', marginBottom: '10px', bgcolor: '#9CCC65' }}
        variant="rounded"
      >
        Jo
      </Avatar>
      <div className="cowboy__info">
        <div>{name}</div>
        <div>{recent}</div>
      </div>
    </div>
  );
}
