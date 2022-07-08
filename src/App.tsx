import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Backdrop, CircularProgress } from '@mui/material';
import RootPage from './core/RootPage/RootPage';
import LoginPageContainer from './auth/LoginPage/LoginPageContainer';
import RoutesApp from './constants/routes';
import SignUpPageContainer from './auth/SignUpPage/SignUpPageContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import UserPageContainer from './pages/UserPage/UserPageContainer';
import CollectionPageContainer from './pages/CollectionPage/CollectionPageContainer';
import AdminPageContainer from './pages/AdminPage/AdminPageContainer';
import CollectionsPageContainer from './pages/CollectionsPage/CollectionsPageContainer';
import {
  CredentialsType,
  getUserPersonalInfoThunk,
  toogleLikeThunk,
} from './redux/actions/user-action';
import SearchPageContainer from './pages/SearchPage/SearchPageContainer';
import { AppStateType } from './redux';
import { setIsAuthAction } from './redux/actions/auth-action';

interface IRootPage {
  getUserPersonalInfo: (payload: CredentialsType) => void;
  toogleLike: (userId: number, itemId: number) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}
const App: FC<IRootPage> = ({
  getUserPersonalInfo,
  toogleLike,
  isAuth,
  setIsAuth,
}) => {
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setIsAuth(false);

      if (user) {
        const { uid, displayName, email } = user;
        if (displayName && email) {
          const [name, surname] = displayName.split(' ');

          getUserPersonalInfo({
            id: uid,
            name,
            surname,
            email,
          });
        }
      } else {
        setIsAuth(true);
      }
    });
  }, []);

  if (!isAuth) {
    return (
      <Backdrop open={!isAuth}>
        <CircularProgress color="warning" />
      </Backdrop>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path={RoutesApp.Login} element={<LoginPageContainer />} />
        <Route path={RoutesApp.SignUp} element={<SignUpPageContainer />} />
        <Route path={RoutesApp.Root} element={<RootPage />}>
          <Route path={RoutesApp.Admin} element={<AdminPageContainer />} />
          <Route
            path={RoutesApp.Home}
            element={<HomePageContainer toogleLike={toogleLike} />}
          />
          <Route path={RoutesApp.User} element={<UserPageContainer />} />
          <Route
            path={RoutesApp.Collection}
            element={<CollectionPageContainer toogleLike={toogleLike} />}
          />
          <Route
            path={RoutesApp.Collections}
            element={<CollectionsPageContainer />}
          />
          <Route
            path={RoutesApp.Search}
            element={<SearchPageContainer toogleLike={toogleLike} />}
          />
        </Route>
      </Routes>
    </div>
  );
};
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserPersonalInfo: (payload: CredentialsType) => dispatch(getUserPersonalInfoThunk(payload)),
  toogleLike: (userId: number, itemId: number) => dispatch(toogleLikeThunk(userId, itemId)),
  setIsAuth: (isAuth: boolean) => dispatch(setIsAuthAction(isAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
