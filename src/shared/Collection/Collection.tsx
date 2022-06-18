import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import RoutesApp from '../../constants/routes';
import { CollectionInitType } from '../../types';

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

export default Collection;
