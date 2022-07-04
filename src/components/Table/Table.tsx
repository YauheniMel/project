/* eslint-disable consistent-return */
import React, { FC, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  gridClasses,
  getGridNumericOperators,
  getGridDateOperators,
  getGridStringOperators,
  GridFilterOperator,
  GridCellParams,
  GridFilterItem,
} from '@mui/x-data-grid';
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
import {
  compareCountLikesComparator,
  compareCountTagsComparator,
  inputNumberValue,
  operatorContains,
  operatorIs,
  operatorBefore,
  operatorAfter,
  operatorEquals,
  operatorExistTag,
  operatorIsEmpty,
  operatorIsNotEmpty,
  operatorStartsWith,
} from '../../filters/filters';

const operatorEqualsNumber: GridFilterOperator = {
  label: '=',
  value: '=',
  getApplyFilterFn: (filterItem: GridFilterItem) => {
    if (
      !filterItem.columnField
      || !filterItem.value
      || !filterItem.operatorValue
    ) {
      return null;
    }

    return (params: GridCellParams): boolean => Number(params.value) >= Number(filterItem.value);
  },
  InputComponent: inputNumberValue,
  InputComponentProps: { type: 'number' },
};

interface ITable {
  collectionId: number;
  userId: number;
  list: ItemType[];
  setTargetItem: (item: ItemType) => void;
  setEditItems: (itemIds: number[]) => void;
  setDeleteItems: (itemIds: number[]) => void;
  toogleLike: (userId: number, itemId: number) => void;
  likes: { itemId: number }[] | null;
  getCollectionItems: (collectionId: number) => void;
  customFields: any;
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
  collectionId,
  list,
  setTargetItem,
  setEditItems,
  setDeleteItems,
  toogleLike,
  userId,
  likes,
  getCollectionItems,
  customFields,
}) => {
  const [selectRows, setSelectRows] = useState([]);

  const { CollectionLink, ItemLink } = RoutesApp;

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Link
          component={RouterLink}
          onClick={() => setTargetItem(params.row)}
          to={`${CollectionLink}${params.row.collectionId}${ItemLink}${params.row.id}`}
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
      filterOperators: getGridStringOperators()
        .filter(
          (operator) => operator.value === 'contains'
            || operator.value === 'equals'
            || operator.value === 'startsWith',
        )
        .map((operator) => {
          if (operator.value === 'equals') {
            return operatorEquals;
          }

          if (operator.value === 'contains') {
            return operatorContains;
          }

          if (operator.value === 'startsWith') {
            return operatorStartsWith;
          }

          return operator;
        }),
    },
    {
      field: 'tags',
      headerName: 'Tags',
      type: 'string',
      sortComparator: compareCountTagsComparator,
      minWidth: 150,
      flex: 1,
      renderCell: (params) => params.row.tags.map((tag: any) => <Chip label={tag.content} />),
      filterOperators: getGridStringOperators()
        .filter((operator) => operator.value === 'contains')
        .map(() => operatorExistTag),
    },
    {
      field: 'likes',
      headerName: 'Likes',
      type: 'number',
      width: 100,
      sortComparator: compareCountLikesComparator,
      renderCell: (params) => params.row.likes && params.row.likes.length,
      filterOperators: getGridNumericOperators()
        .filter(
          (operator) => operator.value === '>'
            || operator.value === '<'
            || operator.value === '=',
        )
        .map(() => operatorEqualsNumber),
    },
    {
      field: 'textValue1',
      headerName: customFields[9].textKey1 ? customFields[9].textKey1 : 'none',
      type: 'string',
      width: 100,
      renderCell: (params) => params.row.textValue1,
      filterOperators: getGridStringOperators()
        .filter(
          (operator) => operator.value === 'contains'
            || operator.value === 'equals'
            || operator.value === 'startsWith'
            || operator.value === 'isEmpty'
            || operator.value === 'isNotEmpty',
        )
        .map((operator) => {
          if (operator.value === 'equals') {
            return operatorEquals;
          }

          if (operator.value === 'contains') {
            return operatorContains;
          }

          if (operator.value === 'startsWith') {
            return operatorStartsWith;
          }

          if (operator.value === 'isEmpty') {
            return operatorIsEmpty;
          }

          if (operator.value === 'isNotEmpty') {
            return operatorIsNotEmpty;
          }

          return operator;
        }),
    },
    {
      field: 'textValue2',
      headerName: customFields[10].textKey2
        ? customFields[10].textKey2
        : 'none',
      type: 'string',
      width: 100,
      renderCell: (params) => params.row.textValue2,
      filterOperators: getGridStringOperators()
        .filter(
          (operator) => operator.value === 'contains'
            || operator.value === 'equals'
            || operator.value === 'startsWith'
            || operator.value === 'isEmpty'
            || operator.value === 'isNotEmpty',
        )
        .map((operator) => {
          if (operator.value === 'equals') {
            return operatorEquals;
          }

          if (operator.value === 'contains') {
            return operatorContains;
          }

          if (operator.value === 'startsWith') {
            return operatorStartsWith;
          }

          if (operator.value === 'isEmpty') {
            return operatorIsEmpty;
          }

          if (operator.value === 'isNotEmpty') {
            return operatorIsNotEmpty;
          }

          return operator;
        }),
    },
    {
      field: 'textValue3',
      headerName: customFields[11].textKey3
        ? customFields[11].textKey3
        : 'none',
      type: 'string',
      width: 100,
      renderCell: (params) => params.row.textValue3,
      filterOperators: getGridStringOperators()
        .filter(
          (operator) => operator.value === 'contains'
            || operator.value === 'equals'
            || operator.value === 'startsWith'
            || operator.value === 'isEmpty'
            || operator.value === 'isNotEmpty',
        )
        .map((operator) => {
          if (operator.value === 'equals') {
            return operatorEquals;
          }

          if (operator.value === 'contains') {
            return operatorContains;
          }

          if (operator.value === 'startsWith') {
            return operatorStartsWith;
          }

          if (operator.value === 'isEmpty') {
            return operatorIsEmpty;
          }

          if (operator.value === 'isNotEmpty') {
            return operatorIsNotEmpty;
          }

          return operator;
        }),
    },
    {
      field: 'dateValue1',
      headerName: customFields[0].dateKey1 ? customFields[0].dateKey1 : 'none',
      type: 'date',
      width: 100,
      renderCell: (params) => params.row.dateValue1,
      filterOperators: getGridDateOperators()
        .filter(
          (operator) => operator.value === 'is'
            || operator.value === 'after'
            || operator.value === 'before'
            || operator.value === 'isEmpty'
            || operator.value === 'isNotEmpty',
        )
        .map((operator) => {
          if (operator.value === 'is') {
            return operatorIs;
          }

          if (operator.value === 'after') {
            return operatorAfter;
          }

          if (operator.value === 'before') {
            return operatorBefore;
          }

          if (operator.value === 'isEmpty') {
            return operatorIsEmpty;
          }

          if (operator.value === 'isNotEmpty') {
            return operatorIsNotEmpty;
          }

          return operator;
        }),
    },
    {
      field: 'dateValue2',
      headerName: customFields[1].dateKey2 ? customFields[1].dateKey2 : 'none',
      type: 'date',
      width: 100,
      renderCell: (params) => params.row.dateValue2,
      filterOperators: getGridDateOperators()
        .filter(
          (operator) => operator.value === 'is'
            || operator.value === 'after'
            || operator.value === 'before'
            || operator.value === 'isEmpty'
            || operator.value === 'isNotEmpty',
        )
        .map((operator) => {
          if (operator.value === 'is') {
            return operatorIs;
          }

          if (operator.value === 'after') {
            return operatorAfter;
          }

          if (operator.value === 'before') {
            return operatorBefore;
          }

          if (operator.value === 'isEmpty') {
            return operatorIsEmpty;
          }

          if (operator.value === 'isNotEmpty') {
            return operatorIsNotEmpty;
          }

          return operator;
        }),
    },
    {
      field: 'dateValue3',
      headerName: customFields[2].dateKey3 ? customFields[2].dateKey3 : 'none',
      type: 'date',
      width: 100,
      renderCell: (params) => params.row.dateValue3,
      filterOperators: getGridDateOperators()
        .filter(
          (operator) => operator.value === 'is'
            || operator.value === 'after'
            || operator.value === 'before'
            || operator.value === 'isEmpty'
            || operator.value === 'isNotEmpty',
        )
        .map((operator) => {
          if (operator.value === 'is') {
            return operatorIs;
          }

          if (operator.value === 'after') {
            return operatorAfter;
          }

          if (operator.value === 'before') {
            return operatorBefore;
          }

          if (operator.value === 'isEmpty') {
            return operatorIsEmpty;
          }

          if (operator.value === 'isNotEmpty') {
            return operatorIsNotEmpty;
          }

          return operator;
        }),
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
        <Button onClick={() => getCollectionItems(collectionId)} color="error">
          Filter cleaning
        </Button>
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
      {customFields && (
        <StyledDataGrid
          autoHeight
          rows={list}
          getRowClassName={(params) => {
            const { indexRelativeToCurrentPage } = params;

            return indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
          }}
          columns={columns}
          initialState={{
            columns: {
              columnVisibilityModel: {
                dateValue1: !!customFields[0].dateKey1,
                dateValue2: !!customFields[1].dateKey2,
                dateValue3: !!customFields[2].dateKey3,
                textValue1: !!customFields[9].textKey1,
                textValue2: !!customFields[10].textKey2,
                textValue3: !!customFields[11].textKey3,
              },
            },
          }}
          disableExtendRowFullWidth
          checkboxSelection
          onStateChange={handleChangeStateTable}
          disableSelectionOnClick
        />
      )}
    </Box>
  );
};

export default Table;
