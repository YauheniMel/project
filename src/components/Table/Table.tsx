import React, { FC } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { ItemType } from '../../types';
import RoutesApp from '../../constants/routes';

interface ITable {
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const Table: FC<ITable> = ({ list, setTargetItem }) => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'icon',
      headerName: 'Icon',
      flex: 3,
      editable: true,
      renderCell: (params) => (
        <Link
          onClick={() => setTargetItem(params.row.id)}
          to={`${RoutesApp.ItemLink}id-${params.row.id}`}
        >
          <Avatar src={params.value} />
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
      components={{ Toolbar: GridToolbar }}
      rows={list}
      columns={columns}
      autoPageSize
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default Table;
