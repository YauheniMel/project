import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Link, Paper, TextField } from '@mui/material';

import RoutesApp from '../../../constants/routes';
import { useLanguage } from '../../../context/LanguageContext';
import { useStyles } from './SignUpPage.styles';
import { useTypedDispatch } from '../../../redux';
import { signUpThunk } from '../../../redux/actions/user-action';

export const SignUpPage: FC = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useTypedDispatch();

  const { language } = useLanguage();

  const validationSchema = yup.object({
    name: yup
      .string()
      .trim()
      .min(2, 'Name must have more than 2 letters')
      .max(30, 'Name must have less than 30 letters')
      .required('Name is required'),
    surname: yup
      .string()
      .trim()
      .min(2, 'Surname must have more than 2 letters')
      .max(30, 'Surname must have less than 30 letters')
      .required('Surname is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .trim()
      .required('Email is required'),
    password: yup
      .string()
      .min(2, 'Password should be of minimum 2 characters length')
      .trim()
      .required('Password is required'),
    confirm: yup
      .string()
      .required('Please confirm your password.')
      .trim()
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(signUpThunk(values));

      navigate(RoutesApp.Profile);

      resetForm();
    },
  });

  return (
    <Paper className={classes.paper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Link
          className={classes.link}
          component={RouterLink}
          to={RoutesApp.Root}
        >
          App
        </Link>
        <TextField
          fullWidth
          id="name"
          name="name"
          label={language.auth.name}
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="surname"
          name="surname"
          label={language.auth.surname}
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label={language.auth.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label={language.auth.password}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="confirm"
          name="confirm"
          label={language.auth.confirmPassword}
          type="password"
          value={formik.values.confirm}
          onChange={formik.handleChange}
          error={formik.touched.confirm && Boolean(formik.errors.confirm)}
          helperText={formik.touched.confirm && formik.errors.confirm}
        />
        <Box className={classes.action}>
          <Button variant="contained" type="submit">
            {language.auth.signUp}
          </Button>
          <Link component={RouterLink} to={RoutesApp.Login}>
            {language.auth.login}
          </Link>
        </Box>
      </form>
    </Paper>
  );
};
