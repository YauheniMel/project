import React, { FC, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import MDEditor from '@uiw/react-md-editor';
import {
  Backdrop, Box, makeStyles, Paper,
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CollectionInitType } from '../../types';
import FormArray from '../FormArray/FormArray';
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
  },
  paper: {
    position: 'relative',
    width: '60%',
    minWidth: '300px',
    padding: '20px 0',
  },
  tabs: {
    position: 'sticky',
    width: '100%',
    zIndex: 2,
    top: 0,
  },
  label: {
    display: 'flex',
    columnGap: '10px',
    paddingBottom: '5px',
    alignItems: 'center',
    '& > *': { flex: 1 },
  },
  input: {
    display: 'flex',
    columnGap: '10px',
    marginTop: '10px',
  },
  checkbox: {
    display: 'flex',
    marginTop: '10px',
    columnGap: '10px',
  },
}));

interface ICollectionForm {
  userId: number;
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
      numbers: [],
      dates: [],
      multiLines: [],
      texts: [],
      checkboxes: [{ field: '', count: 1, values: [''] }],
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      createNewCollection({
        userId,
        icon: image,
        description: description.replace(/\n/gim, '&&#&&'),
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
          numbers: [],
          dates: [],
          texts: [],
          multiLines: [],
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
    <Backdrop className={classes.back} open={openForm}>
      <Paper className={classes.paper}>
        <StuledButton onClick={handleClose} variant="contained">
          <CloseIcon fontSize="large" />
        </StuledButton>
        <FormikProvider value={formik}>
          <form
            className={classes.form}
            encType="multipart/form-data"
            onSubmit={formik.handleSubmit}
          >
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
            <InputFile image={image} setImage={setImage} />
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
                    <Box className={classes.label}>
                      <Typography>Form fields: checkboxes</Typography>
                      <Button
                        onClick={() => {
                          push({ field: '', count: 1, values: [''] });
                        }}
                        disabled={formik.values.checkboxes.length === 3}
                      >
                        Add field
                      </Button>
                    </Box>
                    {checkboxes.map((date: string, idx: any) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Box key={idx}>
                        <Box className={classes.input}>
                          <Button
                            onClick={() => {
                              remove(idx);
                            }}
                            sx={{ padding: '0 2rem' }}
                          >
                            Delete
                          </Button>
                          <TextField
                            fullWidth
                            name={`checkboxes[${idx}].field`}
                            label="Name field"
                            value={formik.values.checkboxes[idx].field}
                            onChange={formik.handleChange}
                          />
                        </Box>
                        <Box className={classes.checkbox}>
                          <TextField
                            type="number"
                            InputProps={{ inputProps: { min: 1, max: 7 } }}
                            name={`checkboxes[${idx}].count`}
                            label="How many?"
                            value={formik.values.checkboxes[idx].count}
                            onChange={formik.handleChange}
                            sx={{ flex: 1 }}
                          />
                          <Box>
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
                                            sx={{
                                              flex: 1,
                                              marginBottom: '10px',
                                            }}
                                            name={`checkboxes[${idx}].values[${index}]`}
                                            label="Name field"
                                            value={
                                              formik.values.checkboxes[idx]
                                                .values[index]
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
                        </Box>
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
