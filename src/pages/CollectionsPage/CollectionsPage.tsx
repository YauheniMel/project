import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Collection from '../../shared/Collection/Collection';
import { AllCollectionsType, CollectionInitType } from '../../types';

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
        <Collection collections={myCollections} getCollection={getCollection} />
      </Box>
    )}
    {collections.map((collection) => (
      <Box key={collection.user.id}>
        <Typography variant="h3">
          {collection.user.name}
          {' '}
          {collection.user.surname}
        </Typography>
        <Collection
          collections={collection.collections}
          getCollection={getCollection}
        />
      </Box>
    ))}
  </>
);

export default CollectionsPage;
