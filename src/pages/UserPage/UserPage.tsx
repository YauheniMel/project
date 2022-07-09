import React, { FC, useState } from 'react';
import {
  Badge,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from '../../components/Sidebar/Sidebar';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import Slider from '../../components/Slider/Slider';
import { CollectionInitType, CollectionType } from '../../types';
import ModalEditCollection from '../../components/ModalEditCollection/ModalEditCollection';
import ModalDelete from '../../components/ModalDelete/ModalDelete';

interface IUserPage {
  id: number;
  theme: 'light' | 'dark';
  status: 'active' | 'blocked';
  collections: {
    collections: CollectionType[] | null;
    countCollections: number;
  };
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  role: 'Admin' | 'User' | 'Reader';
  deleteCollection: (collectionId: number) => void;
  setTargetCollection: (collection: CollectionType) => void;
  setEditCollection: (collectionId: number) => void;
  setDeleteCollection: (collectionId: number) => void;
  collectionsEdit: Array<CollectionType | null>;
  collectionsDel: Array<CollectionType | null>;
  updateCollection: (collection: any) => void;
  pullOutCollection: (collectionId: number) => void;
  getMyCollections: (userId: number, page?: number) => void;
  getCollectionThemes: () => void;
  collectionThemes: { id: number; value: string }[] | null;
}

const UserPage: FC<IUserPage> = ({
  role,
  theme,
  status,
  collections,
  createNewCollection,
  setTargetCollection,
  setEditCollection,
  setDeleteCollection,
  collectionsEdit,
  deleteCollection,
  collectionsDel,
  updateCollection,
  pullOutCollection,
  getMyCollections,
  getCollectionThemes,
  collectionThemes,
  id,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  console.log(theme, status, role);

  return (
    <>
      <CollectionForm
        userId={id}
        openForm={openForm}
        setOpenForm={setOpenForm}
        createNewCollection={createNewCollection}
        collectionThemes={collectionThemes}
      />
      <ModalEditCollection
        openModal={openModalEdit}
        setOpen={setOpenModalEdit}
        collectionsEdit={collectionsEdit}
        updateCollection={updateCollection}
        pullOutCollection={pullOutCollection}
        collectionThemes={collectionThemes}
      />
      <ModalDelete
        openModal={openModalDelete}
        setOpen={setOpenModalDelete}
        collectionsDel={collectionsDel}
        pullOutCollection={pullOutCollection}
        deleteCollection={deleteCollection}
      />
      <Grid
        sx={{ height: '100%' }}
        container
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item lg={2.5} md={2.7} xs={12} sm={4}>
          <Sidebar>
            <ListItemButton
              onClick={() => {
                if (!collectionThemes) getCollectionThemes();

                setOpenForm(true);
              }}
              sx={{ width: '100%' }}
            >
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Create collection" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: '100%',
              }}
              onClick={() => {
                if (collectionsEdit.length === 0) return;
                if (!collectionThemes) getCollectionThemes();

                setOpenModalEdit(true);
              }}
            >
              <ListItemIcon>
                <Badge badgeContent={collectionsEdit.length} color="warning">
                  <EditIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: '100%',
              }}
              onClick={() => {
                if (collectionsDel.length === 0) return;

                setOpenModalDelete(true);
              }}
            >
              <ListItemIcon>
                <Badge badgeContent={collectionsDel.length} color="error">
                  <DeleteIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItemButton>
          </Sidebar>
        </Grid>
        <Grid item lg={9.5} md={9.3} xs={12} sm={8}>
          {collections.collections !== null && (
            <Slider
              type="private"
              id={id}
              setEditCollection={setEditCollection}
              setDeleteCollection={setDeleteCollection}
              collections={collections}
              setCollection={setTargetCollection}
              getUserCollections={getMyCollections}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UserPage;
