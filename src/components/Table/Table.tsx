import React, { FC, useState } from 'react';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { ItemType } from '../../types';
import RoutesApp from '../../constants/routes';

interface ITable {
  userId: number;
  list: ItemType[];
  setTargetItem: (item: ItemType) => void;
  setEditItems: (itemIds: number[]) => void;
  setDeleteItems: (itemIds: number[]) => void;
  toogleLike: (userId: number, itemId: number) => void;
  likes: { itemId: number }[] | null;
}

const ODD_OPACITY = 0.2;

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY
            + theme.palette.action.selectedOpacity
            + theme.palette.action.hoverOpacity,
        ),
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

const Table: FC<ITable> = ({
  list,
  setTargetItem,
  setEditItems,
  setDeleteItems,
  toogleLike,
  userId,
  likes,
}) => {
  const [selectRows, setSelectRows] = useState([]);
  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      editable: true,
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Link
          component={RouterLink}
          onClick={() => setTargetItem(params.row)}
          to={`${RoutesApp.CollectionLink}${params.row.collectionId}${RoutesApp.ItemLink}${params.row.id}`}
          sx={{
            display: 'flex',
            columnGap: '15px',
            alignItems: 'center',
          }}
        >
          {params.row.icon && (
            <Avatar src={`data:application/pdf;base64,${params.row.icon}`} />
          )}
          <Typography variant="body2">{params.row.title}</Typography>
        </Link>
      ),
    },
    {
      field: 'tags',
      headerName: 'Tags',
      editable: true,
      minWidth: 150,
      flex: 1,
      renderCell: (params) => params.row.tags.map((tag: any) => <Chip label={tag.content} />),
    },
    {
      field: 'likes',
      headerName: 'Likes',
      type: 'number',
      width: 60,
      editable: true,
      renderCell: (params) => params.row.likes && params.row.likes.length,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => setEditItems([params.row.id])}>
            <MdOutlineChangeCircle />
          </IconButton>
          <IconButton onClick={() => setDeleteItems([params.row.id])}>
            <DeleteIcon />
          </IconButton>
          <Checkbox
            checked={!!likes?.find((like) => like.itemId === params.row.id)}
            color="error"
            icon={<FavoriteBorder color="error" />}
            checkedIcon={<Favorite color="error" />}
            onChange={() => {
              if (userId && params.row.id) {
                toogleLike(userId, params.row.id);
              }
            }}
          />
        </>
      ),
    },
  ];

  function handleChangeStateTable(e: any) {
    setSelectRows(e.selection);
  }

  return (
    <Box sx={{ position: 'relative', paddingTop: '20px' }}>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '-20px',
        }}
      >
        <Button
          onClick={() => setDeleteItems(selectRows)}
          color="error"
          disabled={selectRows.length === 0}
        >
          Put Delete
        </Button>
        <Button
          onClick={() => setEditItems(selectRows)}
          disabled={selectRows.length === 0}
          color="warning"
        >
          Put Update
        </Button>
      </Box>
      <StyledDataGrid
        autoHeight
        rows={list}
        getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
        columns={columns}
        checkboxSelection
        onStateChange={handleChangeStateTable}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Table;
