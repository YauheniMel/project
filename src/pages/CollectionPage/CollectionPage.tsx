import React, { FC, useState } from 'react';
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { ItemType } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import ItemForm from '../../components/ItemForm/ItemForm';

interface ICollectionPage {
  id: string;
  title: string;
  description: string;
  theme: string;
  meta: { createAt: string; updateAt: string };
  list: ItemType[];
  setTargetItem: (id: string) => void;
  dateFields: null | string[];
  multiLineFields: null | string[];
  numberFields: null | string[];
  textFields: null | string[];
  checkboxFields: null | { field: string; count: number; values: string[] }[];
}

const CollectionPage: FC<ICollectionPage> = ({
  id,
  title,
  description,
  theme,
  meta,
  list,
  setTargetItem,
  dateFields,
  multiLineFields,
  numberFields,
  textFields,
  checkboxFields,
}) => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  console.log(id, title, description, theme, meta);
  return (
    <>
      <ItemForm
        dateFields={dateFields}
        multiLineFields={multiLineFields}
        numberFields={numberFields}
        textFields={textFields}
        checkboxFields={checkboxFields}
        openForm={openForm}
        setOpenForm={setOpenForm}
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
            <ListItemButton sx={{ width: '100%' }}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete item" />
            </ListItemButton>
          </Sidebar>
        </Grid>
        <Grid item xs={9} sm={8}>
          <Table list={list} setTargetItem={setTargetItem} />
        </Grid>
      </Grid>
    </>
  );
};

export default CollectionPage;
