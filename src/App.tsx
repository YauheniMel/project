import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import RootPage from './core/RootPage/RootPage';
import LoginPageContainer from './auth/LoginPage/LoginPageContainer';
import RoutesApp from './constants/routes';
import SignUpPageContainer from './auth/SignUpPage/SignUpPageContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import { getIsAuth } from './redux/selectors/auth-selector';
import UserPageContainer from './pages/UserPage/UserPageContainer';
import CollectionPageContainer from './pages/CollectionPage/CollectionPageContainer';
import AdminPageContainer from './pages/AdminPage/AdminPageContainer';
import CollectionsPageContainer from './pages/CollectionsPage/CollectionsPageContainer';
import {
  getUserPersonalInfoThunk,
  toogleLikeThunk,
} from './redux/actions/user-action';
import { CredentialsType, loginAction } from './redux/actions/auth-action';
import SearchPageContainer from './pages/SearchPage/SearchPageContainer';
import { AppStateType } from './redux';

interface IRootPage {
  loginUser: () => void;
  getUserPersonalInfo: (payload: CredentialsType) => void;
  toogleLike: (userId: number, itemId: number) => void;
}
const App: FC<IRootPage> = ({ loginUser, getUserPersonalInfo, toogleLike }) => {
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName } = user;
        if (displayName) {
          const [name, surname] = displayName.split(' ');

          getUserPersonalInfo({
            id: uid,
            name,
            surname,
          });
          loginUser();
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={RoutesApp.Login} element={<LoginPageContainer />} />
        <Route path={RoutesApp.SignUp} element={<SignUpPageContainer />} />
        <Route path={RoutesApp.Root} element={<RootPage />}>
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
        <Route path={RoutesApp.Admin} element={<AdminPageContainer />} />
      </Routes>
    </div>
  );
};
const mapStateToProps = (state: AppStateType) => ({
  isAuth: getIsAuth(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserPersonalInfo: (payload: CredentialsType) => dispatch(getUserPersonalInfoThunk(payload)),
  loginUser: () => dispatch(loginAction()),
  toogleLike: (userId: number, itemId: number) => dispatch(toogleLikeThunk(userId, itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
