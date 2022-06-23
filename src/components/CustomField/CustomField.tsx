/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { TextareaAutosize, TextField } from '@mui/material';
import { Field } from 'formik';

interface ICustomField {
  formik: any;
  fields: any;
}

const CustomField: FC<ICustomField> = ({ formik, fields }) => fields.map((field: any) => {
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
        />
      );
    }

    if (type === 'checkbox') {
      const str = field[key];
      const [fieldValue] = str.split(':');
      const checkboxes = str.split(':')[1].split(',');
      return (
        <>
          <span>{fieldValue}</span>
          {checkboxes.map((value: string, index: any) => (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label key={index}>
              <Field type="checkbox" required name={key} value={value} />
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
        label={field[key]}
        value={formik.values.field}
        onChange={formik.handleChange}
        error={formik.touched.field && Boolean(formik.errors.field)}
        helperText={formik.touched.field && formik.errors.field}
      />
    );
  }

  return null;
});

export default CustomField;
