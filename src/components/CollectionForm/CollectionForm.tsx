import React, { FC, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import MDEditor from '@uiw/react-md-editor';
import { Backdrop, makeStyles, Paper } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { CollectionInitType } from '../../types';
import FormArray from '../FormArray/FormArray';
import InputFile from '../../shared/components/InputFile/InputFile';

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
  form: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1.4rem',
    padding: '1.4rem',
    height: '15rem',
    overflowY: 'scroll',

    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  paper: {
    position: 'relative',
    width: '60%',
    minWidth: '15rem',
    padding: '1.4rem 0',
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  label: {
    display: 'flex',
    columnGap: '0.7rem',
    paddingBottom: '0.7rem',
    alignItems: 'center',
    '& > *': { flex: 1 },
  },
  input: {
    display: 'flex',
    columnGap: '0.7rem',
    marginTop: '0.7rem',
  },
  checkbox: {
    display: 'flex',
    marginTop: '0.7rem',
    columnGap: '0.7rem',
  },
}));

interface ICollectionForm {
  userId: number;
  openForm: boolean;
  setOpenForm: (state: boolean) => void;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  collectionThemes: { id: number; value: string }[] | null;
}

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(2, 'Title must have more than 2 letters')
    .max(150, 'Title must have less than 30 letters')
    .required('Title is required'),
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
  collectionThemes,
}) => {
  const [description, setDescription] = useState<any>('');
  const [image, setImage] = useState<any>();
  const [isSubmited, setIsSubmited] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpenForm(false);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      theme: '',
      numbers: [],
      dates: [],
      multiLines: [],
      radioFields: [],
      texts: [],
      checkboxes: [{ field: '', count: 1, values: [''] }],
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (!description.trim()) return;

      createNewCollection({
        userId,
        icon: image,
        title: values.title,
        description: description.replace(/\n/gim, '&&#&&'),
        theme: values.theme,
        dateKeys: values.dates[0] ? values.dates : null,
        multiLineKeys: values.multiLines[0] ? values.multiLines : null,
        numberKeys: values.numbers[0] ? values.numbers : null,
        textKeys: values.texts[0] ? values.texts : null,
        radioKeys: values.radioFields[0] ? values.radioFields : null,
        checkboxKeys: values.checkboxes[0].field
          ? values.checkboxes.map((checkbox, idx) => ({
            [`checkboxKey${idx + 1}`]: `${checkbox.field}:${checkbox.values}`,
          }))
          : null,
      });

      setDescription('');

      resetForm({
        values: {
          title: '',
          theme: '',
          numbers: [],
          dates: [],
          texts: [],
          radioFields: [],
          multiLines: [],
          checkboxes: [{ field: '', count: 1, values: [''] }],
        },
      });

      handleClose();
    },
    onReset: () => {
      setIsSubmited(false);
      setDescription('');
      setImage('');
    },
  });

  return (
    <Backdrop className={classes.back} open={openForm}>
      <Paper className={classes.paper}>
        <StyledButton
          onClick={() => {
            formik.resetForm();
            setIsSubmited(false);
            handleClose();
          }}
          variant="contained"
        >
          <CloseIcon fontSize="large" />
        </StyledButton>
        <FormikProvider value={formik}>
          <form
            className={classes.form}
            encType="multipart/form-data"
            onSubmit={(e: any) => {
              setIsSubmited(true);

              return formik.handleSubmit(e);
            }}
          >
            <TextField
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <FormControl
              error={!!formik.touched.theme && !!formik.errors.theme}
            >
              <InputLabel>theme</InputLabel>
              <Select
                name="theme"
                label="theme"
                value={formik.values.theme}
                onChange={formik.handleChange}
                IconComponent={
                  collectionThemes
                    ? KeyboardDoubleArrowDownIcon
                    : HourglassTopIcon
                }
                error={formik.touched.theme && Boolean(formik.errors.theme)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {collectionThemes
                  && collectionThemes.map((theme) => (
                    <MenuItem value={theme.value}>{theme.value}</MenuItem>
                  ))}
              </Select>
              <FormHelperText>
                {formik.touched.theme && formik.errors.theme}
              </FormHelperText>
            </FormControl>
            <Box sx={{ p: 0 }}>
              <MDEditor
                textareaProps={{
                  placeholder: 'description',
                }}
                style={{
                  backgroundColor: 'transparent',
                }}
                value={description}
                onChange={(e: any) => {
                  setIsSubmited(false);
                  setDescription(e);
                }}
              />
              {isSubmited && (
                <Alert sx={{ borderRadius: 0 }} severity="error">
                  Description is required
                </Alert>
              )}
            </Box>
            <InputFile image={image} setImage={setImage} />
            <FormArray formik={formik} type="numbers" />
            <FormArray formik={formik} type="texts" />
            <FormArray formik={formik} type="radioFields" />
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
                          push({
                            field: '',
                            count: 1,
                            values: [''],
                          });
                        }}
                        disabled={formik.values.checkboxes.length === 4}
                      >
                        Add field
                      </Button>
                    </Box>
                    {checkboxes.slice(1).map((date: string, idx: any) => (
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
                            required
                            name={`checkboxes[${idx}].field`}
                            label="Name field"
                            value={formik.values.checkboxes[idx].field}
                            onChange={formik.handleChange}
                          />
                        </Box>
                        <Box className={classes.checkbox}>
                          <TextField
                            sx={{ minWidth: '4rem' }}
                            type="number"
                            InputProps={{ inputProps: { min: 1, max: 7 } }}
                            name={`checkboxes[${idx}].count`}
                            value={formik.values.checkboxes[idx].count}
                            onChange={formik.handleChange}
                          />
                          <Box sx={{ flex: 1 }}>
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
                                            fullWidth
                                            sx={{
                                              marginBottom: '0.7rem',
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
