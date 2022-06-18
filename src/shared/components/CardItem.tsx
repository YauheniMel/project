import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Chip, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TagIcon from '@mui/icons-material/Tag';
import { makeStyles } from '@material-ui/core';
import RoutesApp from '../../constants/routes';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    minWidth: '240px',
  },
});

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

  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={handleClick}>
      <Link
        component={RouterLink}
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
        <Chip
          icon={<TagIcon />}
          variant="outlined"
          color="warning"
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          label={tag}
          onClick={handleClick}
        />
      ))}
    </Card>
  );
};

export default CardItem;
