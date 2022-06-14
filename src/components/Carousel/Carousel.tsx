import React, { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { CollectionType } from '../../types';

interface ICarousel {
  collections: CollectionType[];
}

const CarouselComponent: FC<ICarousel> = ({ collections }) => (
  <Carousel sx={{ flex: 1 }}>
    {collections.map((collection: CollectionType) => (
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
