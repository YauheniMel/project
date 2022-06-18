import React, { FC } from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, Box, Link } from '@mui/material';
import { CollectionInitType } from '../../types';
import RoutesApp from '../../constants/routes';

interface ICarousel {
  collections: CollectionInitType[];
}

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
    marginTop: '20px',
  },
  paper: {
    position: 'absolute',
    top: 0,
    width: '40%',
    padding: '10px',
    right: 0,
    backgroundColor: alpha(theme.palette.common.white, 0.35),

    '& > *': {
      margin: '10px 0',
    },
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const CarouselComponent: FC<ICarousel> = ({ collections }) => {
  const classes = useStyles();
  return (
    <Carousel className={classes.carousel}>
      {collections.map((collection: CollectionInitType) => (
        <Link
          component={RouterLink}
          to={RoutesApp.Collections}
          key={collection.id}
        >
          <Paper className={classes.paper}>
            <Box>
              <Typography variant="body2">{collection.user.name}</Typography>
              <Typography variant="body2">{collection.user.surname}</Typography>
            </Box>
            <Typography variant="h2">{collection.title}</Typography>
            <Typography variant="h3">{collection.theme}</Typography>
            <Typography variant="body2">{collection.description}</Typography>
          </Paper>
          <Box className={classes.image}>
            <img src={collection.icon} alt={collection.title} />
          </Box>
        </Link>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
