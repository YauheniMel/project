/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import { Checkbox, TextareaAutosize, TextField } from '@mui/material';
import { Field } from 'formik';

interface ICustomField {
  formik: any;
  field: any;
}

const CustomField: FC<ICustomField> = ({ formik, field }) => {
  const [key] = Object.keys(field);

  if (field[key]) {
    const type = key.slice(0, -4);

    if (type === 'multiLine') {
      return (
        <TextareaAutosize
          name={key}
          placeholder={field[key]}
          value={formik.values.field}
          onChange={formik.handleChange}
          style={{
            minHeight: '100px',
            padding: '.7rem',
          }}
        />
      );
    }

    if (type === 'checkbox') {
      const [state, setState] = useState('');
      const str = field[key];
      const [fieldValue] = str.split(':');
      const checkboxes = str.split(':')[1].split(',');

      return (
        <>
          <span>{fieldValue}</span>
          {checkboxes.map((value: string, index: any) => (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label style={{ marginLeft: '20px' }} key={index}>
              <Field
                component={Checkbox}
                name={key}
                value={value}
                checked={value === state}
                onChange={() => {
                  setState(value);
                  formik.values[key] = value;
                }}
              />
              {value}
            </label>
          ))}
        </>
      );
    }

    return (
      <TextField
        type={type}
        required
        name={key}
        InputLabelProps={{ shrink: true }}
        label={field[key]}
        value={formik.values.field}
        onChange={formik.handleChange}
        error={formik.touched.field && Boolean(formik.errors.field)}
        helperText={formik.touched.field && formik.errors.field}
      />
    );
  }

  return null;
};

export default CustomField;
