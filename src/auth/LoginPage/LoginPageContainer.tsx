import React, { FC } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/auth-action';
import LoginPage from './LoginPage';

interface ILoginPageContainer {
  props?: string;
}

const LoginPageContainer: FC<ILoginPageContainer> = () => <LoginPage />;

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
