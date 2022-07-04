import React, { FC } from 'react';
import { Avatar, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import RoutesApp from '../../constants/routes';

interface ILogo {
  name: string;
  surname: string;
  isAdmin: boolean;
}

const Logo: FC<ILogo> = ({ name, surname, isAdmin }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(RoutesApp.Admin);
  }
  return (
    <Stack direction="row">
      <Chip
        sx={{ fontSize: '1.2rem', padding: '25px 0' }}
        avatar={<Avatar style={{ height: '40px', width: '40px' }} />}
        label={`${name} ${surname}`}
        clickable={isAdmin}
        onClick={() => {
          if (!isAdmin) return;
          handleClick();
        }}
      />
    </Stack>
  );
};

export default Logo;
