import React, { FC } from 'react';
import {
  AppBar, Badge, Box, IconButton, Toolbar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CommentIcon from '@mui/icons-material/Comment';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import RoutesApp from '../../constants/routes';
import InputSearch from '../InputSearch/InputSearch';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

interface IHeader {
  name: string;
  surname: string;
  isAuth: boolean;
  search: (substr: string) => void;
  itemsSearch:
  | {
    link: string;
    id: number;
    routeId: number;
    icons: string[];
  }[]
  | undefined;
  usersSearch:
  | {
    link: string;
    id: number;
    routeId: number;
    icons: string[];
  }[]
  | undefined;
}

const Header: FC<IHeader> = ({
  search,
  name,
  surname,
  isAuth,
  itemsSearch,
  usersSearch,
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        {isAuth && name ? (
          <Logo name={name} surname={surname} />
        ) : (
          <Link to={RoutesApp.Login}>Login</Link>
        )}
        <InputSearch
          search={search}
          itemsSearch={itemsSearch}
          usersSearch={usersSearch}
        />
        <Box>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <CommentIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: '40px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
