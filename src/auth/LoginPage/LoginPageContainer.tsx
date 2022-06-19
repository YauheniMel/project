import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux';
import { loginAction } from '../../redux/actions/auth-action';
import { getIsLoading } from '../../redux/selectors/auth-selector';
import LoginPage from './LoginPage';

interface ILoginPageContainer {
  loginUser: () => void;
}

const LoginPageContainer: FC<ILoginPageContainer> = (props) => (
  <LoginPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  loginUser: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
