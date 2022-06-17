import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToolBar from '../../components/ToolBar/ToolBar';
import { AppDispatchType, AppStateType } from '../../redux';
import CollectionPageContainer from '../../pages/CollectionPage/CollectionPageContainer';
import {
  getUserId,
  getUserName,
  getUserSurname,
} from '../../redux/selectors/user-selector';
import { getIsAuth } from '../../redux/selectors/auth-selector';
import HomePageContainer from '../../pages/HomePage/HomePageContainer';
import RoutesApp from '../../constants/routes';
import { setTargetItemAction } from '../../redux/actions/collection-action';
import UserPageContainer from '../../pages/UserPage/UserPageContainer';

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
  setTargetItem: (id: string) => void;
}

const RootPage: FC<IRootPage> = ({
  id,
  name,
  surname,
  isAuth,
  setTargetItem,
}) => {
  const classes = useStyles();
  console.log(id);
  return (
    <Box className={classes.root}>
      <Header name={name} surname={surname} isAuth={isAuth} />
      <Container className={classes.grid} fixed>
        <Routes>
          <Route
            path={RoutesApp.Home}
            element={<HomePageContainer setTargetItem={setTargetItem} />}
          />
          <Route path={RoutesApp.User} element={<UserPageContainer />} />
          <Route
            path={RoutesApp.Collection}
            element={<CollectionPageContainer setTargetItem={setTargetItem} />}
          />
        </Routes>
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

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  setTargetItem: (id: string) => dispatch(setTargetItemAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
