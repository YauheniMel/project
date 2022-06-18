import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import RoutesApp from '../../constants/routes';

interface ILoginPage {
  props?: object;
}

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

const LoginPage: FC<ILoginPage> = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: { email: '', password: '' } });
    },
  });

  return (
    <>
      <Link component={RouterLink} to={RoutesApp.Root}>
        App
      </Link>
      <form onSubmit={formik.handleSubmit}>
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
        <Button variant="contained" fullWidth type="submit">
          Login
        </Button>
        <Link to={RoutesApp.SignUp} component={RouterLink}>
          Sign Up
        </Link>
      </form>
    </>
  );
};

export default LoginPage;
