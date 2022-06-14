import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import { ItemType } from '../../types';

interface IItemPage {
  targetItem: ItemType | null;
}

const ItemPage: FC<IItemPage> = ({ targetItem }) => {
  console.log(targetItem);
  return (
    <Box>
      <Typography variant="h2">{targetItem?.title}</Typography>
      <Typography variant="body1">
        {targetItem?.countLike}
        {' '}
        likes
      </Typography>
      <Typography variant="body1">{targetItem?.meta.createAt}</Typography>
      <Typography variant="body1">{targetItem?.meta.updateAt}</Typography>
      <img src={targetItem?.icon} alt="" />
    </Box>
  );
};

export default ItemPage;
