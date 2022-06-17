import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import CardItem from '../../shared/components/CardItem';
import { CollectionInitType, ItemType } from '../../types';
import CarouselComponent from '../../components/Carousel/Carousel';

const useStyles = makeStyles({
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '2px',
    flexWrap: 'wrap',
  },
  grid_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
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
    <Box className={classes.grid_item}>
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
