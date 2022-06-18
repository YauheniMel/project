import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  alpha,
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CommentIcon from '@mui/icons-material/Comment';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import RoutesApp from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    height: '100%',
    pointerEvents: 'none',
    marginRight: '5px',
  },
  input: {
    padding: '5px 10px',
  },
}));

interface IHeader {
  name: string;
  surname: string;
  isAuth: boolean;
}

const Header: FC<IHeader> = ({ name, surname, isAuth }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        {isAuth ? (
          <Logo name={name} surname={surname} />
        ) : (
          <Link to={RoutesApp.Login}>Login</Link>
        )}
        <Box className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIcon className={classes.searchIcon} />
        </Box>
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
