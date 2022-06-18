import React, { FC } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Backdrop,
  Box,
  IconButton,
  Input,
  makeStyles,
  Paper,
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

interface IFormArray {
  formik: any;
  type: 'numbers' | 'texts' | 'multiLines' | 'dates';
}

const FormArray: FC<IFormArray> = ({ formik, type }) => (
  <>
    <span>{type}</span>
    <FieldArray
      name={type}
      render={(fieldArrayProps) => {
        const { push, remove, form } = fieldArrayProps;
        const { values } = form;
        return (
          <>
            {values[`${type}`].map((number: string, idx: any) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={idx}>
                <Button
                  onClick={() => {
                    const countFields = formik.values[`${type}`].length;
                    if (countFields === 1) return;
                    remove(idx);
                  }}
                >
                  -
                </Button>
                <Button
                  onClick={() => {
                    const countFields = formik.values[`${type}`].length;
                    if (countFields === 3) return;
                    push('');
                  }}
                >
                  +
                </Button>
                <TextField
                  name={`${type}[${idx}]`}
                  label="Name field"
                  value={formik.values[`${type}`][idx]}
                  onChange={formik.handleChange}
                />
              </Box>
            ))}
          </>
        );
      }}
    />
  </>
);

interface ICollectionForm {
  openForm: boolean;
  setOpenForm: (state: boolean) => void;
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
  theme: yup
    .string()
    .trim()
    .min(2, 'Theme must have more than 2 letters')
    .max(30, 'Theme must have less than 30 letters')
    .required('Theme is required'),
});

const CollectionForm: FC<ICollectionForm> = ({ openForm, setOpenForm }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpenForm(false);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      icon: '',
      description: '',
      theme: '',
      numbers: [''],
      dates: [''],
      multiLines: [''],
      texts: [''],
      checkboxes: [{ field: '', count: 1, values: [''] }],
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      resetForm({
        values: {
          title: '',
          icon: '',
          description: '',
          theme: '',
          numbers: [''],
          dates: [''],
          texts: [''],
          multiLines: [''],
          checkboxes: [{ field: '', count: 1, values: [''] }],
        },
      });

      handleClose();
    },
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
            <TextField
              fullWidth
              id="theme"
              name="theme"
              label="Theme"
              value={formik.values.theme}
              onChange={formik.handleChange}
              error={formik.touched.theme && Boolean(formik.errors.theme)}
              helperText={formik.touched.theme && formik.errors.theme}
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
            <FormArray formik={formik} type="numbers" />
            <FormArray formik={formik} type="texts" />
            <FormArray formik={formik} type="dates" />
            <FormArray formik={formik} type="multiLines" />
            <FieldArray
              name="checkboxes"
              render={(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { checkboxes } = values;
                return (
                  <>
                    {checkboxes.map((date: string, idx: any) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Box key={idx}>
                        <Button
                          onClick={() => {
                            const countFields = formik.values.checkboxes.length;
                            if (countFields === 1) return;
                            remove(idx);
                          }}
                        >
                          -
                        </Button>
                        <Button
                          onClick={() => {
                            const countFields = formik.values.checkboxes.length;
                            if (countFields === 3) return;
                            push({ field: '', count: 1, values: [''] });
                          }}
                        >
                          +
                        </Button>
                        <TextField
                          name={`checkboxes[${idx}].field`}
                          label="Name field"
                          value={formik.values.checkboxes[idx].field}
                          onChange={formik.handleChange}
                        />
                        <TextField
                          type="number"
                          InputProps={{ inputProps: { min: 1, max: 7 } }}
                          name={`checkboxes[${idx}].count`}
                          label="How many checkboxes?"
                          value={formik.values.checkboxes[idx].count}
                          onChange={formik.handleChange}
                        />
                        <FieldArray
                          name="values"
                          render={() => {
                            const countCheckboxes = formik.values.checkboxes[idx].count;
                            const arrCheckboxes: string[] = new Array(
                              countCheckboxes,
                            ).fill('');
                            return (
                              <>
                                {arrCheckboxes.map(
                                  (value: string, index: any) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Box key={index}>
                                      <TextField
                                        required
                                        name={`checkboxes[${idx}].values[${index}]`}
                                        label="Name field"
                                        value={
                                          formik.values.checkboxes[idx].values[
                                            index
                                          ]
                                        }
                                        onChange={formik.handleChange}
                                      />
                                    </Box>
                                  ),
                                )}
                              </>
                            );
                          }}
                        />
                      </Box>
                    ))}
                  </>
                );
              }}
            />
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

export default CollectionForm;
