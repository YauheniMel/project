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
// import { useParams } from 'react-router';
import { CollectionInitType } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import ItemForm from '../../components/ItemForm/ItemForm';

interface ICollectionPage {
  setTargetItem: (id: string) => void;
  targetCollection: CollectionInitType;
}

const CollectionPage: FC<ICollectionPage> = ({
  setTargetItem,
  targetCollection,
}) => {
  // const { collectionId } = useParams();

  const [openForm, setOpenForm] = useState<boolean>(false);

  return (
    <>
      <Typography variant="h3">{targetCollection.title}</Typography>
      <Typography variant="h3">{targetCollection.theme}</Typography>
      <ItemForm
        dateFields={targetCollection.dateKeys}
        multiLineFields={targetCollection.multiLineKeys}
        numberFields={targetCollection.numberKeys}
        textFields={targetCollection.textKeys}
        checkboxFields={targetCollection.checkboxKeys}
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
          <Table list={targetCollection.list} setTargetItem={setTargetItem} />
        </Grid>
      </Grid>
    </>
  );
};

export default CollectionPage;
