import React, { FC } from 'react';
import {
  CardMedia, makeStyles, Paper, Typography,
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import MDEditor from '@uiw/react-md-editor';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, Box, Link } from '@mui/material';
import moment from 'moment';
import RoutesApp from '../../constants/routes';
import { CollectionType } from '../../types';

interface ICarousel {
  collections: CollectionType[] | null;
}

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
    marginTop: '20px',
    padding: '40px',
  },
  paper: {
    position: 'absolute',
    top: 0,
    padding: '10px',
    right: 0,
    backgroundColor: alpha(theme.palette.common.white, 0.35),

    '& > *': {
      margin: '10px 0',
    },
  },
}));

const CarouselComponent: FC<ICarousel> = ({ collections }) => {
  const classes = useStyles();
  return (
    <Carousel className={classes.carousel}>
      {collections?.map((collection: CollectionType) => (
        <Link
          component={RouterLink}
          to={RoutesApp.Collections}
          key={collection.id}
        >
          <Paper className={classes.paper}>
            <Box>
              <Typography variant="h3">{collection.theme}</Typography>
              <Typography variant="body2">
                Created:
                {' '}
                {moment(collection.createdAt).format('DD MMMM YYYY')}
              </Typography>
              <Typography variant="body2">
                Updated:
                {' '}
                {moment(collection.updatedAt).format('DD MMMM YYYY')}
              </Typography>
              <MDEditor.Markdown
                source={collection.description?.replace(/&&#&&/gim, '\n')}
              />
            </Box>
          </Paper>
          <CardMedia
            component="img"
            height="194"
            image={`data:application/pdf;base64,${collection.icon}`}
            alt="Paella dish"
          />
        </Link>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
