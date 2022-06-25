import React, { FC, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Avatar, Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useDrag, useDrop } from 'react-dnd';
import { VscMove } from 'react-icons/vsc';
import RoutesApp from '../../constants/routes';
import { CollectionType } from '../../types';

interface ISlider {
  collections: CollectionType[];
  setCollection: (collection: CollectionType) => void;
}

const useStyles = makeStyles((theme) => ({
  wrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    maxWidth: '300px',
    maxHeight: '320px',
    overflow: 'hidden',

    '&:hover': {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: theme.palette.primary.light,
    },
  },
  link: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

const Slider: FC<ISlider> = ({ collections, setCollection }) => {
  const [showImage, setShowImage] = useState<number>(0);
  const classes = useStyles();
  useDrop({
    accept: 'Our first type',
    hover(item, monitor) {
      console.log(item, monitor);
    },
  });
  return (
    <Box className={classes.wrap}>
      <Link
        component={RouterLink}
        className={classes.link}
        to={RoutesApp.Collections}
      >
        Show all collections...
      </Link>
      {collections.map((collection) => {
        const [{ opacity }, drag] = useDrag({
          type: 'avatar',
          item: { id: collection.id },
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
          }),
          end() {
            setShowImage(0);
          },
        });

        return (
          collection && (
            <Box key={collection.id} className={classes.card}>
              <Link
                component={RouterLink}
                to={`${RoutesApp.CollectionLink}${collection.id}`}
                onClick={() => setCollection(collection)}
              >
                <Avatar
                  src={
                    +showImage === +collection.id
                      ? `data:application/pdf;base64,${collection.icon}`
                      : null
                  }
                  sx={{
                    position: 'absolute',
                    cursor: 'move',
                    zIndex: 9999,
                    top: 0,
                    backgroundColor: 'transparent',
                  }}
                  onMouseDown={() => setShowImage(+collection.id)}
                  ref={drag}
                >
                  {+showImage === +collection.id ? '' : <VscMove />}
                </Avatar>
                <Card sx={{ opacity }} title="mmkmkmk">
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
            </Box>
          )
        );
      })}
    </Box>
  );
};

export default Slider;
