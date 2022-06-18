import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import RoutesApp from '../../constants/routes';

interface ILoginPage {
  props?: object;
}

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

const SignUpPage: FC<ILoginPage> = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({
        values: {
          name: '',
          surname: '',
          email: '',
          password: '',
          confirm: '',
        },
      });
    },
  });

  return (
    <>
      <Link to={RoutesApp.Root}>App</Link>
      <form onSubmit={formik.handleSubmit}>
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
          type="confirm"
          value={formik.values.confirm}
          onChange={formik.handleChange}
          error={formik.touched.confirm && Boolean(formik.errors.confirm)}
          helperText={formik.touched.confirm && formik.errors.confirm}
        />
        <Button variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
        <Link to={RoutesApp.Login}>Login</Link>
      </form>
    </>
  );
};

export default SignUpPage;
