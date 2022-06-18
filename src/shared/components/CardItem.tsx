import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import { Chip, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import RoutesApp from '../../constants/routes';

interface ICardItem {
  id: string;
  title: string;
  tags: string[] | null;
  collection: {
    id: string;
    title: string;
    theme: string;
  };
  meta: {
    createAt: string;
    updateAt: string;
  };
  countLike: string[] | null;
  setTargetItem: (id: string) => void;
}

const CardItem: FC<ICardItem> = ({
  id,
  title,
  tags,
  meta,
  countLike,
  setTargetItem,
  collection,
}) => {
  function handleClick() {
    setTargetItem(id);
  }

  return (
    <Card onClick={handleClick}>
      <Link
        to={`${RoutesApp.CollectionLink}id-${collection.id}${RoutesApp.ItemLink}id-${id}`}
      >
        <Typography variant="h4" sx={{ fontSize: 'md', mt: 2 }}>
          {title}
        </Typography>
      </Link>

      <Typography
        variant="body2"
        sx={{ fontWeight: 'md', color: 'text.secondary' }}
      >
        {countLike ? countLike.length : 0}
        {' '}
        likes
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: 'md', color: 'text.secondary' }}
      >
        {meta.createAt}
      </Typography>
      {tags?.map((tag, idx: any) => (
        // eslint-disable-next-line react/no-array-index-key
        <Chip key={idx} label={tag} onClick={handleClick} />
      ))}
    </Card>
  );
};

export default CardItem;
