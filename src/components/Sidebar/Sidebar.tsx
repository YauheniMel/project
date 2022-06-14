import React, { FC } from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface ISidebar {
  props?: any;
}

const Sidebar: FC<ISidebar> = () => (
  <>
    <ListItemButton sx={{ width: '100%' }}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton sx={{ width: '100%' }}>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Create new collection" />
    </ListItemButton>
  </>
);

export default Sidebar;
