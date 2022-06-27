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
import { setTargetItemAction } from './redux/actions/collection-action';
import UserPageContainer from './pages/UserPage/UserPageContainer';
import CollectionPageContainer from './pages/CollectionPage/CollectionPageContainer';
import AdminPageContainer from './pages/AdminPage/AdminPageContainer';
import CollectionsPageContainer from './pages/CollectionsPage/CollectionsPageContainer';
import { getUserPersonalInfoThunk } from './redux/actions/user-action';
import { CredentialsType, loginAction } from './redux/actions/auth-action';
import SearchPageContainer from './pages/SearchPage/SearchPageContainer';
import { AppStateType } from './redux';
import { ItemType } from './types';

interface IRootPage {
  setTargetItem: (item: ItemType) => void;
  loginUser: () => void;
  getUserPersonalInfo: (payload: CredentialsType) => void;
}
const App: FC<IRootPage> = ({
  setTargetItem,
  loginUser,
  getUserPersonalInfo,
}) => {
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
            element={<HomePageContainer setTargetItem={setTargetItem} />}
          />
          <Route path={RoutesApp.User} element={<UserPageContainer />} />
          <Route
            path={RoutesApp.Collection}
            element={<CollectionPageContainer />}
          />
          <Route
            path={RoutesApp.Collections}
            element={<CollectionsPageContainer />}
          />
          <Route path={RoutesApp.Search} element={<SearchPageContainer />} />
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
  setTargetItem: (item: ItemType) => dispatch(setTargetItemAction(item)),
  getUserPersonalInfo: (payload: CredentialsType) => dispatch(getUserPersonalInfoThunk(payload)),
  loginUser: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
