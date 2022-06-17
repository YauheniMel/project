import React, { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { CollectionInitType } from '../../types';
import RoutesApp from '../../constants/routes';

interface ICarousel {
  collections: CollectionInitType[];
}

const CarouselComponent: FC<ICarousel> = ({ collections }) => (
  <Carousel sx={{ flex: 1 }}>
    {collections.map((collection: CollectionInitType) => (
      <Link to={RoutesApp.Collections} key={collection.id}>
        <Paper>
          <Typography variant="h2">{collection.title}</Typography>
          <Typography variant="h2">{collection.theme}</Typography>
          <Typography variant="inherit">{collection.description}</Typography>
          <img src={collection.icon} alt={collection.title} />
        </Paper>
      </Link>
    ))}
  </Carousel>
);

export default CarouselComponent;
