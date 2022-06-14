import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface ILogo {
  props?: any;
}

const Logo: FC<ILogo> = () => (
  <Stack direction="row">
    <Chip
      sx={{ fontSize: '1.2rem', padding: '25px 0' }}
      avatar={<Avatar style={{ height: '40px', width: '40px' }} />}
      label="Avatar"
    />
  </Stack>
);

export default Logo;
