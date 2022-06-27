import { requestAPI } from '../../api/api';

export interface CredentialsType {
  id: string;
  name: string;
  surname: string;
}

export enum AUTH {
  login = 'LOGIN-USER',
  signUp = 'SIGN-UP',
  logOut = 'LOGOUT',
}

export const loginAction = () => ({
  type: AUTH.login,
});

const signUpAction = () => ({
  type: AUTH.signUp,
});

const logOutAction = () => ({
  type: AUTH.logOut,
});

export const signUpThunk = (credentials: CredentialsType) => (dispatch: any) => {
  requestAPI.signUpUser(credentials).then(() => {
    dispatch(signUpAction());
  });
};

export const logOutThunk = (userId: string) => (dispatch: any) => {
  requestAPI.logOutUser(userId).then(() => {
    dispatch(logOutAction());
  });
};

export const loginThunk = (userId: string) => (dispatch: any) => {
  requestAPI.loginUser(userId).then(() => {
    dispatch(loginAction());
  });
};
