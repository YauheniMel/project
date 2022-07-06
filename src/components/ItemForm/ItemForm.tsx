/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import {
  Backdrop, Chip, makeStyles, Paper,
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import * as yup from 'yup';
import {
  Alert, Box, TextField, Button,
} from '@mui/material';
import CustomField from '../CustomField/CustomField';
import InputFile from '../../shared/components/InputFile/InputFile';

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
  form: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    padding: '20px',
    height: '300px',
    overflowY: 'scroll',

    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  paper: {
    position: 'relative',
    width: '60%',
    minWidth: '300px',
    borderRadius: 0,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
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
  const [isSubmited, setIsSubmited] = useState(false);

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

  const validationSchema = yup.object({
    title: yup
      .string()
      .trim()
      .min(2, 'Title must have more than 2 letters')
      .max(150, 'Title must have less than 30 letters')
      .required('Title is required'),
    description: yup
      .string()
      .trim()
      .min(2, 'Description must have more than 2 letters')
      .max(150, 'Description must have less than 30 letters')
      .required('Description is required'),
  });

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
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (!tags.length) return;

      createNewItem({
        collectionId,
        icon: image,
        ...values,
        tags,
      });

      setTags([]);

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
    onReset: () => {
      setIsSubmited(false);
      setTags([]);
      setImage('');
    },
    enableReinitialize: true,
  });

  return (
    <Backdrop className={classes.back} open={openForm} invisible>
      <Paper className={classes.paper}>
        <StuledButton
          onClick={() => {
            formik.resetForm();
            setIsSubmited(false);
            handleClose();
          }}
          variant="contained"
        >
          <CloseIcon fontSize="large" />
        </StuledButton>
        <FormikProvider value={formik}>
          <form
            className={classes.form}
            onSubmit={(e: any) => {
              setIsSubmited(true);

              return formik.handleSubmit(e);
            }}
          >
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
            <Box>
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
                    setIsSubmited(false);
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
                      style={{
                        marginRight: '5px',
                      }}
                      label={tag}
                      onDelete={() => handleDelete(tag)}
                    />
                  )),
                }}
              />
              {isSubmited && (
                <Alert sx={{ borderRadius: 0 }} severity="error">
                  Tags is required
                </Alert>
              )}
            </Box>
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
