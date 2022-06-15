import React, { FC } from 'react';
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { ItemType, ThemeType } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

interface ICollectionPage {
  id: string;
  title: string;
  icon: string;
  description: string;
  theme: ThemeType;
  meta: { createAt: string; updateAt: string };
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const CollectionPage: FC<ICollectionPage> = ({
  id,
  title,
  icon,
  description,
  theme,
  meta,
  list,
  setTargetItem,
}) => {
  console.log(id, title, icon, description, theme, meta);
  return (
    <Grid
      sx={{ height: '100%' }}
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={3} sm={4}>
        <Sidebar>
          <ListItemButton sx={{ width: '100%' }}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Create new item" />
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
  );
};

export default CollectionPage;
