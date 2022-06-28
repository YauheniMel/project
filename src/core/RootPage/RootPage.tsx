import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToolBar from '../../components/ToolBar/ToolBar';
import { AppStateType } from '../../redux';
import {
  getUserIdFirebase,
  getUserName,
  getUserSurname,
} from '../../redux/selectors/user-selector';
import { getIsAuth } from '../../redux/selectors/auth-selector';
import { logOutThunk } from '../../redux/actions/auth-action';

interface IRootPage {
  id: string;
  name: string;
  surname: string;
  isAuth: boolean;
  logOutUser: (id: string) => void;
}

const RootPage: FC<IRootPage> = ({
  id, name, surname, isAuth, logOutUser,
}) => (
  <>
    <Header name={name} surname={surname} isAuth={isAuth} />
    <Container>
      <Outlet />
    </Container>
    <ToolBar logOutUser={logOutUser} id={id} />
  </>
);

const mapStateToProps = (state: AppStateType) => ({
  id: getUserIdFirebase(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  isAuth: getIsAuth(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  logOutUser: (id: string) => dispatch(logOutThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
