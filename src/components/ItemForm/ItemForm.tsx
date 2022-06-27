/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Backdrop,
  Chip,
  IconButton,
  Input,
  makeStyles,
  Paper,
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import CustomField from '../CustomField/CustomField';

const useStyles = makeStyles((theme) => ({
  back: {
    zIndex: theme.zIndex.drawer + 1,
  },
  form: {
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

interface IItemForm {
  collectionId: number;
  openForm: boolean;
  setOpenForm: (state: boolean) => void;
  customFields: any;
  createNewItem: (itemInfo: any) => void;
}

const ItemForm: FC<IItemForm> = ({
  openForm,
  setOpenForm,
  customFields,
  createNewItem,
  collectionId,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<any>();

  const classes = useStyles();

  function getInitFields(customFields: any) {
    let obj = {};

    customFields?.forEach((customField: any) => {
      const [key] = Object.keys(customField);
      obj = {
        ...obj,
        [key]: '',
      };
    });

    return obj;
  }

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleDelete = (str: string) => {
    setTags(tags.filter((tag) => tag !== str));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      tags: '',
      ...getInitFields(customFields),
    },
    onSubmit: (values, { resetForm }) => {
      createNewItem({
        collectionId,
        icon: image,
        ...values,
        tags,
      });

      resetForm({
        values: {
          title: '',
          tags: '',
          description: '',
          ...getInitFields(customFields),
        },
      });

      handleClose();
    },
    enableReinitialize: true,
  });

  return (
    <Backdrop className={classes.back} open={openForm} invisible>
      <Paper className={classes.form}>
        <IconButton className={classes.btn} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              autoFocus
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <Input
              fullWidth
              id="icon"
              name="icon"
              type="file"
              onChange={(e: any) => setImage(e.target.files[0])}
            />
            <TextField
              fullWidth
              name="tags"
              label="Enter tags"
              value={formik.values.tags}
              onChange={formik.handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && formik.values.tags.trim()) {
                  e.preventDefault();

                  setTags([...tags, formik.values.tags]);
                  formik.values.tags = '';
                }
              }}
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags && formik.errors.tags}
              InputProps={{
                startAdornment: tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    onDelete={() => handleDelete(tag)}
                  />
                )),
              }}
            />
            {customFields && (
              <CustomField fields={customFields} formik={formik} />
            )}
            <Button
              color="primary"
              fullWidth
              type="button"
              onClick={() => formik.resetForm()}
            >
              Reset
            </Button>
            <Button variant="contained" fullWidth type="submit">
              Confirm
            </Button>
          </form>
        </FormikProvider>
      </Paper>
    </Backdrop>
  );
};

export default ItemForm;
