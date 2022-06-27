import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { loginThunk } from '../../redux/actions/auth-action';
import { getIsLoading } from '../../redux/selectors/auth-selector';
import { getUserIdFirebase } from '../../redux/selectors/user-selector';
import LoginPage from './LoginPage';

interface ILoginPageContainer {
  id: string;
  loginUser: (userId: string) => void;
}

const LoginPageContainer: FC<ILoginPageContainer> = (props) => (
  <LoginPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: getUserIdFirebase(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (userId: string) => dispatch(loginThunk(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
