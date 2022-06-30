import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CardMedia, Link, Typography, Avatar, Box,
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core';
import { VscMove } from 'react-icons/vsc';
import MDEditor from '@uiw/react-md-editor';
import { useDrag } from 'react-dnd';
import RoutesApp from '../../../constants/routes';
import { CollectionType } from '../../../types';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '5px',
    position: 'relative',
    maxWidth: '250px',
    minWidth: '250px',
    overflow: 'hidden',

    '&:hover': {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: theme.palette.primary.light,
    },
  },
  body: {
    height: '300px',
  },
}));

interface ICardCollection {
  collection: CollectionType;
  setCollection: (collection: CollectionType) => void;
  type: 'private' | 'public';
}

const CardCollection: FC<ICardCollection> = ({
  collection,
  setCollection,
  type,
}) => {
  const [showImage, setShowImage] = useState<number>(0);

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

  const classes = useStyles();

  const src = collection.id && +showImage === +collection.id
    ? `data:application/pdf;base64,${collection.icon}`
    : null;

  return (
    <Box className={classes.card}>
      <Link
        component={RouterLink}
        to={`${RoutesApp.CollectionLink}${collection.id}`}
        onClick={() => setCollection(collection)}
      >
        {type !== 'public' && (
          <Avatar
            src={src?.toString()}
            sx={{
              position: 'absolute',
              cursor: 'grab',
              top: 0,
              backgroundColor: 'transparent',
            }}
            onMouseDown={() => {
              if (collection.id) setShowImage(+collection.id);
            }}
            ref={drag}
          >
            {collection.id && +showImage === +collection.id ? (
              ''
            ) : (
              <VscMove size="30" />
            )}
          </Avatar>
        )}
        <Card variant="outlined" sx={{ opacity }} className={classes.body}>
          {collection.icon ? (
            <CardMedia
              component="img"
              height="194"
              image={`data:application/pdf;base64,${collection.icon}`}
              alt="Paella dish"
            />
          ) : (
            <Typography variant="body2">Without photo</Typography>
          )}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {collection.theme}
            </Typography>
            <MDEditor.Markdown
              source={collection.description?.replace(/&&#&&/gim, '\n')}
            />
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default CardCollection;
