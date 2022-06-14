import React, { FC } from 'react';
import { Avatar, Chip, Stack } from '@mui/material';

interface ILogo {
  name: string;
  surname: string;
}

const Logo: FC<ILogo> = ({ name, surname }) => (
  <Stack direction="row">
    <Chip
      sx={{ fontSize: '1.2rem', padding: '25px 0' }}
      avatar={<Avatar style={{ height: '40px', width: '40px' }} />}
      label={`${name} ${surname}`}
    />
  </Stack>
);

export default Logo;
