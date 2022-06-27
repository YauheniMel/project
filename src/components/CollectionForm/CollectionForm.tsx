import React, { FC, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import MDEditor from '@uiw/react-md-editor';
import Button from '@material-ui/core/Button';
import {
  Backdrop,
  Box,
  IconButton,
  Input,
  makeStyles,
  Paper,
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { CollectionInitType } from '../../types';
import FormArray from '../FormArray/FormArray';

const useStyles = makeStyles((theme) => ({
  back: {
    zIndex: theme.zIndex.drawer + 2,
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

interface ICollectionForm {
  userId: string;
  openForm: boolean;
  setOpenForm: (state: boolean) => void;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
}

const validationSchema = yup.object({
  theme: yup
    .string()
    .trim()
    .min(2, 'Theme must have more than 2 letters')
    .max(30, 'Theme must have less than 30 letters')
    .required('Theme is required'),
});

const CollectionForm: FC<ICollectionForm> = ({
  userId,
  openForm,
  setOpenForm,
  createNewCollection,
}) => {
  const [description, setDescription] = useState<any>('');
  const [image, setImage] = useState<any>();

  const classes = useStyles();

  const handleClose = () => {
    setOpenForm(false);
  };

  const formik = useFormik({
    initialValues: {
      theme: '',
      numbers: [''],
      dates: [''],
      multiLines: [''],
      texts: [''],
      checkboxes: [{ field: '', count: 1, values: [''] }],
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      createNewCollection({
        userId,
        icon: image,
        description: description.replace(/\n/gim, '&'),
        theme: values.theme,
        dateKeys: values.dates[0] ? values.dates : null,
        multiLineKeys: values.multiLines[0] ? values.multiLines : null,
        numberKeys: values.numbers[0] ? values.numbers : null,
        textKeys: values.texts[0] ? values.texts : null,
        checkboxKeys: values.checkboxes[0].field
          ? values.checkboxes.map((checkbox, idx) => ({
            [`checkboxKey${idx + 1}`]: `${checkbox.field}:${checkbox.values}`,
          }))
          : null,
      });

      setDescription('');

      resetForm({
        values: {
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
    onReset: () => {
      setDescription('');
    },
  });

  return (
    <Backdrop
      className={classes.back}
      open={openForm}
      invisible
      style={{ overflowY: 'auto' }}
    >
      <Paper style={{ maxHeight: '100%' }} className={classes.form}>
        <IconButton className={classes.btn} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <FormikProvider value={formik}>
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <TextField
              id="theme"
              name="theme"
              label="Theme"
              value={formik.values.theme}
              onChange={formik.handleChange}
              error={formik.touched.theme && Boolean(formik.errors.theme)}
              helperText={formik.touched.theme && formik.errors.theme}
            />
            <MDEditor value={description} onChange={setDescription} />
            <Input
              id="icon"
              name="icon"
              inputProps={{ accept: 'image/*' }}
              type="file"
              onChange={(e: any) => {
                setImage(e.target.files[0]);
              }}
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
            <Button variant="contained" type="submit" fullWidth>
              Confirm
            </Button>
          </form>
        </FormikProvider>
      </Paper>
    </Backdrop>
  );
};

export default CollectionForm;
