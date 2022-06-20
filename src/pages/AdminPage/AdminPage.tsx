import React, { FC } from 'react';
import {
  Box,
  Grid,
  InputBase,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BlockIcon from '@mui/icons-material/Block';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import { CollectionInitType, UserType } from '../../types';
import Slider from '../../components/Slider/Slider';

interface IAdminPage {
  targetCollections: CollectionInitType[] | null;
  targetUser: UserType | null;
  setTargetUser: (id: string) => void;
  setTargetCollections: (id: string) => void;
  users: UserType[] | null;
  getCollection: (id: string, userId: string) => void;
}

const AdminPage: FC<IAdminPage> = ({
  targetCollections,
  targetUser,
  users,
  setTargetUser,
  setTargetCollections,
  getCollection,
}) => (
  <Grid
    container
    direction="row"
    sx={{
      height: '100%',
      gridTemplateRows: 'auto',
      gridTemplateColumns: 'auto',
    }}
  >
    <Grid item xs={12} sx={{ height: '15%' }}>
      <Box>Header</Box>
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIcon />
    </Grid>
    <Grid item xs={2} sx={{ height: '70%' }}>
      <ListItemButton sx={{ width: '100%' }}>
        <ListItemIcon>
          <BlockIcon />
        </ListItemIcon>
        <ListItemText primary="Block the user" />
      </ListItemButton>
      <ListItemButton sx={{ width: '100%' }}>
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Unlock the user" />
      </ListItemButton>
      <ListItemButton sx={{ width: '100%' }}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete the user" />
      </ListItemButton>
    </Grid>
    <Grid item xs={8} sx={{ backgroundColor: 'white', height: '70%' }}>
      {targetCollections && (
        <Box>
          <Typography variant="h3">My collections</Typography>
          <Slider
            collections={targetCollections}
            getCollection={getCollection}
          />
        </Box>
      )}
    </Grid>
    <Grid item xs={2} sx={{ backgroundColor: 'green', height: '70%' }}>
      <ListItemButton
        onClick={() => setTargetCollections(targetUser!.id)}
        sx={{ backgroundColor: 'white' }}
      >
        {targetUser!.name}
        {' '}
        {targetUser!.surname}
      </ListItemButton>
      <Box sx={{ width: '100%', backgroundColor: 'gray' }}>
        {users
          && users.map((user) => (
            <div>
              <ListItemButton
                onClick={() => setTargetUser(user.id)}
                key={user.id}
              >
                {user.name}
                {' '}
                {user.surname}
              </ListItemButton>
            </div>
          ))}
      </Box>
    </Grid>
    <Grid item xs sx={{ backgroundColor: 'teal', height: '15%' }}>
      <Box>Footer</Box>
    </Grid>
  </Grid>
);

export default AdminPage;
