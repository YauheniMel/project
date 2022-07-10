import { Box } from '@mui/material';
import React, { FC } from 'react';

interface ISidebar {
  children: JSX.Element[] | JSX.Element;
}

const Sidebar: FC<ISidebar> = ({ children }) => (
  <Box
    sx={(theme) => ({
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
    })}
  >
    {children}
  </Box>
);

export default Sidebar;
