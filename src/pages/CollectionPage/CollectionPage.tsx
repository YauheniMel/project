import React, { FC, useState } from 'react';
import {
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

interface ICollectionPage {
  id: string;
  icon: any;
  description: string;
  theme: string;
  customFields: any;
  createdAt: string;
  updatedAt: string;
  list: ItemType[] | null;
  createNewItem: (itemInfo: ItemInitType) => void;
  deleteItem: (itemId: string) => void;
  setTargetItem: (item: ItemType) => void;
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
  deleteItem,
  list,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <>
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
            <ListItemButton sx={{ width: '100%' }}>
              <ListItemIcon>
                <UpgradeIcon />
              </ListItemIcon>
              <ListItemText primary="Update item" />
            </ListItemButton>
            <ListItemButton
              sx={{ width: '100%' }}
              onClick={() => deleteItem('1')}
            >
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete item" />
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
          {list && <Table list={list} setTargetItem={setTargetItem} />}
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
