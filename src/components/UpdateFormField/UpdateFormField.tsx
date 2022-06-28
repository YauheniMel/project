import React, { FC, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import MDEditor from '@uiw/react-md-editor';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import {
  Box,
  CardMedia,
  IconButton,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { FieldArray } from 'formik';

const UpdateFormField: FC<any> = ({
  formik,
  value,
  field,
  image,
  setImage,
  setDescription,
  description,
}) => {
  const [showFormEl, setShowFormEl] = useState<boolean>(false);

  const imgUrl = image
    ? URL.createObjectURL(image)
    : `data:application/pdf;base64,${value}`;
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {field === 'icon' ? (
          <CardMedia
            component="img"
            height="194"
            image={imgUrl}
            alt="Paella dish"
          />
        ) : field === 'description' ? (
          <MDEditor.Markdown
            source={
              description
                ? description.replace(/&&#&&/gim, '\n')
                : value.replace(/&&#&&/gim, '\n')
            }
          />
        ) : (
          <Typography variant="body2">
            {(typeof formik.values[field] === 'object'
              ? formik.values[field].field
              : formik.values[field]) || value}
          </Typography>
        )}
        <IconButton onClick={() => setShowFormEl(true)}>
          {value ? <EditIcon /> : <AddCircleOutlineRoundedIcon />}
        </IconButton>
        <IconButton onClick={() => setShowFormEl(false)}>
          <CheckIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            formik.resetForm({ values: { ...formik.values, [field]: '' } });
          }}
        >
          <CleaningServicesIcon />
        </IconButton>
      </Box>
      {[
        'textKey1',
        'textKey2',
        'textKey3',
        'theme',
        'numberKey1',
        'numberKey2',
        'numberKey3',
        'dateKey1',
        'dateKey2',
        'dateKey3',
        'multiLineKey1',
        'multiLineKey2',
        'multiLineKey3',
        'textValue1',
        'textValue2',
        'textValue3',
        'title',
        'numberValue1',
        'numberValue2',
        'numberValue3',
        'dateValue1',
        'dateValue2',
        'dateValue3',
        'multiLineValue1',
        'multiLineValue2',
        'multiLineValue3',
      ].includes(field) && (
        <TextField
          style={{ display: showFormEl ? 'block' : 'none' }}
          name={field}
          label={field}
          value={formik.values[field]}
          onChange={formik.handleChange}
          error={formik.touched[field] && Boolean(formik.errors[field])}
          helperText={formik.touched[field] && formik.errors[field]}
        />
      )}
      {field === 'description' && (
        <MDEditor
          style={{ display: showFormEl ? 'block' : 'none' }}
          value={description}
          onChange={setDescription}
        />
      )}
      {field === 'icon' && (
        <Input
          style={{ display: showFormEl ? 'block' : 'none' }}
          id="icon"
          name="icon"
          inputProps={{ accept: 'image/*' }}
          type="file"
          onChange={(e: any) => {
            setImage(e.target.files[0]);
          }}
        />
      )}
      {['checkboxKey1', 'checkboxKey2', 'checkboxKey3'].includes(field) && (
        <Box style={{ display: showFormEl ? 'block' : 'none' }}>
          <TextField
            name={`${field}.field`}
            label="Name field"
            value={formik.values[field].field}
            onChange={formik.handleChange}
          />
          <TextField
            type="number"
            InputProps={{ inputProps: { min: 1, max: 7 } }}
            name={`${field}.count`}
            label="How many checkboxes?"
            value={formik.values[field].count}
            onChange={formik.handleChange}
          />
          <FieldArray
            name="values"
            render={() => {
              const countCheckboxes = formik.values[field].count;
              const arrCheckboxes: string[] = new Array(countCheckboxes).fill(
                '',
              );
              return (
                <>
                  {arrCheckboxes.map((value: string, index: any) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Box key={index}>
                      <TextField
                        name={`${field}.values[${index}]`}
                        label="Name field"
                        value={formik.values[field].values[index]}
                        onChange={formik.handleChange}
                      />
                    </Box>
                  ))}
                </>
              );
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default UpdateFormField;
