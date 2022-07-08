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
  activeEdit: {
    transform: 'scale(1.1)',
    color: theme.palette.warning.main,

    '& .MuiTouchRipple-root': {
      color: theme.palette.warning.main,
    },
  },
  activeDelete: {
    transform: 'scale(1.1)',

    '& .MuiTouchRipple-root': {
      color: theme.palette.warning.main,
    },
  },
}));

interface IUserPage {
  id: number;
  theme: 'light' | 'dark';
  status: 'active' | 'blocked';
  collections: CollectionType[] | null;
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

  const classes = useStyles();

  const [{ isOver: overEdit, canDrop }, dropEdit] = useDrop({
    accept: 'avatar',
    drop: (item: { id: number }) => {
      setEditCollection(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop(),
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
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
                color: (theme) => (canDrop ? theme.palette.warning.main : ''),
              }}
              className={canDrop ? classes.activeEdit : ''}
              onClick={() => {
                if (collectionsEdit.length === 0) return;
                if (!collectionThemes) getCollectionThemes();

                setOpenModalEdit(true);
              }}
              ref={dropEdit}
            >
              <ListItemIcon>
                <Badge badgeContent={collectionsEdit.length} color="warning">
                  <EditIcon className={overEdit ? classes.edit : ''} />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: '100%',
                color: (theme) => (canDrop ? theme.palette.error.main : ''),
              }}
              className={canDrop ? classes.activeDelete : ''}
              onClick={() => {
                if (collectionsDel.length === 0) return;

                setOpenModalDelete(true);
              }}
              ref={dropDelete}
            >
              <ListItemIcon>
                <Badge badgeContent={collectionsDel.length} color="error">
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
