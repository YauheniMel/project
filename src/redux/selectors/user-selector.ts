import { AppStateType } from '..';
import { CollectionType, ItemType } from '../../types';

export function getUserIdFirebase(state: AppStateType): string {
  return state.user.userId;
}

export function getUserId(state: AppStateType): number {
  return state.user.id;
}

export function getUserName(state: AppStateType): string {
  return state.user.name;
}

export function getUserSurname(state: AppStateType): string {
  return state.user.surname;
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

export function getMyCollectionsSelector(
  state: AppStateType,
): CollectionType[] | null {
  return state.user.myCollections;
}

export function getEditCollections(
  state: AppStateType,
): Array<CollectionType | null> {
  return state.user.listEditCollections;
}

export function getDeleteCollections(
  state: AppStateType,
): Array<CollectionType | null> {
  return state.user.listDeleteCollections;
}

export function getSearchItemsSelector(state: AppStateType): ItemType[] | null {
  return state.user.itemsSearch;
}

export function getSearchUsersSelector(state: AppStateType): {
  name: string;
  surname: string;
  collections: Array<CollectionType | null>;
} {
  return state.user.usersSearch;
}
