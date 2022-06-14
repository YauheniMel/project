import React, { FC } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ICardItem {
  props?: any;
}

const list = [
  { id: 1, title: 'Park', count_like: 2 },
  { id: 2, title: 'Park', count_like: 0 },
  { id: 3, title: 'Park', count_like: 1 },
  { id: 4, title: 'Park', count_like: 3 },
  { id: 5, title: 'Park', count_like: 5 },
];

const CardItem: FC<ICardItem> = () => (
  <>
    {list.map((item: any) => (
      <Card variant="outlined" key={item.id}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
              alt={item.title}
            />
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
          <Link href="#multiple-actions" overlay underline="none">
            {item.title}
          </Link>
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          <Link href="#multiple-actions">California</Link>
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
            {item.count_like}
            {' '}
            likes
          </Typography>
          <Typography
            level="body3"
            sx={{ fontWeight: 'md', color: 'text.secondary' }}
          >
            1 hour ago
          </Typography>
        </CardOverflow>
      </Card>
    ))}
  </>
);

export default CardItem;
