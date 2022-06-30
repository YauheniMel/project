import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box, IconButton, Link, Paper,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import RoutesApp from '../../constants/routes';
import login from '../services/login';
import { signInWithGoogle, signInWithFacebook } from '../firebase-config';

interface ILoginPage {
  id: string;
  loginUser: (userId: string) => void;
}

const useStyles = makeStyles({
  paper: {
    position: 'fixed',
    padding: '20px',
    top: '50%',
    left: '50%',
    minWidth: '280px',
    transform: 'translate(-50%, -50%)',
  },
  form: {
    '& > *': {
      margin: '10px 0',
    },
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const validationSchema = yup.object({
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
});

const LoginPage: FC<ILoginPage> = ({ id, loginUser }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await login(values.email, values.password);

        loginUser(id);

        navigate(RoutesApp.User);

        resetForm({ values: { email: '', password: '' } });
      } catch (error) {
        alert(error);
      }
    },
  });

  async function handleLoginGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      alert(error);
    }
  }

  async function handleLoginFacebook() {
    try {
      await signInWithFacebook();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Paper className={classes.paper}>
      <Link component={RouterLink} to={RoutesApp.Root}>
        App
      </Link>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          autoFocus
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
        <Box className={classes.action}>
          <Button variant="contained" type="submit">
            Login
          </Button>
          <IconButton onClick={handleLoginFacebook}>
            <FacebookIcon />
          </IconButton>
          <IconButton onClick={handleLoginGoogle}>
            <GoogleIcon />
          </IconButton>
          <Link to={RoutesApp.SignUp} component={RouterLink}>
            Sign Up
          </Link>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginPage;
