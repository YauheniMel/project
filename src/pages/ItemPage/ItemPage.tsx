import React, { FC, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import moment from 'moment';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { ItemType } from '../../types';

interface IItemPage {
  userId: number;
  isAuth: boolean;
  targetItem: ItemType;
  getTargetItem: (itemId: number, collectionId: number) => void;
  toogleLike: (userId: number, itemId: number) => void;
  likes: { itemId: number }[] | null;
  getAllComments: (itemId: number) => void;
  leaveComment: (content: string, userId: number, itemId: number) => void;
  setCommentsTouched: (itemId: number) => void;
}

const ItemPage: FC<IItemPage> = ({
  targetItem,
  getTargetItem,
  toogleLike,
  userId,
  likes,
  isAuth,
  getAllComments,
  leaveComment,
  setCommentsTouched,
}) => {
  const [value, setValue] = useState<string>('');

  const { collectionId, itemId } = useParams();

  useEffect(() => {
    if (collectionId && itemId) {
      if (!targetItem) getTargetItem(+itemId, +collectionId);
    }
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (value.trim()) {
      leaveComment(value, userId, targetItem.id);
      setValue('');
    }
  }

  return (
    <Grid sx={{ height: '100%' }} container>
      {targetItem && (
        <Box sx={{ flex: 1 }}>
          <Checkbox
            checked={!!likes?.find((like) => like.itemId === targetItem.id)}
            color="error"
            icon={<FavoriteBorder color="error" />}
            checkedIcon={<Favorite color="error" />}
            onChange={() => {
              if (userId && targetItem.id) {
                toogleLike(userId, targetItem.id);
              }
            }}
          />
          <Typography variant="h2">{targetItem.title}</Typography>
          <Typography variant="body1">
            {targetItem.likes ? targetItem.likes.length : 0}
            {' '}
            likes
          </Typography>
          <Typography variant="body1">
            Created:
            {' '}
            {moment(targetItem.createdAt).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body1">
            Updated:
            {' '}
            {moment(targetItem.updatedAt).format('DD MMMM YYYY')}
          </Typography>
          <Avatar
            src={`data:application/pdf;base64,${targetItem.icon}`}
            sx={{ width: '10rem', height: '10rem' }}
          />
          <hr />
          <Typography variant="h2">Comments</Typography>
          <Button
            onClick={() => {
              if (itemId) {
                getAllComments(+itemId);
                setCommentsTouched(+itemId);
              }
            }}
          >
            Show comments
          </Button>
          {isAuth && (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  columnGap: '0.7rem',
                }}
              >
                <TextareaAutosize
                  style={{ flex: 1 }}
                  placeholder="Leave comments..."
                  required
                  value={value}
                  onChange={(e: any) => setValue(e.target.value)}
                />
                <Button type="submit">Send</Button>
              </Box>
            </form>
          )}
          <hr />
          {targetItem.comments
            && targetItem.comments.map((comment) => (
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor:
                    comment.status === 'untouched' ? 'gray' : 'none',
                }}
                key={comment.createdAt}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                  variant="body2"
                >
                  Created:
                  {' '}
                  {moment(comment.createdAt).format('DD MMMM YYYY')}
                </Typography>
                {comment.user.id !== userId ? (
                  <Typography variant="body2">
                    {comment.user.name}
                    {' '}
                    {comment.user.surname}
                  </Typography>
                ) : (
                  <Typography variant="body2">My comment</Typography>
                )}
                <Typography variant="body2">{comment.content}</Typography>
              </Box>
            ))}
        </Box>
      )}
    </Grid>
  );
};

export default ItemPage;
