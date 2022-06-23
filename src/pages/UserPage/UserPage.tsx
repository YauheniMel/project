import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { FC, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from '../../components/Sidebar/Sidebar';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import Slider from '../../components/Slider/Slider';
import { CollectionInitType, CollectionType } from '../../types';

interface IUserPage {
  isAdmin: boolean;
  theme: 'light' | 'dark';
  id: string;
  status: 'active' | 'blocked';
  collections: CollectionType[] | null;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  deleteCollection: (collectionId: string) => void;
  setTargetCollection: (collection: CollectionType) => void;
}

const UserPage: FC<IUserPage> = ({
  isAdmin,
  id,
  theme,
  status,
  collections,
  createNewCollection,
  deleteCollection,
  setTargetCollection,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  console.log(theme, status, isAdmin);
  return (
    <>
      <CollectionForm
        userId={id}
        openForm={openForm}
        setOpenForm={setOpenForm}
        createNewCollection={createNewCollection}
      />
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
            <ListItemButton
              sx={{ width: '100%' }}
              onClick={() => deleteCollection('1')}
            >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete collection" />
            </ListItemButton>
          </Sidebar>
        </Grid>
        <Grid item xs={9} sm={8}>
          {collections && (
            <Slider
              collections={collections}
              setCollection={setTargetCollection}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UserPage;
