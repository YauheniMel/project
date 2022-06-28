import React, { FC, useState } from 'react';
import {
  Box,
  ListItem,
  List,
  Modal,
  ListSubheader,
  Button,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { FormikProvider, useFormik } from 'formik';
import moment from 'moment';
import { CollectionType } from '../../types';
import UpdateFormField from '../UpdateFormField/UpdateFormField';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '50px',
    padding: 0,

    '& > *': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

interface IModalEditCollection {
  openModal: boolean;
  setOpen: (state: boolean) => void;
  editCollections: Array<CollectionType | null>;
  updateCollection: (collection: any) => void;
  pullOutCollection: (collectionId: number) => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const ModalEditCollection: FC<IModalEditCollection> = ({
  openModal,
  setOpen,
  editCollections,
  updateCollection,
  pullOutCollection,
}) => {
  const [image, setImage] = useState<any>();
  const [description, setDescription] = useState<any>('');
  const [collectionId, setCollectionId] = useState<any>('');

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      theme: '',
      collectionId: '',
      numberKey1: '',
      numberKey2: '',
      numberKey3: '',
      checkboxKey1: { field: '', count: 1, values: [''] },
      checkboxKey2: { field: '', count: 1, values: [''] },
      checkboxKey3: { field: '', count: 1, values: [''] },
      dateKey1: '',
      dateKey2: '',
      dateKey3: '',
      multiLineKey1: '',
      multiLineKey2: '',
      multiLineKey3: '',
      textKey1: '',
      textKey2: '',
      textKey3: '',
    },
    onSubmit: (values) => {
      updateCollection({
        collectionId,
        icon: image,
        description: description.replace(/\n/gim, '&&#&&'),
        theme: values.theme,
        numberKey1: values.numberKey1 ? values.numberKey1 : null,
        numberKey2: values.numberKey2 ? values.numberKey2 : null,
        numberKey3: values.numberKey3 ? values.numberKey3 : null,
        dateKey1: values.dateKey1 ? values.dateKey1 : null,
        dateKey2: values.dateKey2 ? values.dateKey2 : null,
        dateKey3: values.dateKey3 ? values.dateKey3 : null,
        multiLineKey1: values.multiLineKey1 ? values.multiLineKey1 : null,
        multiLineKey2: values.multiLineKey2 ? values.multiLineKey2 : null,
        multiLineKey3: values.multiLineKey3 ? values.multiLineKey3 : null,
        textKey1: values.textKey1 ? values.textKey1 : null,
        textKey2: values.textKey2 ? values.textKey2 : null,
        textKey3: values.textKey3 ? values.textKey3 : null,
        checkboxKey1: values.checkboxKey1.field
          ? `${values.checkboxKey1.field}:${values.checkboxKey1.values}`
          : null,
        checkboxKey2: values.checkboxKey2.field
          ? `${values.checkboxKey2.field}:${values.checkboxKey2.values}`
          : null,
        checkboxKey3: values.checkboxKey3.field
          ? `${values.checkboxKey3.field}:${values.checkboxKey3.values}`
          : null,
      });

      // resetForm({
      //   values: {
      //     theme: '',
      //     numbers: [''],
      //     dates: [''],
      //     texts: [''],
      //     multiLines: [''],
      //     checkboxes: [{ field: '', count: 1, values: [''] }],
      //   },
      // });

      // setOpen(false);
    },
    // onReset: () => {
    //   setDescription('');
    // },
  });

  return (
    <Modal
      open={openModal}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormikProvider value={formik}>
        <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
          <Box sx={style}>
            <List
              sx={{
                bgcolor: 'background.paper',

                overflow: 'auto',
                minHeight: 200,
                maxHeight: '80vh',
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
                  <Box className={classes.listItem}>
                    <UpdateFormField
                      formik={formik}
                      value={collection.theme}
                      field="theme"
                    />
                    <Typography variant="body2">
                      Created:
                      {' '}
                      {moment(collection.createdAt).format('DD MMMM YYYY')}
                    </Typography>
                    <UpdateFormField
                      formik={formik}
                      value={collection.icon}
                      field="icon"
                      image={image}
                      setImage={setImage}
                    />
                    <Typography variant="body2">
                      Updated:
                      {' '}
                      {moment(collection.updatedAt).format('DD MMMM YYYY')}
                    </Typography>
                    <UpdateFormField
                      formik={formik}
                      value={collection.checkboxKey1}
                      field="checkboxKey1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.checkboxKey2}
                      field="checkboxKey2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.checkboxKey3}
                      field="checkboxKey3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.dateKey1}
                      field="dateKey1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.dateKey2}
                      field="dateKey2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.dateKey3}
                      field="dateKey3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.multiLineKey1}
                      field="multiLineKey1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.multiLineKey2}
                      field="multiLineKey2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.multiLineKey3}
                      field="multiLineKey3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.textKey1}
                      field="textKey1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.textKey2}
                      field="textKey2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.textKey3}
                      field="textKey3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.numberKey1}
                      field="numberKey1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.numberKey2}
                      field="numberKey2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.numberKey3}
                      field="numberKey3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={collection.description}
                      field="description"
                      setDescription={setDescription}
                      description={description}
                    />
                  </Box>
                  <Button
                    onClick={() => {
                      setCollectionId(collection.id);
                      formik.handleSubmit();
                    }}
                    color="warning"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => {
                      if (collection.id) pullOutCollection(collection.id);
                    }}
                  >
                    Pull out
                  </Button>
                </ListItem>
              ) : (
                <Box>Empty</Box>
              )))}
            </List>
          </Box>
        </form>
      </FormikProvider>
    </Modal>
  );
};

export default ModalEditCollection;
