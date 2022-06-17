import {
  Button,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { FC, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles, Paper } from '@material-ui/core';
import Sidebar from '../../components/Sidebar/Sidebar';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import Slider from '../../components/Slider/Slider';
import { CollectionInitType } from '../../types';

interface IUserPage {
  id: string;
  name: string;
  surname: string;
  isAdmin: boolean;
  theme: 'light' | 'dark';
  email: string;
  status: 'active' | 'blocked';
  meta: { loginDate: string; registerDate: string };
  collections: CollectionInitType[];
  getCollection: (id: string) => void;
}

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {},
});

const UserPage: FC<IUserPage> = ({
  id,
  name,
  surname,
  isAdmin,
  theme,
  email,
  status,
  meta,
  collections,
  getCollection,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  const classes = useStyles();

  return (
    <>
      <CollectionForm openForm={openForm} setOpenForm={setOpenForm} />
      <Grid
        sx={{ height: '100%' }}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={3} sm={4}>
          <Sidebar>
            <ListItemButton
              onClick={() => setOpenForm(true)}
              sx={{ width: '100%' }}
            >
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Create new collection" />
            </ListItemButton>
            <ListItemButton sx={{ width: '100%' }}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit collection" />
            </ListItemButton>
            <ListItemButton sx={{ width: '100%' }}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete collection" />
            </ListItemButton>
          </Sidebar>
        </Grid>
        <Grid item xs={9} sm={8}>
          <Paper className={classes.paper}>
            <Button>
              Edit profile
              <EditIcon />
            </Button>
            <div>{id}</div>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{meta.loginDate}</div>
            <div>{status}</div>
            <div>{theme}</div>
            <div>{email}</div>
            <div>{isAdmin}</div>
          </Paper>
          <Slider getCollection={getCollection} collections={collections} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserPage;
