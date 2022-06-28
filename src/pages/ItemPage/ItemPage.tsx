import React, { FC, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { Avatar, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import moment from 'moment';
import { ItemType } from '../../types';

interface IItemPage {
  targetItem: ItemType;
  getTargetItem: (itemId: number, collectionId: number) => void;
  deleteItem: (itemId: number) => void;
}

const ItemPage: FC<IItemPage> = ({ targetItem, getTargetItem, deleteItem }) => {
  const { collectionId, itemId } = useParams();
  console.log(deleteItem);
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
      {targetItem && (
        <Box>
          <Typography variant="h2">{targetItem.title}</Typography>
          <Typography variant="body1">
            {targetItem.countLike ? targetItem.countLike.length : 0}
            {' '}
            likes
          </Typography>
          <Typography variant="body1">
            Created:
            {' '}
            {moment(targetItem.createdAt).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body1">
            Updated:
            {' '}
            {moment(targetItem.updatedAt).format('DD MMMM YYYY')}
          </Typography>
          <Avatar
            src={`data:application/pdf;base64,${targetItem.icon}`}
            sx={{ width: '10rem', height: '10rem' }}
          />
        </Box>
      )}
    </Grid>
  );
};

export default ItemPage;
