/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import {
  Backdrop,
  Chip,
  IconButton,
  makeStyles,
  Paper,
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField } from '@mui/material';
import CustomField from '../CustomField/CustomField';
import InputFile from '../../shared/components/InputFile/InputFile';

const useStyles = makeStyles((theme) => ({
  back: {
    zIndex: theme.zIndex.drawer + 2,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    padding: '20px',
    height: '300px',
    overflowY: 'scroll',
  },
  paper: {
    position: 'relative',
    width: '60%',
    minWidth: '300px',
  },
  btn: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.palette.primary.light,
    transform: 'translate(50%, -50%)',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

interface IItemForm {
  collectionId: number;
  openForm: boolean;
  setOpenForm: (state: boolean) => void;
  customFields: any;
  createNewItem: (itemInfo: any) => void;
  searchMatchTags: (tag: string) => void;
  matchTags: any;
}

const ItemForm: FC<IItemForm> = ({
  openForm,
  setOpenForm,
  customFields,
  createNewItem,
  collectionId,
  searchMatchTags,
  matchTags,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<any>();
  const [showSearchTags, setShowSearchTags] = useState(false);

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
      if (!tags.length) return;

      // addTags(tags);

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
      <Paper className={classes.paper}>
        <IconButton className={classes.btn} onClick={handleClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <FormikProvider value={formik}>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
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
            <InputFile setImage={setImage} image={image} />
            <TextField
              fullWidth
              name="tags"
              label="Enter tags"
              value={formik.values.tags}
              onChange={formik.handleChange}
              onKeyDown={(e) => {
                if (formik.values.tags.trim()) {
                  searchMatchTags(formik.values.tags);
                  setShowSearchTags(true);
                }

                if (e.key === 'Enter' && formik.values.tags.trim()) {
                  e.preventDefault();

                  setTags([
                    ...tags.filter((tag) => tag !== formik.values.tags),
                    formik.values.tags,
                  ]);
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
            <Box sx={{ display: showSearchTags ? 'block' : 'none' }}>
              {matchTags
                && matchTags.map((matchTag: { content: string }, idx: any) => (
                  <Chip
                    key={idx}
                    label={matchTag.content}
                    onClick={() => {
                      setTags([
                        ...tags.filter((tag) => matchTag.content !== tag),
                        matchTag.content,
                      ]);

                      formik.values.tags = '';

                      setShowSearchTags(false);
                    }}
                  />
                ))}
            </Box>
            {customFields
              && customFields.map((field: any, index: any) => (
                <CustomField key={index} field={field} formik={formik} />
              ))}
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
