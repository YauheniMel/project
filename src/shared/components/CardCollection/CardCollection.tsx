import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CardMedia, Link, Typography, Avatar, Box, alpha,
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core';
import { VscMove } from 'react-icons/vsc';
import MDEditor from '@uiw/react-md-editor';
import { styled } from '@mui/material/styles';
import { useDrag } from 'react-dnd';
import RoutesApp from '../../../constants/routes';
import { CollectionType } from '../../../types';

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: '12rem',
  width: '12rem',
  height: '15rem',
  overflow: 'auto',
  borderRadius: 0,
  backgroundColor: theme.palette.common.white,

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
}));

const useStyles = makeStyles({
  card: {
    margin: '0.3rem',
    position: 'relative',
    maxWidth: '12rem',
    minWidth: '12rem',
    overflow: 'hidden',
    borderRadius: 0,
  },
  body: {
    height: '20rem',
  },
});

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
            onMouseUp={() => {
              if (collection.id) setShowImage(0);
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
        <StyledCard variant="outlined" sx={{ opacity }}>
          {collection.icon ? (
            <CardMedia
              component="img"
              height="194"
              image={`data:application/pdf;base64,${collection.icon}`}
              alt={collection.title?.toString()}
            />
          ) : (
            <Typography variant="body2">Without photo</Typography>
          )}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {collection.theme}
            </Typography>
            <MDEditor.Markdown
              style={{
                backgroundColor: 'transparent',
              }}
              source={collection.description?.replace(/&&#&&/gim, '\n')}
            />
          </CardContent>
        </StyledCard>
      </Link>
    </Box>
  );
};

export default CardCollection;
