import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { CollectionType } from '../../types';
import Slider from '../../components/Slider/Slider';

interface ITargetCollectionsPage {
  setTargetCollection: (collectionId: CollectionType) => void;
  targetCollections: {
    name: string;
    id: number;
    surname: string;
    collections: CollectionType[];
  } | null;
  getTargetCollections: (userId: number, page?: number) => void;
}

const TargetCollectionsPage: FC<ITargetCollectionsPage> = ({
  targetCollections,
  setTargetCollection,
  getTargetCollections,
}) => {
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      if (!targetCollections) getTargetCollections(+userId);
    }
  }, []);

  return (
    <Box>
      {targetCollections?.collections && (
        <Slider
          id={targetCollections.id}
          collections={targetCollections.collections}
          setCollection={setTargetCollection}
          getUserCollections={getTargetCollections}
        />
      )}
    </Box>
  );
};

export default TargetCollectionsPage;
