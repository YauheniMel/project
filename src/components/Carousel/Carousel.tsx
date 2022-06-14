import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Typography } from '@material-ui/core';

interface ICarousel {
  props?: any;
}

const CarouselComponent: FC<ICarousel> = () => {
  const items = [
    {
      id: 1,
      name: 'Random Name #1',
      description: 'Probably the!',
    },
    {
      id: 2,
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      id: 3,
      name: 'Random Name #3',
      description: 'Hello World!',
    },
    {
      id: 4,
      name: 'Random Name #4',
      description: 'Hello World!',
    },
    {
      id: 5,
      name: 'Random Name #5',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel sx={{ flex: 1 }}>
      {items.map((item) => (
        <Paper key={item.id}>
          <Typography variant="h2">{item.name}</Typography>
          <Typography variant="h2">{item.name}</Typography>
          <Typography variant="inherit">{item.description}</Typography>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
