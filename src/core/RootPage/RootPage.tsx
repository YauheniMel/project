import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToolBar from '../../components/ToolBar/ToolBar';
import { AppStateType } from '../../redux';
import {
  getUserId,
  getUserName,
  getUserSurname,
} from '../../redux/selectors/user-selector';
import { getIsAuth } from '../../redux/selectors/auth-selector';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  grid: {
    flex: 1,
  },
  grid_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

interface IRootPage {
  id: string;
  name: string;
  surname: string;
  isAuth: boolean;
}

const RootPage: FC<IRootPage> = ({
  id, name, surname, isAuth,
}) => {
  const classes = useStyles();
  console.log(id);
  return (
    <Box className={classes.root}>
      <Header name={name} surname={surname} isAuth={isAuth} />
      <Container className={classes.grid} fixed>
        <Outlet />
      </Container>
      <ToolBar />
    </Box>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(RootPage);
