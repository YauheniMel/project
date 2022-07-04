import React, { FC } from 'react';
import {
  ListItem, List, ListSubheader, Button,
} from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, makeStyles, Paper } from '@material-ui/core';
import { CollectionType, ItemType } from '../../types';

const StuledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.drawer + 1,
  top: 0,
  right: 0,
  height: '55px',
  width: '55px',
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '0px',
  color: theme.palette.common.white,
}));

const useStyles = makeStyles((theme) => ({
  back: {
    zIndex: theme.zIndex.drawer + 2,
  },
  paper: {
    position: 'relative',
    width: '60%',
    minWidth: '300px',
    padding: '20px 0',
    height: '300px',
  },
}));

interface IModalDelete {
  openModal: boolean;
  setOpen: (state: boolean) => void;
  deleteCollections?: Array<CollectionType | null>;
  deleteItems?: Array<ItemType | null>;
  pullOutCollection?: (collectionId: number) => void;
  deleteCollection?: (collectionId: number) => void;
  pullOutItem?: (itemId: number) => void;
  deleteItem?: (itemId: number) => void;
}

const ModalDelete: FC<IModalDelete> = ({
  openModal,
  setOpen,
  deleteCollections,
  deleteItems,
  pullOutCollection,
  deleteCollection,
  pullOutItem,
  deleteItem,
}) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.back} open={openModal}>
      <Paper className={classes.paper}>
        <StuledButton onClick={() => setOpen(false)} variant="contained">
          <CloseIcon fontSize="large" />
        </StuledButton>
        <List
          sx={{
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 200,
            maxWidth: 410,
            m: 1,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {deleteCollections?.map(
            (collection) => collection && (
            <ListItem
              sx={{ display: 'flex', flexDirection: 'column' }}
              key={collection.id}
            >
              <ListSubheader sx={{ backgroundColor: 'red' }}>
                {collection.theme}
              </ListSubheader>
              <ListItem key={`Collection-${collection.createdAt}`}>
                <MDEditor.Markdown
                  source={collection.description!.replace(/&&#&&/gim, '\n')}
                />
              </ListItem>
              <Button
                onClick={() => {
                  if (collection.id) deleteCollection!(collection.id);
                }}
                color="error"
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  if (collection.id) pullOutCollection!(collection.id);
                }}
              >
                Pull out
              </Button>
            </ListItem>
            ),
          )}
          {deleteItems?.map(
            (item) => item && (
            <ListItem
              sx={{ display: 'flex', flexDirection: 'column' }}
              key={item.id}
            >
              <ListSubheader sx={{ backgroundColor: 'red' }}>
                {item.title}
              </ListSubheader>
              <ListItem key={`Collection-${item.createdAt}`}>
                Created:
                {' '}
                {moment(item.createdAt).format('DD MMMM YYYY')}
              </ListItem>
              <Button
                onClick={() => {
                  if (item.id) deleteItem!(item.id);
                }}
                color="warning"
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  if (item.id) pullOutItem!(item.id);
                }}
              >
                Pull out
              </Button>
            </ListItem>
            ),
          )}
        </List>
      </Paper>
    </Backdrop>
  );
};

export default ModalDelete;
