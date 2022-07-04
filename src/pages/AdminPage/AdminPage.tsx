import React, { FC } from 'react';
import {
  Box,
  Chip,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import { CollectionType, TargetUserType } from '../../types';
import Slider from '../../components/Slider/Slider';

interface IAdminPage {
  targetCollections: CollectionType[] | null;
  targetUser: TargetUserType | null;
  getTargetUser: (id: number) => void;
  getTargetUserCollections: (id: number, page?: number) => void;
  users: TargetUserType[] | null;
  setCollection: (collectionId: CollectionType) => void;
  blockUser: (userId: number) => void;
  unblockUser: (userId: number) => void;
  deleteUser: (userId: number) => void;
}

const AdminPage: FC<IAdminPage> = ({
  targetCollections,
  targetUser,
  users,
  getTargetUser,
  setCollection,
  getTargetUserCollections,
  blockUser,
  unblockUser,
  deleteUser,
}) => (
  <Grid container direction="row" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item lg={2.5} md={2.7} xs={12} sm={4}>
      {targetUser && (
        <>
          <ListItemButton onClick={() => blockUser(targetUser.id)}>
            <ListItemIcon>
              <BlockIcon />
            </ListItemIcon>
            <ListItemText primary="Block the user" />
          </ListItemButton>
          <ListItemButton onClick={() => unblockUser(targetUser.id)}>
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText primary="Unlock the user" />
          </ListItemButton>
          <ListItemButton onClick={() => deleteUser(targetUser.id)}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete the user" />
          </ListItemButton>
        </>
      )}
    </Grid>
    <Grid item lg={6.5} md={7.3} xs={10} sm={6}>
      {targetUser && (
        <Typography
          variant="h4"
          sx={{
            paddingBottom: '20px',
          }}
        >
          {targetUser.name}
          {' '}
          {targetUser.surname}
        </Typography>
      )}
      {targetCollections && (
        <Box>
          <Slider
            id={1}
            getUserCollections={getTargetUserCollections}
            collections={targetCollections}
            setCollection={setCollection}
          />
        </Box>
      )}
    </Grid>
    <Grid item xs={3}>
      <Box>
        {users
          && users.map((user) => (
            <ListItemButton
              onClick={() => getTargetUser(user.id)}
              key={user.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {user.name}
              {' '}
              {user.surname}
              <Stack direction="row" spacing={1}>
                <Chip
                  label={user.status}
                  color={user.status === 'active' ? 'primary' : 'error'}
                  size="small"
                />
                {!user.isAdmin && (
                  <Chip
                    label="Admin"
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                )}
              </Stack>
            </ListItemButton>
          ))}
      </Box>
    </Grid>
  </Grid>
);

export default AdminPage;
