import React, { FC, useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import MDEditor from '@uiw/react-md-editor';
import moment from 'moment';
import { ItemInitType, ItemType } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import ItemForm from '../../components/ItemForm/ItemForm';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ModalEditItem from '../../components/ModalEditItem/ModalEditItem';

interface ICollectionPage {
  userId: number;
  id: number;
  icon: any;
  description: string;
  theme: string;
  customFields: any;
  createdAt: string;
  updatedAt: string;
  list: ItemType[] | null;
  createNewItem: (itemInfo: ItemInitType) => void;
  setTargetItem: (item: ItemType) => void;
  listEditItems: Array<ItemType | null>;
  listDeleteItems: Array<ItemType | null>;
  setEditItems: (itemIds: number[]) => void;
  setDeleteItems: (itemIds: number[]) => void;
  pullOutItem: (itemId: number) => void;
  deleteItem: (itemId: number) => void;
  updateItem: (item: any) => void;
  toogleLike: (userId: number, itemId: number) => void;
  likes: { itemId: number }[] | null;
  searchMatchTags: (tag: string) => void;
  matchTags: any;
}

const CollectionPage: FC<ICollectionPage> = ({
  id,
  icon,
  description,
  theme,
  customFields,
  createdAt,
  updatedAt,
  setTargetItem,
  createNewItem,
  list,
  listEditItems,
  listDeleteItems,
  setEditItems,
  setDeleteItems,
  pullOutItem,
  deleteItem,
  updateItem,
  toogleLike,
  userId,
  likes,
  searchMatchTags,
  matchTags,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  console.log(updatedAt);

  return (
    <>
      <ModalEditItem
        openModal={openModalEdit}
        setOpen={setOpenModalEdit}
        editItems={listEditItems}
        pullOutItem={pullOutItem}
        updateItem={updateItem}
      />
      <ModalDelete
        type="items"
        openModal={openModalDelete}
        setOpen={setOpenModalDelete}
        deleteItems={listDeleteItems}
        pullOutItem={pullOutItem}
        deleteItem={deleteItem}
      />
      <ItemForm
        customFields={customFields}
        collectionId={id}
        openForm={openForm}
        setOpenForm={setOpenForm}
        createNewItem={createNewItem}
        searchMatchTags={searchMatchTags}
        matchTags={matchTags}
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
              <ListItemText primary="Create item" />
            </ListItemButton>
            <ListItemButton
              // disabled={listEditItems.length === 0}
              sx={{ width: '100%' }}
              onClick={() => setOpenModalEdit(true)}
            >
              <ListItemIcon>
                <Badge badgeContent={listEditItems.length} color="warning">
                  <UpgradeIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Update" />
            </ListItemButton>
            <ListItemButton
              // disabled={listDeleteItems.length === 0}
              sx={{ width: '100%' }}
              onClick={() => setOpenModalDelete(true)}
            >
              <ListItemIcon>
                <Badge badgeContent={listDeleteItems.length} color="error">
                  <DeleteIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItemButton>
          </Sidebar>
        </Grid>
        <Grid item lg={9.5} md={9.3} xs={12} sm={8}>
          <Box
            sx={{
              display: 'flex',
              columnGap: '30px',
              padding: '20px',
            }}
          >
            <Avatar
              src={`data:application/pdf;base64,${icon}`}
              alt="mmmmm"
              sx={{ width: '10rem', height: '10rem' }}
            >
              {icon && 'Empty'}
            </Avatar>
            <Box>
              <Typography variant="h2">{theme}</Typography>
              <Typography variant="body2">
                Created:
                {' '}
                {moment(createdAt).format('DD MMMM YYYY')}
              </Typography>
            </Box>
          </Box>
          {description && (
            <MDEditor.Markdown source={description.replace(/&&#&&/gim, '\n')} />
          )}
          {list && (
            <Table
              list={list}
              setTargetItem={setTargetItem}
              setEditItems={setEditItems}
              setDeleteItems={setDeleteItems}
              toogleLike={toogleLike}
              userId={userId}
              likes={likes}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CollectionPage;
