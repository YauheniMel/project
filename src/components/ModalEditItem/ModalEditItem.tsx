import React, { FC, useState } from 'react';
import {
  Box,
  ListItem,
  List,
  Modal,
  ListSubheader,
  Button,
  Typography,
  TextField,
  Chip,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { FormikProvider, useFormik } from 'formik';
import { ItemType } from '../../types';
import UpdateFormField from '../UpdateFormField/UpdateFormField';
// import UpdateFormField from '../UpdateFormField/UpdateFormField';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '50px',
    width: '100%',

    '& > *': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

interface IModalEditItem {
  openModal: boolean;
  setOpen: (state: boolean) => void;
  editItems: Array<ItemType | null>;
  pullOutItem: (itemId: number) => void;
  updateItem: (item: any) => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: 400,
  overflow: 'scroll',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const ModalEditItem: FC<IModalEditItem> = ({
  openModal,
  setOpen,
  editItems,
  pullOutItem,
  updateItem,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<any>();
  const [itemId, setItemId] = useState<any>('');

  const classes = useStyles();

  const handleDelete = (str: string) => {
    setTags(tags.filter((tag) => tag !== str));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      collectionId: '',
      tags: '',
      numberValue1: '',
      numberValue2: '',
      numberValue3: '',
      checkboxValue1: { field: '', count: 1, values: [''] },
      checkboxValue2: { field: '', count: 1, values: [''] },
      checkboxValue3: { field: '', count: 1, values: [''] },
      dateValue1: '',
      dateValue2: '',
      dateValue3: '',
      multiLineValue1: '',
      multiLineValue2: '',
      multiLineValue3: '',
      textValue1: '',
      textValue2: '',
      textValue3: '',
    },
    onSubmit: (values) => {
      updateItem({
        itemId,
        icon: image,
        title: values.title ? values.title : null,
        numberValue1: values.numberValue1 ? values.numberValue1 : null,
        numberValue2: values.numberValue2 ? values.numberValue2 : null,
        numberValue3: values.numberValue3 ? values.numberValue3 : null,
        dateValue1: values.dateValue1 ? values.dateValue1 : null,
        dateValue2: values.dateValue2 ? values.dateValue2 : null,
        dateValue3: values.dateValue3 ? values.dateValue3 : null,
        multiLineValue1: values.multiLineValue1 ? values.multiLineValue1 : null,
        multiLineValue2: values.multiLineValue2 ? values.multiLineValue2 : null,
        multiLineValue3: values.multiLineValue3 ? values.multiLineValue3 : null,
        textValue1: values.textValue1 ? values.textValue1 : null,
        textValue2: values.textValue2 ? values.textValue2 : null,
        textValue3: values.textValue3 ? values.textValue3 : null,
        checkboxValue1: values.checkboxValue1 ? values.checkboxValue1 : null,
        checkboxValue2: values.checkboxValue2 ? values.checkboxValue2 : null,
        checkboxValue3: values.checkboxValue3 ? values.checkboxValue3 : null,
        tags,
      });

      // resetForm({
      //   values: {
      //     theme: '',
      //     numbers: [''],
      //     dates: [''],
      //     texts: [''],
      //     multiLines: [''],
      //     checkboxes: [{ field: '', count: 1, values: [''] }],
      //   },
      // });

      // setOpen(false);
    },
    // onReset: () => {
    //   setDescription('');
    // },
  });

  // if (type === 'collections') {
  //   return (
  //     <Modal
  //       open={openModal}
  //       onClose={() => setOpen(false)}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     >
  //       <FormikProvider value={formik}>
  //         <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
  //           <Box sx={style}>
  //             <List
  //               sx={{
  //                 bgcolor: 'background.paper',
  //                 position: 'relative',
  //                 overflow: 'auto',
  //                 minHeight: 200,
  //                 maxHeight: '80vh',
  //                 m: 1,
  //                 '& ul': { padding: 0 },
  //               }}
  //               subheader={<li />}
  //             >
  //               {editCollections?.map((collection) => (collection ? (
  //                 <ListItem
  //                   sx={{ display: 'flex', flexDirection: 'column' }}
  //                   key={collection.id}
  //                 >
  //                   <ListSubheader sx={{ backgroundColor: 'red' }}>
  //                     {collection.theme}
  //                   </ListSubheader>
  //                   <Box className={classes.listItem}>
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.theme}
  //                       field="theme"
  //                     />
  //                     <Typography variant="body2">
  //                       {collection.createdAt}
  //                     </Typography>
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.icon}
  //                       field="icon"
  //                       image={image}
  //                       setImage={setImage}
  //                     />
  //                     <Typography variant="body2">
  //                       {collection.updatedAt}
  //                     </Typography>
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.checkboxKey1}
  //                       field="checkboxKey1"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.checkboxKey2}
  //                       field="checkboxKey2"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.checkboxKey3}
  //                       field="checkboxKey3"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.dateKey1}
  //                       field="dateKey1"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.dateKey2}
  //                       field="dateKey2"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.dateKey3}
  //                       field="dateKey3"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.multiLineKey1}
  //                       field="multiLineKey1"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.multiLineKey2}
  //                       field="multiLineKey2"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.multiLineKey3}
  //                       field="multiLineKey3"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.textKey1}
  //                       field="textKey1"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.textKey2}
  //                       field="textKey2"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.textKey3}
  //                       field="textKey3"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.numberKey1}
  //                       field="numberKey1"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.numberKey2}
  //                       field="numberKey2"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.numberKey3}
  //                       field="numberKey3"
  //                     />
  //                     <UpdateFormField
  //                       formik={formik}
  //                       value={collection.description}
  //                       field="description"
  //                       setDescription={setDescription}
  //                       description={description}
  //                     />
  //                   </Box>
  //                   <Button
  //                     onClick={() => {
  //                       setCollectionId(collection.id);
  //                       formik.handleSubmit();
  //                     }}
  //                     color="warning"
  //                   >
  //                     Update
  //                   </Button>
  //                   <Button
  //                     onClick={() => {
  //                       if (collection.id) pullOutCollection!(collection.id);
  //                     }}
  //                   >
  //                     Pull out
  //                   </Button>
  //                 </ListItem>
  //               ) : (
  //                 <Box>Empty</Box>
  //               )))}
  //             </List>
  //           </Box>
  //         </form>
  //       </FormikProvider>
  //     </Modal>
  //   );
  // }

  return (
    <Modal
      open={openModal}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormikProvider value={formik}>
        <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
          <Box sx={style}>
            <List
              sx={{
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 200,
                maxWidth: 410,
                m: 1,
                '& ul': { padding: 0 },
              }}
              subheader={<li />}
            >
              {editItems?.map((item) => (item ? (
                <ListItem
                  key={item.id}
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <ListSubheader sx={{ backgroundColor: 'red' }}>
                    {item.title}
                  </ListSubheader>
                  <Box className={classes.listItem}>
                    <Typography>{item.createdAt}</Typography>
                    <Typography>{item.updatedAt}</Typography>
                    <UpdateFormField
                      formik={formik}
                      value={item.title}
                      field="title"
                    />
                    <TextField
                      fullWidth
                      name="tags"
                      label="Enter tags"
                      value={formik.values.tags}
                      onChange={formik.handleChange}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && formik.values.tags.trim()) {
                          e.preventDefault();

                          setTags([...tags, formik.values.tags]);
                          formik.values.tags = '';
                        }
                      }}
                      error={
                          formik.touched.tags && Boolean(formik.errors.tags)
                        }
                      helperText={formik.touched.tags && formik.errors.tags}
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
                    <UpdateFormField
                      formik={formik}
                      value={item.textValue1}
                      field="textValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.textValue2}
                      field="textValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.textValue3}
                      field="textValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.numberValue1}
                      field="numberValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.numberValue2}
                      field="numberValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.numberValue3}
                      field="numberValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.dateValue1}
                      field="dateValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.dateValue2}
                      field="dateValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.dateValue3}
                      field="dateValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.multiLineValue1}
                      field="multiLineValue1"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.multiLineValue2}
                      field="multiLineValue2"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.multiLineValue3}
                      field="multiLineValue3"
                    />
                    <UpdateFormField
                      formik={formik}
                      value={item.icon}
                      field="icon"
                      image={image}
                      setImage={setImage}
                    />
                  </Box>
                  <Button
                    onClick={() => {
                      setItemId(item.id);
                      formik.handleSubmit();
                    }}
                    color="warning"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => {
                      if (item.id) pullOutItem(item.id);
                    }}
                  >
                    Pull out
                  </Button>
                </ListItem>
              ) : (
                <Box>Empty</Box>
              )))}
            </List>
          </Box>
        </form>
      </FormikProvider>
    </Modal>
  );
};

export default ModalEditItem;
