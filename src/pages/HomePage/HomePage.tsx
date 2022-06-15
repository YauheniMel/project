import React, { FC } from 'react';
import {
  Box, makeStyles, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { Grid, ListItemButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CardItem from '../../shared/components/CardItem';
import { CollectionType, ItemType } from '../../types';
import CarouselComponent from '../../components/Carousel/Carousel';
import Sidebar from '../../components/Sidebar/Sidebar';

const useStyles = makeStyles({
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '2px',
    flexWrap: 'wrap',
  },
  grid_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

interface IHomePage {
  id: string;
  name: string;
  surname: string;
  email: string;
  status: 'active' | 'blocked';
  meta: { loginDate: string; registerDate: string };
  collections: CollectionType[];
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const HomePage: FC<IHomePage> = ({
  id,
  name,
  surname,
  email,
  status,
  meta,
  list,
  collections,
  setTargetItem,
}) => {
  const classes = useStyles();
  console.log(id, name, surname, email, status, meta, list);

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
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton sx={{ width: '100%' }}>
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
        <Box className={classes.grid_item}>
          <CarouselComponent collections={collections} />
          <Box className={classes.list}>
            {list.map((item: ItemType) => (
              <CardItem setTargetItem={setTargetItem} {...item} key={item.id} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
