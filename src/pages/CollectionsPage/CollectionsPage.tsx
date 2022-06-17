import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import RoutesApp from '../../constants/routes';
import { AllCollectionsType, CollectionInitType } from '../../types';

interface ICollectionsPage {
  collections: AllCollectionsType[];
  myCollections: Array<CollectionInitType | null>;
  getCollection: (id: string, userId: string) => void;
}

interface ICollection {
  collections: CollectionInitType[];
  getCollection: (id: string, userId: string) => void;
}

const Collection: FC<ICollection> = ({ collections, getCollection }) => (
  <>
    {collections.map((collection) => (
      <Link
        to={`${RoutesApp.CollectionLink}id-${collection.id}`}
        key={collection.id}
        onClick={() => getCollection(collection.id, collection.user.id)}
      >
        <Card>
          <CardMedia
            component="img"
            height="194"
            image={collection.icon}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {collection.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {collection.theme}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {collection.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    ))}
  </>
);

const CollectionsPage: FC<ICollectionsPage> = ({
  collections,
  getCollection,
  myCollections,
}) => (
  <>
    {myCollections[0] && (
      <Box>
        <Typography variant="h3">My collections</Typography>
        <Collection
          collections={myCollections as CollectionInitType[]}
          getCollection={getCollection}
        />
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
