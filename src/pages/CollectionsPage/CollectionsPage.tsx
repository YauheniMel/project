import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { CollectionType } from '../../types';
import Slider from '../../components/Slider/Slider';

interface ICollectionsPage {
  id: number;
  allCollections:
  | {
    id: number;
    name: string;
    surname: string;
    collections: CollectionType[] | null;
  }[]
  | null;
  myCollections: CollectionType[] | null;
  setCollection: (collectionId: CollectionType) => void;
  getMyCollections: (userId: number, page?: number) => void;
  getUserCollections: (userId: number, page?: number) => void;
}

const CollectionsPage: FC<ICollectionsPage> = ({
  id,
  allCollections,
  myCollections,
  setCollection,
  getUserCollections,
  getMyCollections,
}) => {
  console.log(myCollections);
  return (
    <>
      {!!myCollections?.length && (
        <Box>
          <Typography variant="h3">My collections</Typography>
          <Slider
            id={id}
            collections={myCollections}
            setCollection={setCollection}
            getUserCollections={getMyCollections}
          />
        </Box>
      )}
      {allCollections?.map(
        (user) => !!user.collections?.length && (
        <Box key={user.id}>
          <Typography variant="h3">{user.name}</Typography>
          <Typography variant="h3">{user.surname}</Typography>
          {user.collections && (
          <Slider
            id={user.id}
            collections={user.collections}
            setCollection={setCollection}
            getUserCollections={getUserCollections}
          />
          )}
        </Box>
        ),
      )}
    </>
  );
};

export default CollectionsPage;
