import React, { FC, useState } from 'react';
import { Box, Drawer, IconButton } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@material-ui/core/styles';
import CollectionsIcon from '@mui/icons-material/Collections';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import RoutesApp from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  drawer: {
    zIndex: theme.zIndex.appBar - 1,
  },
  toogle: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    top: 0,
    right: 0,
  },
  active: {
    color: theme.palette.secondary.main,
  },
  toolbar: theme.mixins.toolbar,
}));

interface IToolBar {
  props?: any;
}

const ToolBar: FC<IToolBar> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const classes = useStyles();

  const toggleDrawer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box>
      <IconButton className={classes.toogle} onClick={toggleDrawer}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <Drawer
        className={classes.drawer}
        BackdropProps={{ invisible: true }}
        anchor="right"
        open={isVisible}
        onClose={toggleDrawer}
        variant="persistent"
      >
        <div className={classes.toolbar} />
        <Link to={RoutesApp.Home}>
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to={RoutesApp.Collection}>
          <IconButton>
            <CollectionsIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to={RoutesApp.Login}>
          <IconButton>
            <LogoutIcon fontSize="large" />
          </IconButton>
        </Link>
      </Drawer>
    </Box>
  );
};

export default ToolBar;
