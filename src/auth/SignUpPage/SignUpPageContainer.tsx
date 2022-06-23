import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { CredentialsType, signUpThunk } from '../../redux/actions/auth-action';
import { getIsLoading } from '../../redux/selectors/auth-selector';
import SignUpPage from './SignUpPage';

interface ILoginPageContainer {
  signUpUser: (credentials: CredentialsType) => void;
}

const SignUpPageContainer: FC<ILoginPageContainer> = (props) => (
  <SignUpPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  signUpUser: (credentials: CredentialsType) => dispatch(signUpThunk(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPageContainer);
