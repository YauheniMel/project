import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Box, Button, CardMedia, Input,
} from '@mui/material';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const useStyles = makeStyles({
  file: {
    width: '100%',
    opacity: 0,
    height: '30px',
    zIndex: 2,
    display: 'block',
  },
  ready: {
    position: 'relative',
    transform: 'translateY(-100%)',
    height: '30px',
  },
  title: {
    position: 'relative',
    transform: 'translateY(-100%)',
    height: '30px',
  },
});

interface IInputFile {
  image: any;
  setImage: (image: any) => void;
}

const InputFile: FC<IInputFile> = ({ image, setImage }) => {
  const classes = useStyles();

  return (
    <Box>
      <Input
        id="icon"
        name="icon"
        inputProps={{ accept: 'image/*' }}
        className={classes.file}
        type="file"
        onChange={(e: any) => {
          setImage(e.target.files[0]);
        }}
      />
      {image ? (
        <Button fullWidth className={classes.ready}>
          <FileDownloadDoneIcon />
          Ready
        </Button>
      ) : (
        <Button fullWidth className={classes.title}>
          <FileDownloadIcon />
          Add photo
        </Button>
      )}
      {image && (
        <CardMedia
          component="img"
          image={URL.createObjectURL(image)}
          alt="download"
          height="190"
        />
      )}
    </Box>
  );
};

export default InputFile;
