import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { CollectionType } from '../../types';
import Slider from '../../components/Slider/Slider';

interface ICollectionsPage {
  collections: CollectionType[] | null;
  myCollections: CollectionType[] | null;
  setCollection: (collectionId: CollectionType) => void;
}

const CollectionsPage: FC<ICollectionsPage> = ({
  collections,
  myCollections,
  setCollection,
}) => (
  <>
    {myCollections && (
      <Box>
        <Typography variant="h3">My collections</Typography>
        <Slider collections={myCollections} setCollection={setCollection} />
      </Box>
    )}
    {collections && (
      <Box>
        {JSON.stringify(collections, null, 2)}
        <Typography variant="h3">My collections</Typography>
        <Slider collections={collections} setCollection={setCollection} />
      </Box>
    )}
  </>
);

export default CollectionsPage;
