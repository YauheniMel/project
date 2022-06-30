import React, { FC, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core';
import {
  alpha, Avatar, Box, Link,
} from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AvatarGroup from '@mui/material/AvatarGroup';
import RoutesApp from '../../constants/routes';

interface IInputSearch {
  search: (substr: string) => void;
  itemsSearch:
  | {
    link: string;
    id: number;
    routeId: number;
    icons: string[] | null;
  }[]
  | undefined;
  usersSearch:
  | {
    link: string;
    id: number;
    routeId: number;
    icons: string[] | null;
  }[]
  | undefined;
  clearSearchData: () => void;
  setSearchList: () => void;
}

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.65),
    },
  },
  icon: {
    position: 'absolute',
    right: '15px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    columnGap: '20px',
  },
}));

const InputSearch: FC<IInputSearch> = ({
  search,
  itemsSearch,
  usersSearch,
  clearSearchData,
  setSearchList,
}) => {
  const [open, setOpen] = useState(false);
  const [substr, setSubstr] = useState<string>('');
  const [loading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const classes = useStyles();

  function searchWithDelay(
    callback: (substr: string) => void,
    substr: string,
    delay = 300,
  ) {
    setTimeout(() => {
      setIsLoading(false);
      callback(substr);
    }, delay);
  }

  useEffect(() => {
    if (substr) {
      setIsLoading(true);
      searchWithDelay(search, substr);
    }
  }, [substr]);

  return (
    <Autocomplete
      popupIcon={null}
      options={
        itemsSearch
        || usersSearch || [
          {
            link: '',
            id: 0,
            routeId: 0,
            icons: [''],
          },
        ]
      }
      id="asynchronous-demo"
      sx={{ flex: 1 }}
      open={open}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && substr.trim()) {
          setSearchList();

          navigate(RoutesApp.Search);
        }
      }}
      className={classes.wrap}
      getOptionLabel={(option) => option.link}
      renderOption={() => (itemsSearch
        ? itemsSearch?.map(
          (option) => !!option.id && (
            <Box className={classes.link}>
              {!!option.icons?.length && (
              <AvatarGroup max={4}>
                {option.icons.map((icon) => (
                  <Avatar
                    alt="Remy Sharp"
                    src={`data:application/pdf;base64,${icon}`}
                  />
                ))}
              </AvatarGroup>
              )}
              <Link
                component={RouterLink}
                to={`${RoutesApp.CollectionLink}${option.routeId}${RoutesApp.ItemLink}${option.id}`}
                style={{
                  display: 'block',
                }}
              >
                {option.link}
              </Link>
            </Box>
          ),
        )
        : usersSearch?.map(
          (option) => !!option.id && (
            <Box className={classes.link}>
              {!!option.icons?.length && (
              <AvatarGroup max={4}>
                {option.icons.map((icon, idx: any) => (
                  <Avatar
                    id={idx}
                    alt="Remy Sharp"
                    src={`data:application/pdf;base64,${icon}`}
                  />
                ))}
              </AvatarGroup>
              )}
              <Link
                component={RouterLink}
                to={`${RoutesApp.CollectionsLink}user/${option.routeId}`}
                style={{
                  display: 'block',
                }}
              >
                {option.link}
              </Link>
            </Box>
          ),
        ))}
      loading={loading}
      onBlur={() => {
        setOpen(false);
        clearSearchData();
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          onChange={(e: any) => {
            setOpen(true);
            setSubstr(e.target.value);
          }}
          variant="outlined"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Box className={classes.icon}>
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  <BsSearch size={25} />
                )}
              </Box>
            ),
          }}
        />
      )}
    />
  );
};

export default InputSearch;
