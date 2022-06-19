import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux';
import { signUpAction } from '../../redux/actions/auth-action';
import { getIsLoading } from '../../redux/selectors/auth-selector';
import SignUpPage from './SignUpPage';

interface ILoginPageContainer {
  signUpUser: () => void;
}

const SignUpPageContainer: FC<ILoginPageContainer> = (props) => (
  <SignUpPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  signUpUser: () => dispatch(signUpAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPageContainer);
