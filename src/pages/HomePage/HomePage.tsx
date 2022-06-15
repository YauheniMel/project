import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CardItem from '../../shared/components/CardItem';
import { CollectionType, ItemType } from '../../types';
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
});

interface IHomePage {
  id: string;
  name: string;
  surname: string;
  email: string;
  status: 'active' | 'blocked';
  meta: { loginDate: string; registerDate: string };
  collections: CollectionType[];
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const HomePage: FC<IHomePage> = ({
  id,
  name,
  surname,
  email,
  status,
  meta,
  list,
  collections,
  setTargetItem,
}) => {
  const classes = useStyles();
  console.log(id, name, surname, email, status, meta, list);

  return (
    <>
      <CarouselComponent collections={collections} />
      <Box className={classes.list}>
        {list.map((item: ItemType) => (
          <CardItem setTargetItem={setTargetItem} {...item} key={item.id} />
        ))}
      </Box>
    </>
  );
};

export default HomePage;
