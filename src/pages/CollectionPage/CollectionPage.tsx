import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CardItem from '../../shared/components/CardItem';
import { ItemType } from '../../types';

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
  theme: string;
  meta: { createAt: string; updateAt: string };
  list: ItemType[];
}

const CollectionPage: FC<ICollectionPage> = ({
  id,
  title,
  icon,
  description,
  theme,
  meta,
  list,
}) => {
  const classes = useStyles();

  console.log(id, title, icon, description, theme, meta);
  return (
    <Box className={classes.list}>
      {list.map((item: ItemType) => (
        <CardItem {...item} key={item.id} />
      ))}
    </Box>
  );
};

export default CollectionPage;
