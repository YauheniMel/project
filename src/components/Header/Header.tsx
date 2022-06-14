import React, { FC } from 'react';
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CommentIcon from '@mui/icons-material/Comment';
import { makeStyles } from '@material-ui/core';
import Logo from '../Logo/Logo';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    backgroundColor: theme.palette.primary.main,
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
  props?: any;
}

const Header: FC<IHeader> = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar
        className={classes.toolBar}
        sx={{ justifyContent: 'space-around' }}
      >
        <Logo />
        <Typography variant="h6" noWrap component="div">
          MUI
        </Typography>
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
