import React, { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import RoutesApp from '../../constants/routes';
import InputSearch from '../InputSearch/InputSearch';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  zIndex: theme.zIndex.drawer + 1,
  top: 0,
  left: 0,
  backgroundColor: theme.palette.common.white,
  paddingRight: '60px',
}));

interface IHeader {
  name: string;
  surname: string;
  isAuth: boolean;
  isAdmin: boolean;
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
  clearSearchData: () => void;
  setSearchList: () => void;
}

const Header: FC<IHeader> = ({
  name, surname, isAuth, isAdmin, ...rest
}) => (
  <StyledAppBar>
    <Toolbar
      sx={{
        justifyContent: 'space-around',
        columnGap: '15px',
      }}
    >
      {isAuth && name ? (
        <Logo name={name} isAdmin={isAdmin} surname={surname} />
      ) : (
        <Link to={RoutesApp.Login}>Login</Link>
      )}
      <InputSearch {...rest} />
      {/* <Box>
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
      </Box> */}
      <Box sx={{ flexGrow: '40px' }} />
    </Toolbar>
  </StyledAppBar>
);

export default Header;
