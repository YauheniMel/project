import React, { FC, useEffect } from 'react';
import { Box } from '@material-ui/core';
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';
import { ItemType } from '../../types';
import Sidebar from '../../components/Sidebar/Sidebar';

interface IItemPage {
  targetItem: ItemType;
  getTargetItem: (itemId: number, collectionId: number) => void;
  deleteItem: (itemId: number) => void;
}

const ItemPage: FC<IItemPage> = ({ targetItem, getTargetItem, deleteItem }) => {
  const { collectionId, itemId } = useParams();

  useEffect(() => {
    if (collectionId && itemId) {
      if (!targetItem) getTargetItem(+itemId, +collectionId);
    }
  }, []);

  return (
    <Grid
      sx={{ height: '100%' }}
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={3} sm={4}>
        <Sidebar>
          <ListItemButton
            sx={{ width: '100%' }}
            onClick={() => deleteItem(targetItem.id)}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete item" />
          </ListItemButton>
        </Sidebar>
      </Grid>
      <Grid item xs={9} sm={8}>
        {targetItem && (
          <Box>
            <Typography variant="h2">{targetItem.title}</Typography>
            <Typography variant="body1">
              {targetItem.countLike ? targetItem.countLike.length : 0}
              {' '}
              likes
            </Typography>
            <Typography variant="body1">{targetItem.createdAt}</Typography>
            <Typography variant="body1">{targetItem.updatedAt}</Typography>
            <img
              width="200"
              src={`data:application/pdf;base64,${targetItem.icon}`}
              alt="mmmmm"
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ItemPage;
