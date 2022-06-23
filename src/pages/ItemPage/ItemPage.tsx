import React, { FC, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import { ItemType } from '../../types';

interface IItemPage {
  targetItem: ItemType;
  getTargetItem: (itemId: string, collectionId: string) => void;
}

const ItemPage: FC<IItemPage> = ({ targetItem, getTargetItem }) => {
  const { collectionId, itemId } = useParams();

  useEffect(() => {
    console.log(collectionId, itemId);

    if (collectionId && itemId) {
      if (!targetItem) getTargetItem(itemId, collectionId);
    }
  }, []);

  return (
    <Box>
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
    </Box>
  );
};

export default ItemPage;
