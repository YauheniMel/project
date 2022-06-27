import React, { FC, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {
  Avatar, Box, Button, Link,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import MDEditor from '@uiw/react-md-editor';
import { useDrag } from 'react-dnd';
import { Link as RouterLink } from 'react-router-dom';
import { VscMove } from 'react-icons/vsc';
import RoutesApp from '../../constants/routes';
import { CollectionType } from '../../types';

interface ISlider {
  id: number;
  collections: CollectionType[];
  setCollection: (collection: CollectionType) => void;
  getUserCollections: (userId: number, page?: number) => void;
}

const useStyles = makeStyles((theme) => ({
  wrap: {
    position: 'relative',
  },
  sliderX: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
  },
  sliderY: {
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: '400px',
    alignItems: 'center',
    overflowY: 'auto',
  },
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

const Slider: FC<ISlider> = ({
  collections,
  setCollection,
  getUserCollections,
  id,
}) => {
  const [showAllCollections, setShowAllCollections] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<number>(0);
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      {!showAllCollections ? (
        <Button
          sx={{
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            right: 0,
          }}
          variant="contained"
          onClick={() => {
            setShowAllCollections(true);
            getUserCollections(id, 2);
          }}
        >
          All...
        </Button>
      ) : (
        <Button
          sx={{
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            right: 0,
          }}
          variant="contained"
          onClick={() => setShowAllCollections(false)}
        >
          Hidden...
        </Button>
      )}
      <Box className={showAllCollections ? classes.sliderY : classes.sliderX}>
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
          const src = collection.id && +showImage === +collection.id
            ? `data:application/pdf;base64,${collection.icon}`
            : null;
          return (
            collection && (
              <Box key={collection.id} className={classes.card}>
                <Link
                  component={RouterLink}
                  to={`${RoutesApp.CollectionLink}${collection.id}`}
                  onClick={() => setCollection(collection)}
                >
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
                  <Card
                    variant="outlined"
                    sx={{ opacity }}
                    className={classes.body}
                  >
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
    </Box>
  );
};

export default Slider;
