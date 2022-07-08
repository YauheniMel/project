import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  ListItem,
  List,
  ListSubheader,
  Button,
  Typography,
  TextField,
  Chip,
  alpha,
  IconButton,
  CardMedia,
} from '@mui/material';
import { makeStyles, Backdrop, Paper } from '@material-ui/core';
import { FormikProvider, useFormik } from 'formik';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckIcon from '@mui/icons-material/Check';
import InputFile from '../../shared/components/InputFile/InputFile';
import { ItemType } from '../../types';
import UpdateItemFormField from '../UpdateItemFormField/UpdateItemFormField';

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.drawer + 1,
  top: 0,
  right: 0,
  maxWidth: '3.2rem',
  maxHeight: '3.2rem',
  minWidth: '3.2rem',
  minHeight: '3.2rem',
  backgroundColor: theme.palette.primary.dark,
  borderRadius: 0,
  color: theme.palette.common.white,
}));

const useStyles = makeStyles((theme) => ({
  back: {
    zIndex: theme.zIndex.drawer + 2,
  },
  paper: {
    position: 'relative',
    width: '60%',
    minWidth: '300px',
    height: '300px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1.4rem',
    padding: '0 1.4rem',
    width: '100%',
    flex: 1,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },

    '& > *': {
      display: 'flex',
      flexDirection: 'column',
      padding: '.7rem',
      backgroundColor: alpha(theme.palette.common.black, 0.05),
    },
  },
  action: {
    display: 'flex',
    width: '100%',
    position: 'sticky',
    bottom: 0,
    backgroundColor: theme.palette.common.white,
  },
}));

interface IModalEditItem {
  openModal: boolean;
  setOpen: (state: boolean) => void;
  itemsEdit: Array<ItemType | null>;
  pullOutItem: (itemId: number) => void;
  updateItem: (item: any) => void;
  customFields: any;
}

const ModalEditItem: FC<IModalEditItem> = ({
  openModal,
  setOpen,
  itemsEdit,
  pullOutItem,
  updateItem,
  customFields,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<any>();
  const [itemId, setItemId] = useState<any>('');

  const classes = useStyles();

  const handleDelete = (str: string) => {
    setTags(tags.filter((tag) => tag !== str));
  };

  function getInitFields(customFields: any) {
    let obj = {};

    customFields?.forEach((customField: any) => {
      const [key] = Object.keys(customField);
      obj = {
        ...obj,
        [key]: '',
      };
    });

    return obj;
  }

  useEffect(() => {
    if (!itemsEdit.length) setOpen(false);
  }, [itemsEdit]);

  const formik = useFormik({
    initialValues: {
      title: '',
      tags: '',
      ...getInitFields(customFields),
    },
    onSubmit: (values, { resetForm }) => {
      if (!tags.length) return;

      updateItem({
        itemId,
        icon: image || null,
        ...values,
        tags,
      });

      setTags([]);

      resetForm({
        values: {
          title: '',
          tags: '',
          ...getInitFields(customFields),
        },
      });

      pullOutItem(itemId);

      setOpen(false);
    },
    // onReset: () => {
    //   setIsSubmited(false);
    //   setTags([]);
    //   setImage('');
    // },
  });

  return (
    <Backdrop className={classes.back} open={openModal}>
      <Paper className={classes.paper}>
        <StyledButton onClick={() => setOpen(false)} variant="contained">
          <CloseIcon fontSize="large" />
        </StyledButton>
        <List
          sx={{
            bgcolor: 'background.paper',
            overflow: 'auto',
            paddingBottom: 0,
            width: '100%',
            height: {
              sm: '100%',
              '*': '300px',
            },
          }}
          subheader={<li />}
        >
          <FormikProvider value={formik}>
            <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
              {itemsEdit?.map(
                (item: any) => item && (
                <ListItem
                  key={item.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                  }}
                >
                  <ListSubheader
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: '1000',
                      width: '100%',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ marginRight: '3.4rem' }}
                    >
                      Created:
                      {' '}
                      {moment(item.createdAt).format('DD MMMM YYYY')}
                    </Typography>
                  </ListSubheader>
                  <Box className={classes.listItem}>
                    <Box>
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography variant="body2">
                          {formik.values.title || item.title}
                        </Typography>
                        <Box>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                          <IconButton>
                            <CheckIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              formik.resetForm({
                                values: { ...formik.values, title: '' },
                              });
                            }}
                          >
                            <CleaningServicesIcon />
                          </IconButton>
                        </Box>
                      </Box>
                      <TextField
                        name="title"
                        fullWidth
                        label="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={
                              formik.touched.title
                              && Boolean(formik.errors.title)
                            }
                        helperText={
                              formik.touched.title && formik.errors.title
                            }
                      />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <IconButton>
                            {image ? (
                              <EditIcon />
                            ) : (
                              <AddCircleOutlineRoundedIcon />
                            )}
                          </IconButton>
                          <IconButton>
                            <CheckIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              setImage(null);
                            }}
                          >
                            <CleaningServicesIcon />
                          </IconButton>
                        </Box>
                      </Box>
                      <InputFile setImage={setImage} image={image} />
                      {item.icon && !image && (
                      <CardMedia
                        component="img"
                        height="194"
                        image={`data:application/pdf;base64,${item.icon}`}
                        alt={item.title}
                      />
                      )}
                    </Box>
                    <Box>
                      <TextField
                        fullWidth
                        name="tags"
                        label="Enter tags"
                        value={formik.values.tags}
                        onChange={formik.handleChange}
                        onKeyDown={(e) => {
                          if (
                            e.key === 'Enter'
                                && formik.values.tags.trim()
                          ) {
                            e.preventDefault();

                            setTags([...tags, formik.values.tags]);
                            formik.values.tags = '';
                          }
                        }}
                        error={
                              formik.touched.tags && Boolean(formik.errors.tags)
                            }
                        helperText={
                              formik.touched.tags && formik.errors.tags
                            }
                        InputProps={{
                          startAdornment: tags.map((tag, idx) => (
                            <Chip
                                  // eslint-disable-next-line react/no-array-index-key
                              key={idx}
                              label={tag}
                              onDelete={() => handleDelete(tag)}
                            />
                          )),
                        }}
                      />
                    </Box>
                    <Box>
                      {customFields
                            && customFields.map((field: any, idx: any) => (
                              <UpdateItemFormField
                                // eslint-disable-next-line react/no-array-index-key
                                key={idx}
                                formik={formik}
                                field={field}
                              />
                            ))}
                    </Box>
                  </Box>
                  <Box className={classes.action}>
                    <Button
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        setItemId(item.id);
                        formik.handleSubmit();
                      }}
                      color="warning"
                    >
                      Update
                    </Button>
                    <Button
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                      }}
                      type="reset"
                      color="warning"
                      onClick={formik.handleReset}
                    >
                      Reset
                    </Button>
                    <Button
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        if (item.id) pullOutItem(item.id);
                      }}
                    >
                      Pull out
                    </Button>
                  </Box>
                </ListItem>
                ),
              )}
            </form>
          </FormikProvider>
        </List>
      </Paper>
    </Backdrop>
  );
};

export default ModalEditItem;
