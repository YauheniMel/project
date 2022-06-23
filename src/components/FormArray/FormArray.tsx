import { Box, Button, TextField } from '@mui/material';
import { FieldArray } from 'formik';
import React, { FC } from 'react';

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

export default FormArray;
