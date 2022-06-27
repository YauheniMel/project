import React, { FC } from 'react';
import {
  Box,
  ListItem,
  List,
  Modal,
  ListSubheader,
  Button,
} from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import { CollectionType, ItemType } from '../../types';

interface IModalDelete {
  openModal: boolean;
  type: 'items' | 'collections';
  setOpen: (state: boolean) => void;
  deleteCollections?: Array<CollectionType | null>;
  deleteItems?: Array<ItemType | null>;
  pullOutCollection?: (collectionId: number) => void;
  deleteCollection?: (collectionId: number) => void;
  pullOutItem?: (itemId: number) => void;
  deleteItem?: (itemId: number) => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: 400,
  overflow: 'scroll',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const ModalDelete: FC<IModalDelete> = ({
  openModal,
  setOpen,
  deleteCollections,
  deleteItems,
  type,
  pullOutCollection,
  deleteCollection,
  pullOutItem,
  deleteItem,
}) => {
  console.log(type);
  return (
    <Modal
      open={openModal}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
          {deleteCollections?.map((collection) => (collection ? (
            <ListItem
              sx={{ display: 'flex', flexDirection: 'column' }}
              key={collection.id}
            >
              <ListSubheader sx={{ backgroundColor: 'red' }}>
                {collection.theme}
              </ListSubheader>
              <ListItem key={`Collection-${collection.createdAt}`}>
                <MDEditor.Markdown
                  source={collection.description!.replace(/&/gim, '\n')}
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
          ) : (
            <Box>Empty</Box> // it doesn't work
          )))}
          {deleteItems?.map((item) => (item ? (
            <ListItem
              sx={{ display: 'flex', flexDirection: 'column' }}
              key={item.id}
            >
              <ListSubheader sx={{ backgroundColor: 'red' }}>
                {item.title}
              </ListSubheader>
              <ListItem key={`Collection-${item.createdAt}`}>
                {item.createdAt}
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
          ) : (
            <Box>Empty</Box> // it doesn't work
          )))}
        </List>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
