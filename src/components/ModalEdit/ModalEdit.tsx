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

interface IModalEdit {
  type: 'items' | 'collections';
  openModal: boolean;
  setOpen: (state: boolean) => void;
  editCollections?: Array<CollectionType | null>;
  editItems?: Array<ItemType | null>;
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

const ModalEdit: FC<IModalEdit> = ({
  type,
  openModal,
  setOpen,
  editCollections,
  editItems,
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
          {editCollections?.map((collection) => (collection ? (
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
              <Button color="warning">Update</Button>
              <Button>Pull out</Button>
            </ListItem>
          ) : (
            <Box>Empty</Box>
          )))}
          {editItems?.map((item) => (item ? (
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
              <Button color="warning">Update</Button>
              <Button>Pull out</Button>
            </ListItem>
          ) : (
            <Box>Empty</Box>
          )))}
        </List>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
