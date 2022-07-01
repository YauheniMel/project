import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CardMedia, Checkbox, Chip, Link, Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import TagIcon from '@mui/icons-material/Tag';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import RoutesApp from '../../../constants/routes';
import { ItemType } from '../../../types';

const useStyles = makeStyles({
  card: {
    padding: '5px',
    minWidth: '240px',
  },
});

interface ICardItem {
  item: ItemType;
  toogleLike: (userId: number, itemId: number) => void;
  userId: number;
  likes: { itemId: number }[] | null;
}

const CardItem: FC<ICardItem> = ({
  item, toogleLike, userId, likes,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
        {item.likes ? item.likes.length : 0}
        {' '}
        likes
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={`data:application/pdf;base64,${item.icon}`}
        alt="Paella dish"
      />
      <Checkbox
        checked={!!likes?.find((like) => like.itemId === item.id)}
        color="error"
        icon={<FavoriteBorder color="error" />}
        checkedIcon={<Favorite color="error" />}
        onChange={() => {
          if (userId && item.id) {
            toogleLike(userId, item.id);
          }
        }}
      />
      <Typography
        variant="body2"
        sx={{ fontWeight: 'md', color: 'text.secondary' }}
      >
        Created:
        {' '}
        {moment(item.createdAt).format('DD MMMM YYYY')}
      </Typography>
      {item.tags?.map((tag, idx: any) => (
        <Chip
          icon={<TagIcon />}
          variant="outlined"
          color="warning"
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          label={tag.content}
        />
      ))}
    </Card>
  );
};

export default CardItem;
