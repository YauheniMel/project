import React, { FC } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { ItemType } from '../../types';
import RoutesApp from '../../constants/routes';

interface ITable {
  list: ItemType[];
  setTargetItem: (item: ItemType) => void;
}

const Table: FC<ITable> = ({ list, setTargetItem }) => {
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

  return (
    <DataGrid
      autoHeight
      components={{ Toolbar: GridToolbar }}
      rows={list}
      columns={columns}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default Table;
