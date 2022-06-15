import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { ItemType, ThemeType } from '../../types';
import Table from '../../components/Table/Table';

const useStyles = makeStyles({
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '2px',
    flexWrap: 'wrap',
  },
});

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
  const classes = useStyles();

  console.log(id, title, icon, description, theme, meta);
  return (
    <Box className={classes.list}>
      <Table list={list} setTargetItem={setTargetItem} />
    </Box>
  );
};

export default CollectionPage;
