import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import CardItem from '../../shared/components/CardItem';
import { CollectionInitType, ItemType } from '../../types';
import CarouselComponent from '../../components/Carousel/Carousel';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    columnGap: '10px',
    overflowX: 'auto',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

interface IHomePage {
  collections: CollectionInitType[];
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const HomePage: FC<IHomePage> = ({ list, collections, setTargetItem }) => {
  const classes = useStyles();

  return (
    <Box className={classes.item}>
      <CarouselComponent collections={collections} />
      <Box className={classes.list}>
        {list.map((item: ItemType) => (
          <CardItem setTargetItem={setTargetItem} {...item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
