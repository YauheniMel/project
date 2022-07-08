import React, { FC, useState } from 'react';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { Box, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CustomField from '../CustomField/CustomField';

const UpdateItemFormField: FC<any> = ({ formik, field }) => {
  const [showFormEl, setShowFormEl] = useState<boolean>(false);

  return (
    <>
      <Box>
        <IconButton onClick={() => setShowFormEl(true)}>
          <AddCircleOutlineRoundedIcon />
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
      {showFormEl && <CustomField field={field} formik={formik} />}
    </>
  );
};

export default UpdateItemFormField;
