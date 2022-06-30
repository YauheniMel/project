import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import CardItem from '../../shared/components/CardItem/CardItem';
import { CollectionType, ItemType } from '../../types';
import CarouselComponent from '../../components/Carousel/Carousel';
import TagCloudComponent from '../../shared/components/TagsCloud/TagCloud';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    columnGap: '10px',
    overflowX: 'auto',
    padding: '15px 0',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

interface IHomePage {
  collections: CollectionType[] | null;
  list: ItemType[] | null;
  setTargetItem: (item: ItemType) => void;
  toogleLike: (userId: number, itemId: number) => void;
  userId: number;
}

const HomePage: FC<IHomePage> = ({
  list,
  userId,
  collections,
  setTargetItem,
  toogleLike,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.item}>
      <CarouselComponent collections={collections} />
      <TagCloudComponent />
      <Box className={classes.list}>
        {list?.map((item: ItemType) => (
          <CardItem
            setTargetItem={setTargetItem}
            item={item}
            key={item.id}
            toogleLike={toogleLike}
            userId={userId}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
