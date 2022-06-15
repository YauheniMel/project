import { AppStateType } from '..';

export function getIsAuth(state: AppStateType): boolean {
  return state.auth.isLoading;
}

export function getIsLoading(state: AppStateType): boolean {
  return state.auth.isLoading;
}
