import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box, Button, Link, Paper,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { getAuth, updateProfile } from 'firebase/auth';

import RoutesApp from '../../constants/routes';
import signup from '../services/signup';
import { CredentialsType } from '../../redux/actions/auth-action';

interface ISignUpPage {
  signUpUser: (credentials: CredentialsType) => void;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.4rem',
    top: '50%',
    left: '50%',
    minWidth: '14rem',
    transform: 'translate(-50%, -50%)',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  form: {
    maxWidth: '15rem',

    '& > *': {
      margin: '0.7rem 0',
    },
  },
  link: {
    position: 'relative',
    zIndex: 2,
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

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

const SignUpPage: FC<ISignUpPage> = ({ signUpUser }) => {
  const classes = useStyles();
  const navigate = useNavigate();

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
      try {
        await signup(values.email, values.password);

        const auth = getAuth();

        const user = auth.currentUser;
        if (user) {
          await updateProfile(auth.currentUser, {
            displayName: `${values.name} ${values.surname}`,
          });

          signUpUser({
            id: user.uid,
            name: values.name,
            surname: values.surname,
            email: values.email,
          });

          navigate(RoutesApp.User);
        }

        resetForm({
          values: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirm: '',
          },
        });
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <>
      <Link className={classes.link} component={RouterLink} to={RoutesApp.Root}>
        App
      </Link>
      <Paper sx={{ borderRadius: 0 }} className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
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
            label="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
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
            label="Confirm password"
            type="password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            error={formik.touched.confirm && Boolean(formik.errors.confirm)}
            helperText={formik.touched.confirm && formik.errors.confirm}
          />
          <Box className={classes.action}>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
            <Link component={RouterLink} to={RoutesApp.Login}>
              Login
            </Link>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default SignUpPage;
