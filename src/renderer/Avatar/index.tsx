import { Avatar as MAvatar } from '@mui/material';

export default function Avatar({ name }: { name: string }) {
  return (
    <MAvatar
      sx={{ bgcolor: '#9CCC65', width: '42px', height: '42px' }}
      variant="rounded"
    >
      {name.substring(0, 2)}
    </MAvatar>
  );
}
