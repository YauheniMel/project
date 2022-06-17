import React, { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { CollectionInitType } from '../../types';

interface ICarousel {
  collections: CollectionInitType[];
}

const CarouselComponent: FC<ICarousel> = ({ collections }) => (
  <Carousel sx={{ flex: 1 }}>
    {collections.map((collection: CollectionInitType) => (
      <Paper key={collection.id}>
        <Typography variant="h2">{collection.title}</Typography>
        <Typography variant="h2">{collection.theme}</Typography>
        <Typography variant="inherit">{collection.description}</Typography>
        <img src={collection.icon} alt={collection.title} />
      </Paper>
    ))}
  </Carousel>
);

export default CarouselComponent;
