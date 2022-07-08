import { makeStyles } from '@material-ui/core';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import { FieldArray } from 'formik';
import React, { FC } from 'react';

const useStyles = makeStyles({
  wrap: {
    position: 'relative',
  },
  label: {
    display: 'flex',
    columnGap: '0.7rem',
    paddingBottom: '0.3rem',
    alignItems: 'center',
    '& > *': { flex: 1 },
  },
  input: {
    display: 'flex',
    columnGap: '0.7rem',
    marginTop: '0.7rem',
  },
});

interface IFormArray {
  formik: any;
  type: 'numbers' | 'texts' | 'multiLines' | 'dates' | 'radioFields';
}

const FormArray: FC<IFormArray> = ({ formik, type }) => {
  const classes = useStyles();

  return (
    <FieldArray
      name={type}
      render={(fieldArrayProps) => {
        const { push, remove, form } = fieldArrayProps;
        const { values } = form;
        return (
          <Box className={classes.wrap}>
            <Box className={classes.label}>
              <Typography variant="body1">
                Form fields:
                {type}
              </Typography>
              <Button
                onClick={() => {
                  push('');
                }}
                disabled={formik.values[`${type}`].length === 3}
                sx={{ flex: 1 }}
              >
                Add field
              </Button>
            </Box>
            {values[`${type}`].map((number: string, idx: any) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box className={classes.input} key={idx}>
                <Button
                  onClick={() => {
                    remove(idx);
                  }}
                  sx={{ padding: '0 2rem' }}
                >
                  Delete
                </Button>
                <TextField
                  name={`${type}[${idx}]`}
                  fullWidth
                  required
                  label="Name field"
                  value={formik.values[`${type}`][idx]}
                  onChange={formik.handleChange}
                />
              </Box>
            ))}
          </Box>
        );
      }}
    />
  );
};

export default FormArray;
