import React, { FC, useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link } from '@mui/material';
import { ItemType } from '../../types';
import RoutesApp from '../../constants/routes';

interface ITable {
  list: ItemType[];
  setTargetItem: (item: ItemType) => void;
  setEditItems: (itemIds: string[]) => void;
  setDeleteItems: (itemIds: string[]) => void;
}

const Table: FC<ITable> = ({
  list,
  setTargetItem,
  setEditItems,
  setDeleteItems,
}) => {
  const [selectRows, setSelectRows] = useState([]);
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 3,
      editable: true,
      renderCell: (params) => (
        <Link
          component={RouterLink}
          onClick={() => setTargetItem(params.row)}
          to={`${RoutesApp.CollectionLink}${params.row.collectionId}${RoutesApp.ItemLink}${params.row.id}`}
        >
          {params.row.title}
        </Link>
      ),
    },
    {
      field: 'tags',
      headerName: 'Tags',
      flex: 3,
      editable: true,
    },
    {
      field: 'countLike',
      headerName: 'Likes',
      type: 'number',
      flex: 1,
      editable: true,
    },
  ];

  function handleChangeStateTable(e: any) {
    setSelectRows(e.selection);
  }

  return (
    <Box sx={{ position: 'relative' }}>
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
      <DataGrid
        autoHeight
        components={{ Toolbar: GridToolbar }}
        rows={list}
        columns={columns}
        checkboxSelection
        onStateChange={handleChangeStateTable}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Table;
