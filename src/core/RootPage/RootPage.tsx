import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToolBar from '../../components/ToolBar/ToolBar';
import { AppStateType } from '../../redux';
import {
  getUserId,
  getUserName,
  getUserSurname,
} from '../../redux/selectors/user-selector';
import { getIsAuth } from '../../redux/selectors/auth-selector';

interface IRootPage {
  id: string;
  name: string;
  surname: string;
  isAuth: boolean;
}

const RootPage: FC<IRootPage> = ({
  id, name, surname, isAuth,
}) => {
  console.log(id);
  return (
    <>
      <Header name={name} surname={surname} isAuth={isAuth} />
      <Container fixed>
        <Outlet />
      </Container>
      <ToolBar />
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(RootPage);
