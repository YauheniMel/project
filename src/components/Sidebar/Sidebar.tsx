import { Box } from '@mui/material';
import React, { FC } from 'react';

interface ISidebar {
  children: JSX.Element[] | JSX.Element;
}

const Sidebar: FC<ISidebar> = ({ children }) => <Box>{children}</Box>;

export default Sidebar;
