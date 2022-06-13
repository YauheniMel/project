import React, { FC } from 'react';
import { connect } from 'react-redux';
import { signUpAction } from '../../redux/actions/auth-action';
import SignUpPage from './SignUpPage';

interface ILoginPageContainer {
  props?: string;
}

const SignUpPageContainer: FC<ILoginPageContainer> = () => <SignUpPage />;

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  signUp: () => dispatch(signUpAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPageContainer);
