import React, { FC, useEffect } from 'react';
import { Box } from '@material-ui/core';
import {
  Avatar, Checkbox, Grid, Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import moment from 'moment';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { ItemType } from '../../types';

interface IItemPage {
  userId: number;
  targetItem: ItemType;
  getTargetItem: (itemId: number, collectionId: number) => void;
  deleteItem: (itemId: number) => void;
  toogleLike: (userId: number, itemId: number) => void;
  likes: { itemId: number }[] | null;
}

const ItemPage: FC<IItemPage> = ({
  targetItem,
  getTargetItem,
  deleteItem,
  toogleLike,
  userId,
  likes,
}) => {
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
          <Checkbox
            checked={!!likes?.find((like) => like.itemId === targetItem.id)}
            color="error"
            icon={<FavoriteBorder color="error" />}
            checkedIcon={<Favorite color="error" />}
            onChange={() => {
              if (userId && targetItem.id) {
                toogleLike(userId, targetItem.id);
              }
            }}
          />
          <Typography variant="h2">{targetItem.title}</Typography>
          <Typography variant="body1">
            {targetItem.likes ? targetItem.likes.length : 0}
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
