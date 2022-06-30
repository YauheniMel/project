import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { CollectionType } from '../../types';
import CardCollection from '../../shared/components/CardCollection/CardCollection';

interface ISlider {
  id: number;
  collections: CollectionType[];
  setCollection: (collection: CollectionType) => void;
  getUserCollections: (userId: number, page?: number) => void;
  type?: 'private' | 'public';
}

const useStyles = makeStyles({
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
});

const Slider: FC<ISlider> = ({
  type = 'public',
  collections,
  getUserCollections,
  id,
  setCollection,
}) => {
  const [showAllCollections, setShowAllCollections] = useState<boolean>(false);
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
          onClick={() => {
            // need only action, without thunk
            getUserCollections(id);

            setShowAllCollections(false);
          }}
        >
          Hidden...
        </Button>
      )}
      <Box className={showAllCollections ? classes.sliderY : classes.sliderX}>
        {collections.map(
          (collection) => collection && (
          <CardCollection
            key={collection.id}
            collection={collection}
            type={type}
            setCollection={setCollection}
          />
          ),
        )}
      </Box>
    </Box>
  );
};

export default Slider;
