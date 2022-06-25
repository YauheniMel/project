import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CardMedia, Chip, Link, Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import TagIcon from '@mui/icons-material/Tag';
import { makeStyles } from '@material-ui/core';
import RoutesApp from '../../constants/routes';
import { ItemType } from '../../types';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    minWidth: '240px',
  },
});

interface ICardItem {
  item: ItemType;
  setTargetItem: (item: ItemType) => void;
}

const CardItem: FC<ICardItem> = ({ item, setTargetItem }) => {
  function handleClick() {
    setTargetItem(item);
  }

  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={handleClick}>
      <Link
        component={RouterLink}
        to={`${RoutesApp.CollectionLink}${item.collectionId}${RoutesApp.ItemLink}${item.id}`}
      >
        <Typography variant="h4" sx={{ fontSize: 'md', mt: 2 }}>
          {item.title}
        </Typography>
      </Link>
      <Typography
        variant="body2"
        sx={{ fontWeight: 'md', color: 'text.secondary' }}
      >
        {item.countLike ? item.countLike.length : 0}
        {' '}
        likes
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={`data:application/pdf;base64,${item.icon}`}
        alt="Paella dish"
      />
      <Typography
        variant="body2"
        sx={{ fontWeight: 'md', color: 'text.secondary' }}
      >
        {item.createdAt}
      </Typography>
      {item.tags?.split(',').map((tag, idx: any) => (
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
