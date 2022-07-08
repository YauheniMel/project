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
        sx={(theme) => ({
          fontSize: '1.2rem',
          padding: '1.4rem 0',
          height: '3rem',
          borderRadius: '3rem',

          '& .MuiChip-label': {
            [theme.breakpoints.down('md')]: {
              display: 'none',
            },
          },
        })}
        avatar={(
          <Avatar
            style={{
              height: '3rem',
              width: '3rem',
              marginLeft: 0,
            }}
          />
        )}
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
