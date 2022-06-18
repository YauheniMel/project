import { AppStateType } from '..';

export function getIsAuth(state: AppStateType): boolean {
  return state.auth.isAuth;
}

export function getIsLoading(state: AppStateType): boolean {
  return state.auth.isLoading;
}
