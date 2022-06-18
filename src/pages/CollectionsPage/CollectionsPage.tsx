import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { AllCollectionsType, CollectionInitType } from '../../types';
import Slider from '../../components/Slider/Slider';

interface ICollectionsPage {
  collections: AllCollectionsType[];
  myCollections: CollectionInitType[] | null;
  getCollection: (id: string, userId: string) => void;
}

const CollectionsPage: FC<ICollectionsPage> = ({
  collections,
  getCollection,
  myCollections,
}) => (
  <>
    {myCollections && (
      <Box>
        <Typography variant="h3">My collections</Typography>
        <Slider collections={myCollections} getCollection={getCollection} />
      </Box>
    )}
    {collections.map((collection) => (
      <Box key={collection.user.id}>
        <Typography variant="h3">
          {collection.user.name}
          {' '}
          {collection.user.surname}
        </Typography>
        <Slider
          collections={collection.collections}
          getCollection={getCollection}
        />
      </Box>
    ))}
  </>
);

export default CollectionsPage;
