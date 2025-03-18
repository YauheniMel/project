import { requestAPI } from '../../api/api';
import { CreateUserDto, ICredentials, IUser } from '../../types';
import { setAccessToken, setIsLoading } from './share-action';
import { AppDispatch, RootState } from '../index';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setAuthorizationHeader } from '../../axios';

export enum UserActionTypes {
  login = 'LOGIN',
  logout = 'LOGOUT',
}

const loginAction = (payload: IUser) => ({
  type: UserActionTypes.login,
  payload,
});

export const logoutUserAction = () => ({
  type: UserActionTypes.logout,
});

export const loginThunk =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));

      const result = await requestAPI.loginUser(credentials);

      if (result) {
        dispatch(loginAction(result.user));
        dispatch(setAccessToken(result.accessToken));
        setAuthorizationHeader(result.accessToken);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const signUpThunk =
  (userInfo: CreateUserDto) =>
  async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    try {
      dispatch(setIsLoading(true));

      const result = await requestAPI.signUpUser(userInfo);

      if (result) {
        dispatch(loginAction(result.user));
        dispatch(setAccessToken(result.accessToken));
        setAuthorizationHeader(result.accessToken);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const logOutThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    const result = await requestAPI.logOutUser(userId);

    if (result) {
      dispatch(logoutUserAction());
      setAuthorizationHeader(undefined);
    }
  };
