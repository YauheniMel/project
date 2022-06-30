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
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core';
import Sidebar from '../../components/Sidebar/Sidebar';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import Slider from '../../components/Slider/Slider';
import { CollectionInitType, CollectionType } from '../../types';
import ModalEditCollection from '../../components/ModalEditCollection/ModalEditCollection';
import ModalDelete from '../../components/ModalDelete/ModalDelete';

const useStyles = makeStyles((theme) => ({
  edit: {
    color: theme.palette.warning.main,
    width: '100%',
  },
  delete: {
    color: theme.palette.error.main,
    width: '100%',
  },
}));

interface IUserPage {
  id: number;
  isAdmin: boolean;
  theme: 'light' | 'dark';
  userId: string;
  status: 'active' | 'blocked';
  collections: CollectionType[] | null;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  deleteCollection: (collectionId: number) => void;
  setTargetCollection: (collection: CollectionType) => void;
  setEditCollection: (collectionId: number) => void;
  setDeleteCollection: (collectionId: number) => void;
  editCollections: Array<CollectionType | null>;
  deleteCollections: Array<CollectionType | null>;
  updateCollection: (collection: any) => void;
  pullOutCollection: (collectionId: number) => void;
  getMyCollections: (userId: number, page?: number) => void;
}

const UserPage: FC<IUserPage> = ({
  isAdmin,
  userId,
  theme,
  status,
  collections,
  createNewCollection,
  setTargetCollection,
  setEditCollection,
  setDeleteCollection,
  editCollections,
  deleteCollection,
  deleteCollections,
  updateCollection,
  pullOutCollection,
  getMyCollections,
  id,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const classes = useStyles();

  const [{ isOver: overEdit }, dropEdit] = useDrop({
    accept: 'avatar',
    drop: (item: { id: number }) => {
      setEditCollection(item.id);
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isOver: overDelete }, dropDelete] = useDrop({
    accept: 'avatar',
    drop: (item: { id: number }) => {
      setDeleteCollection(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  console.log(theme, status, isAdmin, userId);
  return (
    <>
      <CollectionForm
        userId={id}
        openForm={openForm}
        setOpenForm={setOpenForm}
        createNewCollection={createNewCollection}
      />
      <ModalEditCollection
        openModal={openModalEdit}
        setOpen={setOpenModalEdit}
        editCollections={editCollections}
        updateCollection={updateCollection}
        pullOutCollection={pullOutCollection}
      />
      <ModalDelete
        type="collections"
        openModal={openModalDelete}
        setOpen={setOpenModalDelete}
        deleteCollections={deleteCollections}
        pullOutCollection={pullOutCollection}
        deleteCollection={deleteCollection}
      />
      <Grid
        sx={{ height: '100%' }}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item lg={2.5} md={2.7} xs={12} sm={4}>
          <Sidebar>
            <ListItemButton
              onClick={() => setOpenForm(true)}
              sx={{ width: '100%' }}
            >
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Create collection" />
            </ListItemButton>
            <ListItemButton
              sx={{ width: '100%' }}
              onClick={() => setOpenModalEdit(true)}
              ref={dropEdit}
              // disabled={editCollections.length === 0}
            >
              <ListItemIcon>
                <Badge badgeContent={editCollections.length} color="warning">
                  <EditIcon className={overEdit ? classes.edit : ''} />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItemButton>
            <ListItemButton
              sx={{ width: '100%' }}
              onClick={() => setOpenModalDelete(true)}
              ref={dropDelete}
              // disabled={editCollections.length === 0}
            >
              <ListItemIcon>
                <Badge badgeContent={deleteCollections.length} color="error">
                  <DeleteIcon className={overDelete ? classes.delete : ''} />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItemButton>
          </Sidebar>
        </Grid>
        <Grid item lg={9.5} md={9.3} xs={12} sm={8}>
          {!!collections?.length && (
            <Slider
              type="private"
              id={id}
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
