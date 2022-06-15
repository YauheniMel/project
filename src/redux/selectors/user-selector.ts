import { AppStateType } from '..';
import { CollectionType, ItemType } from '../../types';

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
export function getUserCollections(state: AppStateType): CollectionType[] {
  return state.user.collections;
}
export function getUserList(state: AppStateType): ItemType[] {
  return state.user.list;
}
export function getUserMeta(state: AppStateType): {
  loginDate: string;
  registerDate: string;
} {
  return state.user.meta;
}
