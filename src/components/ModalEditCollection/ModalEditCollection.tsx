import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  ListItem,
  List,
  ListSubheader,
  Button,
  Typography,
} from '@mui/material';
import { Backdrop, makeStyles, Paper } from '@material-ui/core';
import { FormikProvider, useFormik } from 'formik';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { CollectionType } from '../../types';
import UpdateFormField from '../UpdateFormField/UpdateFormField';

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.drawer + 1,
  top: 0,
  right: 0,
  maxWidth: '3.2rem',
  maxHeight: '3.2rem',
  minWidth: '3.2rem',
  minHeight: '3.2rem',
  backgroundColor: theme.palette.primary.dark,
  borderRadius: 0,
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
    height: '300px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1.4rem',
    padding: '0 1.4rem',
    width: '100%',
    flex: 1,

    '& > *': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  action: {
    display: 'flex',
    width: '100%',
    position: 'sticky',
    bottom: 0,
    backgroundColor: theme.palette.common.white,
  },
}));

interface IModalEditCollection {
  openModal: boolean;
  setOpen: (state: boolean) => void;
  collectionsEdit: Array<CollectionType | null>;
  updateCollection: (collection: any) => void;
  pullOutCollection: (collectionId: number) => void;
  collectionThemes: { id: number; value: string }[] | null;
}

const ModalEditCollection: FC<IModalEditCollection> = ({
  openModal,
  setOpen,
  collectionsEdit,
  updateCollection,
  pullOutCollection,
  collectionThemes,
}) => {
  const [image, setImage] = useState<any>();
  const [description, setDescription] = useState<any>('');
  const [collectionId, setCollectionId] = useState<any>('');

  console.log(collectionThemes);

  useEffect(() => {
    if (!collectionsEdit.length) setOpen(false);
  }, [collectionsEdit]);

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
    <Backdrop className={classes.back} open={openModal}>
      <Paper className={classes.paper}>
        <StyledButton onClick={() => setOpen(false)} variant="contained">
          <CloseIcon fontSize="large" />
        </StyledButton>
        <List
          sx={{
            bgcolor: 'background.paper',
            overflow: 'auto',
            paddingBottom: 0,
            width: '100%',
            height: {
              sm: '100%',
              '*': '300px',
            },
          }}
          subheader={<li />}
        >
          <FormikProvider value={formik}>
            <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
              {collectionsEdit?.map(
                (collection) => collection && (
                <ListItem
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                  }}
                  key={collection.id}
                >
                  <ListSubheader
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: '1000',
                      width: '100%',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Typography variant="h4">{collection.title}</Typography>
                    <Typography variant="subtitle1">
                      Created:
                      {' '}
                      {moment(collection.createdAt).format('DD MMMM YYYY')}
                    </Typography>
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
                  <Box className={classes.action}>
                    <Button
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        setCollectionId(collection.id);
                        formik.handleSubmit();
                      }}
                      color="warning"
                    >
                      Update
                    </Button>
                    <Button
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        if (collection.id) {
                          pullOutCollection(collection.id);
                        }
                      }}
                    >
                      Pull out
                    </Button>
                  </Box>
                </ListItem>
                ),
              )}
            </form>
          </FormikProvider>
        </List>
      </Paper>
    </Backdrop>
  );
};

export default ModalEditCollection;
