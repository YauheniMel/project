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
  isOnline: boolean;
  meta: { loginDate: string; registerDate: string };
  collections: CollectionType[];
  list: ItemType[];
}

const HomePage: FC<IHomePage> = ({
  id,
  name,
  surname,
  email,
  status,
  isOnline,
  meta,
  list,
}) => {
  const classes = useStyles();
  console.log(id, name, surname, email, status, isOnline, meta, list);

  return (
    <>
      <CarouselComponent />
      <Box className={classes.list}>
        {list.map((item: ItemType) => (
          <CardItem {...item} key={item.id} />
        ))}
      </Box>
    </>
  );
};

export default HomePage;
