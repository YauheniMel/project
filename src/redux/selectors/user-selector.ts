import { AppStateType } from '..';
import { CollectionInitType } from '../../types';

export function getUserId(state: AppStateType): string {
  return state.user.id;
}

export function getUserName(state: AppStateType): string {
  return state.user.name;
}

export function getUserSurname(state: AppStateType): string {
  return state.user.surname;
}
export function getUserEmail(state: AppStateType): string {
  return state.user.email;
}
export function getUserStatus(state: AppStateType): 'active' | 'blocked' {
  return state.user.status;
}
export function getUserTheme(state: AppStateType): 'light' | 'dark' {
  return state.user.theme;
}
export function getUserIsAdmin(state: AppStateType): boolean {
  return state.user.isAdmin;
}
export function getUserCollections(state: AppStateType): CollectionInitType[] {
  return state.user.collections;
}
export function getUserMeta(state: AppStateType): {
  loginDate: string;
  registerDate: string;
} {
  return state.user.meta;
}
