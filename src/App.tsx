import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootPage from './core/RootPage/RootPage';
import LoginPageContainer from './auth/LoginPage/LoginPageContainer';
import RoutesApp from './constants/routes';
import SignUpPageContainer from './auth/SignUpPage/SignUpPageContainer';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="*" element={<RootPage />} />
      <Route path={RoutesApp.Login} element={<LoginPageContainer />} />
      <Route path={RoutesApp.SignUp} element={<SignUpPageContainer />} />
    </Routes>
  </div>
);

export default App;
