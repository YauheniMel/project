import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CollectionsIcon from '@mui/icons-material/Collections';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Drawer, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import RoutesApp from '../../constants/routes';
import logout from '../../auth/services/logout';

const ToogleButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
  top: 0,
  right: 0,
  fontSize: '2rem',
  backgroundColor: theme.palette.primary.dark,
  maxWidth: '3.2rem',
  maxHeight: '3.2rem',
  minWidth: '3.2rem',
  minHeight: '3.2rem',
  borderRadius: 0,
}));

const LinkButton = styled(Button)({
  maxWidth: '3.2rem',
  maxHeight: '4.4rem',
  minWidth: '3.2rem',
  minHeight: '4.4rem',
  borderRadius: 0,
});

const useStyles = makeStyles((theme) => ({
  drawer: {
    zIndex: theme.zIndex.appBar - 1,
  },
  active: {
    color: theme.palette.secondary.main,
  },
  toolbar: {
    minHeight: '3.2rem',
  },
}));

interface IToolBar {
  id: string;
  logOutUser: (id: string) => void;
}

const ToolBar: FC<IToolBar> = ({ logOutUser, id }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const classes = useStyles();

  const toggleDrawer = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = async () => {
    try {
      await logout();

      logOutUser(id);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box>
      <ToogleButton onClick={toggleDrawer} variant="contained">
        <CloseIcon fontSize="large" />
      </ToogleButton>
      <Drawer
        className={classes.drawer}
        BackdropProps={{ invisible: true }}
        anchor="right"
        open={isVisible}
        onClose={toggleDrawer}
        variant="persistent"
      >
        <div className={classes.toolbar} />
        <Link component={RouterLink} to={RoutesApp.Home}>
          <LinkButton>
            <HomeIcon fontSize="large" />
          </LinkButton>
        </Link>
        <Link component={RouterLink} to={RoutesApp.User}>
          <LinkButton>
            <PersonIcon fontSize="large" />
          </LinkButton>
        </Link>
        <Link component={RouterLink} to={RoutesApp.CollectionsLink}>
          <LinkButton>
            <CollectionsIcon fontSize="large" />
          </LinkButton>
        </Link>
        <Link component={RouterLink} to={RoutesApp.Login}>
          <LinkButton onClick={handleLogout}>
            <LogoutIcon fontSize="large" />
          </LinkButton>
        </Link>
      </Drawer>
    </Box>
  );
};

export default ToolBar;
