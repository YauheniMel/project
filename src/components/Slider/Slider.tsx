import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import RoutesApp from '../../constants/routes';
import { CollectionType } from '../../types';

interface ISlider {
  collections: CollectionType[];
  setCollection: (collection: CollectionType) => void;
}

const useStyles = makeStyles({
  wrap: {
    position: 'relative',
    display: 'flex',
    maxWidth: '100%',
    overflowX: 'auto',
    alignItems: 'center',
  },
  card: {
    minWidth: '200px',
  },
  link: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

const Slider: FC<ISlider> = ({ collections, setCollection }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrap}>
      <Link
        component={RouterLink}
        className={classes.link}
        to={RoutesApp.Collections}
      >
        Show all collections...
      </Link>
      {collections.map(
        (collection) => collection && (
        <Link
          component={RouterLink}
          to={`${RoutesApp.CollectionLink}${collection.id}`}
          key={collection.id}
          onClick={() => setCollection(collection)}
        >
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="194"
              image={`data:application/pdf;base64,${collection.icon}`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {collection.theme}
              </Typography>
              <MDEditor.Markdown
                source={collection.description?.replace(/&/gim, '\n')}
              />
            </CardContent>
          </Card>
        </Link>
        ),
      )}
    </Box>
  );
};

export default Slider;
