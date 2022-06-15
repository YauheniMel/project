import React, { FC } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import RoutesApp from '../../constants/routes';

interface ICardItem {
  id: string;
  title: string;
  tags: Array<string | null>;
  meta: {
    createAt: string;
    updateAt: string;
  };
  icon: string;
  countLike: number;
  customField: {
    [type: string]: string | number | boolean;
  } | null;
  setTargetItem: (id: string) => void;
}

const CardItem: FC<ICardItem> = ({
  id,
  title,
  tags,
  meta,
  customField,
  countLike,
  icon,
  setTargetItem,
}) => {
  console.log(customField);

  function handleClick() {
    setTargetItem(id);
  }

  return (
    <Card variant="outlined" key={id} onClick={handleClick}>
      <Link to={`${RoutesApp.ItemLink}id-${id}`}>
        Link-
        {id}
      </Link>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={icon} alt={title} />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '.3rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <FavoriteBorderIcon color="error" />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        {title}
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          borderTop: '1px solid',
        }}
      >
        <Typography
          level="body3"
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {countLike}
          {' '}
          likes
        </Typography>
        <Typography
          level="body3"
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {meta.createAt}
        </Typography>
        <Typography
          level="body3"
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {meta.updateAt}
        </Typography>
        <Typography
          level="body3"
          sx={{ fontWeight: 'md', color: 'text.secondary' }}
        >
          {tags}
        </Typography>
      </CardOverflow>
    </Card>
  );
};

export default CardItem;
