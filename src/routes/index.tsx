import { Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import RoutesApp from '../constants/routes';
import { RootPage } from '../pages/RootPage/RootPage';
import { LoginPage } from '../pages/auth/LoginPage/LoginPage';
import { SignUpPage } from '../pages/auth/SignUpPage/SignUpPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';

export const AppRoutes: FC = () => (
  <Routes>
    <Route path={RoutesApp.Login} element={<LoginPage />} />
    <Route path={RoutesApp.SignUp} element={<SignUpPage />} />
    <Route path={RoutesApp.Root} element={<RootPage />}>
      <Route path={RoutesApp.Profile} element={<ProfilePage />} />
    </Route>
  </Routes>
);
