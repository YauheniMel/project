import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';

interface IItemPage {
  title: string;
  countLike: Array<string | null>;
  meta: { createAt: string; updateAt: string };
}

const ItemPage: FC<IItemPage> = ({ title, countLike, meta }) => {
  console.log('XXXXX');
  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">
        {countLike.length}
        {' '}
        likes
      </Typography>
      <Typography variant="body1">{meta.createAt}</Typography>
      <Typography variant="body1">{meta.updateAt}</Typography>
    </Box>
  );
};

export default ItemPage;
