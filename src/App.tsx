import React, { FC, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
import { loginAction } from './redux/actions/auth-action';
// import { auth } from './auth/firebase-config';

interface IRootPage {
  isAuth: boolean;
  setTargetItem: (id: string) => void;
  login: () => void;
}
const App: FC<IRootPage> = ({ setTargetItem, isAuth, login }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        console.log(uid);
        login();

        navigate(RoutesApp.Home);
      } else {
        navigate(RoutesApp.Login);
      }
    });
  }, [isAuth]);

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
  login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
