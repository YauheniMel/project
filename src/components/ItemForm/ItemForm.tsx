/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import { Field, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Backdrop,
  Box,
  Chip,
  IconButton,
  Input,
  makeStyles,
  Paper,
  TextareaAutosize,
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

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
  openForm: boolean;
  setOpenForm: (state: boolean) => void;
  dateFields: null | string[];
  multiLineFields: null | string[];
  numberFields: null | string[];
  textFields: null | string[];
  checkboxFields: null | { field: string; count: number; values: string[] }[];
}

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(2, 'Title must have more than 2 letters')
    .max(30, 'Title must have less than 30 letters')
    .required('Title is required'),
  icon: yup.string().trim().required('Icon is required'),
  description: yup
    .string()
    .trim()
    .min(2, 'Description must have more than 2 letters')
    .max(30, 'Description must have less than 30 letters')
    .required('Description is required'),
  tags: yup
    .string()
    .trim()
    .min(2, 'Theme must have more than 2 letters')
    .max(30, 'Theme must have less than 30 letters')
    .required('Theme is required'),
});

const ItemForm: FC<IItemForm> = ({
  openForm,
  setOpenForm,
  dateFields,
  multiLineFields,
  numberFields,
  textFields,
  checkboxFields,
}) => {
  const [tags, setTags] = useState<string[]>([]);

  const classes = useStyles();
  console.log(
    dateFields,
    multiLineFields,
    numberFields,
    textFields,
    checkboxFields,
  );

  function getInitFields(): { [key: string]: string } {
    const initObj = {
      title: '',
      icon: '',
      tags: '',
      description: '',
    };

    let obj = {};
    dateFields?.forEach((field) => {
      obj = {
        ...initObj,
        ...obj,
        [field]: '',
      };
    });
    multiLineFields?.forEach((field) => {
      obj = {
        ...initObj,
        ...obj,
        [field]: '',
      };
    });
    numberFields?.forEach((field) => {
      obj = {
        ...initObj,
        ...obj,
        [field]: '',
      };
    });
    textFields?.forEach((field) => {
      obj = {
        ...initObj,
        ...obj,
        [field]: '',
      };
    });
    checkboxFields?.forEach((elem) => {
      obj = {
        ...initObj,
        ...obj,
        [elem.field]: [],
      };
    });
    console.log(obj);
    return obj;
  }

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleDelete = (str: string) => {
    setTags(tags.filter((tag) => tag !== str));
  };

  const formik = useFormik({
    initialValues: getInitFields(),
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({
        values: { ...getInitFields() },
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
              value={formik.values.icon}
              onChange={formik.handleChange}
              error={formik.touched.icon && Boolean(formik.errors.icon)}
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
            {dateFields?.map((label, idx: any) => (
              <TextField
                key={idx}
                type="date"
                fullWidth
                name={label}
                label={label}
                value={formik.values.label}
                onChange={formik.handleChange}
                error={formik.touched.label && Boolean(formik.errors.label)}
                helperText={formik.touched.label && formik.errors.label}
              />
            ))}
            {numberFields?.map((label, idx: any) => (
              <TextField
                key={idx}
                fullWidth
                name={label}
                type="number"
                label={label}
                value={formik.values.label}
                onChange={formik.handleChange}
                error={formik.touched.label && Boolean(formik.errors.label)}
                helperText={formik.touched.label && formik.errors.label}
              />
            ))}
            {textFields?.map((label, idx: any) => (
              <TextField
                key={idx}
                fullWidth
                name={label}
                label={label}
                value={formik.values.label}
                onChange={formik.handleChange}
                error={formik.touched.label && Boolean(formik.errors.label)}
                helperText={formik.touched.label && formik.errors.label}
              />
            ))}
            {multiLineFields?.map((label, idx: any) => (
              <TextareaAutosize
                key={idx}
                name={label}
                placeholder={label}
                value={formik.values.label}
                onChange={formik.handleChange}
              />
            ))}
            {checkboxFields?.map((elem, index: any) => (
              <Box key={index}>
                <span>{elem.field}</span>
                {elem.values.map((value, idx: any) => (
                  // eslint-disable-next-line jsx-a11y/label-has-associated-control
                  <label key={idx} id={idx}>
                    <Field
                      id={index}
                      type="checkbox"
                      name={elem.field}
                      value={value}
                    />
                    {value}
                  </label>
                ))}
              </Box>
            ))}
            <Button
              color="primary"
              fullWidth
              type="button"
              onClick={() => formik.resetForm()}
            >
              Reset
            </Button>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Confirm
            </Button>
          </form>
        </FormikProvider>
      </Paper>
    </Backdrop>
  );
};

export default ItemForm;
