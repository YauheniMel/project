import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux';
import { loginAction } from '../../redux/actions/auth-action';
import { getIsLoading } from '../../redux/selectors/auth-selector';
import LoginPage from './LoginPage';

interface ILoginPageContainer {
  props?: string;
}

const LoginPageContainer: FC<ILoginPageContainer> = () => <LoginPage />;

const mapStateToProps = (state: AppStateType) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
