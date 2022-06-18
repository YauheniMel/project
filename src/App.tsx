import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import RootPage from './core/RootPage/RootPage';
import LoginPageContainer from './auth/LoginPage/LoginPageContainer';
import RoutesApp from './constants/routes';
import SignUpPageContainer from './auth/SignUpPage/SignUpPageContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import { getIsAuth } from './redux/selectors/auth-selector';
import { AppDispatchType, AppStateType } from './redux';
import { setTargetItemAction } from './redux/actions/collection-action';
import UserPageContainer from './pages/UserPage/UserPageContainer';
import CollectionPageContainer from './pages/CollectionPage/CollectionPageContainer';

import AdminPageContainer from './pages/AdminPage/AdminPageContainer';
import CollectionsPageContainer from './pages/CollectionsPage/CollectionsPageContainer';

interface IRootPage {
  isAuth: boolean;
  setTargetItem: (id: string) => void;
}

const App: FC<IRootPage> = ({ setTargetItem, isAuth }) => {
  console.log(isAuth);

  return (
    <div className="App">
      <Routes>
        <Route path={RoutesApp.Root} element={<RootPage />}>
          <Route
            path={RoutesApp.Home}
            element={<HomePageContainer setTargetItem={setTargetItem} />}
          />
          <Route path={RoutesApp.User} element={<UserPageContainer />} />
          <Route
            path={RoutesApp.Collection}
            element={<CollectionPageContainer setTargetItem={setTargetItem} />}
          />
          <Route
            path={RoutesApp.Collections}
            element={<CollectionsPageContainer />}
          />
        </Route>
        <Route path={RoutesApp.Admin} element={<AdminPageContainer />} />
        <Route path={RoutesApp.Login} element={<LoginPageContainer />} />
        <Route path={RoutesApp.SignUp} element={<SignUpPageContainer />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: getIsAuth(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  setTargetItem: (id: string) => dispatch(setTargetItemAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
