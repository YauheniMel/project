import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  ListItem,
  List,
  ListSubheader,
  Button,
  Typography,
  TextField,
  Chip,
} from '@mui/material';
import { makeStyles, Backdrop, Paper } from '@material-ui/core';
import { FormikProvider, useFormik } from 'formik';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { ItemType } from '../../types';
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

interface IModalEditItem {
  openModal: boolean;
  setOpen: (state: boolean) => void;
  itemsEdit: Array<ItemType | null>;
  pullOutItem: (itemId: number) => void;
  updateItem: (item: any) => void;
}

const ModalEditItem: FC<IModalEditItem> = ({
  openModal,
  setOpen,
  itemsEdit,
  pullOutItem,
  updateItem,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<any>();
  const [itemId, setItemId] = useState<any>('');

  const classes = useStyles();

  const handleDelete = (str: string) => {
    setTags(tags.filter((tag) => tag !== str));
  };

  useEffect(() => {
    if (!itemsEdit.length) setOpen(false);
  }, [itemsEdit]);

  const formik = useFormik({
    initialValues: {
      title: '',
      collectionId: '',
      tags: '',
      numberValue1: '',
      numberValue2: '',
      numberValue3: '',
      checkboxValue1: { field: '', count: 1, values: [''] },
      checkboxValue2: { field: '', count: 1, values: [''] },
      checkboxValue3: { field: '', count: 1, values: [''] },
      dateValue1: '',
      dateValue2: '',
      dateValue3: '',
      multiLineValue1: '',
      multiLineValue2: '',
      multiLineValue3: '',
      textValue1: '',
      textValue2: '',
      textValue3: '',
    },
    onSubmit: (values) => {
      updateItem({
        itemId,
        icon: image,
        title: values.title ? values.title : null,
        numberValue1: values.numberValue1 ? values.numberValue1 : null,
        numberValue2: values.numberValue2 ? values.numberValue2 : null,
        numberValue3: values.numberValue3 ? values.numberValue3 : null,
        dateValue1: values.dateValue1 ? values.dateValue1 : null,
        dateValue2: values.dateValue2 ? values.dateValue2 : null,
        dateValue3: values.dateValue3 ? values.dateValue3 : null,
        multiLineValue1: values.multiLineValue1 ? values.multiLineValue1 : null,
        multiLineValue2: values.multiLineValue2 ? values.multiLineValue2 : null,
        multiLineValue3: values.multiLineValue3 ? values.multiLineValue3 : null,
        textValue1: values.textValue1 ? values.textValue1 : null,
        textValue2: values.textValue2 ? values.textValue2 : null,
        textValue3: values.textValue3 ? values.textValue3 : null,
        checkboxValue1: values.checkboxValue1 ? values.checkboxValue1 : null,
        checkboxValue2: values.checkboxValue2 ? values.checkboxValue2 : null,
        checkboxValue3: values.checkboxValue3 ? values.checkboxValue3 : null,
        tags,
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
              {itemsEdit?.map(
                (item) => item && (
                <ListItem
                  key={item.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                  }}
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
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography variant="subtitle1">
                      Created:
                      {' '}
                      {moment(item.createdAt).format('DD MMMM YYYY')}
                    </Typography>
                  </ListSubheader>
                  <Box className={classes.listItem}>
                    <Typography>
                      Created:
                      {' '}
                      {moment(item.createdAt).format('DD MMMM YYYY')}
                    </Typography>
                    <UpdateFormField
                      formik={formik}
                      value={item.title}
                      field="title"
                    />
                    <Box>
                      <TextField
                        fullWidth
                        name="tags"
                        label="Enter tags"
                        value={formik.values.tags}
                        onChange={formik.handleChange}
                        onKeyDown={(e) => {
                          if (
                            e.key === 'Enter'
                                && formik.values.tags.trim()
                          ) {
                            e.preventDefault();

                            setTags([...tags, formik.values.tags]);
                            formik.values.tags = '';
                          }
                        }}
                        error={
                              formik.touched.tags && Boolean(formik.errors.tags)
                            }
                        helperText={
                              formik.touched.tags && formik.errors.tags
                            }
                        InputProps={{
                          startAdornment: tags.map((tag, idx) => (
                            <Chip
                                  // eslint-disable-next-line react/no-array-index-key
                              key={idx}
                              label={tag}
                              onDelete={() => handleDelete(tag)}
                            />
                          )),
                        }}
                      />
                    </Box>

                    <UpdateFormField
                      formik={formik}
                      value={item.textValue1}
                      field="textValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.textValue2}
                      field="textValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.textValue3}
                      field="textValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.numberValue1}
                      field="numberValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.numberValue2}
                      field="numberValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.numberValue3}
                      field="numberValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.dateValue1}
                      field="dateValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.dateValue2}
                      field="dateValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.dateValue3}
                      field="dateValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.multiLineValue1}
                      field="multiLineValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.multiLineValue2}
                      field="multiLineValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.multiLineValue3}
                      field="multiLineValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.icon}
                      field="icon"
                      image={image}
                      setImage={setImage}
                    />
                  </Box>
                  <Box className={classes.action}>
                    <Button
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        setItemId(item.id);
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
                        if (item.id) pullOutItem(item.id);
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

export default ModalEditItem;
