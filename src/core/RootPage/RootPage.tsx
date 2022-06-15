import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
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
        <Grid
          sx={{ height: '100%' }}
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={3} sm={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={9} sm={8}>
            <Box className={classes.grid_item}>
              <Routes>
                <Route
                  path={RoutesApp.Home}
                  element={<HomePageContainer setTargetItem={setTargetItem} />}
                />
                <Route
                  path={RoutesApp.Collection}
                  element={
                    <CollectionPageContainer setTargetItem={setTargetItem} />
                  }
                />
              </Routes>
            </Box>
          </Grid>
        </Grid>
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
