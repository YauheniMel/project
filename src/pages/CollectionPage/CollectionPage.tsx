import React, { FC, useState } from 'react';
import {
  Badge,
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
import { ItemInitType, ItemType } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import ItemForm from '../../components/ItemForm/ItemForm';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import ModalEditItem from '../../components/ModalEditItem/ModalEditItem';

interface ICollectionPage {
  id: number;
  icon: any;
  description: string;
  theme: string;
  customFields: any;
  createdAt: string;
  updatedAt: string;
  list: ItemType[] | null;
  createNewItem: (itemInfo: ItemInitType) => void;
  deleteItem: (itemId: number) => void;
  setTargetItem: (item: ItemType) => void;
  listEditItems: Array<ItemType | null>;
  listDeleteItems: Array<ItemType | null>;
  setEditItems: (itemIds: number[]) => void;
  setDeleteItems: (itemIds: number[]) => void;
  pullOutItem: (itemId: number) => void;
  updateItem: (item: any) => void;
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
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

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
              <ListItemText primary="Create new item" />
            </ListItemButton>
            <ListItemButton
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
        <Grid item xs={9} sm={8}>
          <Typography variant="h3">{theme}</Typography>
          <Typography variant="h3">{createdAt}</Typography>
          <Typography variant="h3">{updatedAt}</Typography>
          {description && (
            <MDEditor.Markdown source={description.replace(/&/gim, '\n')} />
          )}
          {list && (
            <Table
              list={list}
              setTargetItem={setTargetItem}
              setEditItems={setEditItems}
              setDeleteItems={setDeleteItems}
            />
          )}
          <img
            width="200"
            src={`data:application/pdf;base64,${icon}`}
            alt="mmmmm"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CollectionPage;
