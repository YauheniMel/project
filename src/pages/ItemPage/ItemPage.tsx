import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';

interface IItemPage {
  title: string;
  countLike: number;
  meta: { createAt: string; updateAt: string };
  icon: string;
}

const ItemPage: FC<IItemPage> = ({
  title, countLike, meta, icon,
}) => {
  console.log('XXXXX');
  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">
        {countLike}
        {' '}
        likes
      </Typography>
      <Typography variant="body1">{meta.createAt}</Typography>
      <Typography variant="body1">{meta.updateAt}</Typography>
      <img src={icon} alt="" />
    </Box>
  );
};

export default ItemPage;
