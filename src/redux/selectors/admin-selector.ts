import { AppStateType } from '..';
import { CollectionInitType, UserType } from '../../types';

export function getAdminTargetUser(state: AppStateType): UserType | null {
  return state.admin.targetUser;
}

export function getAdminTargetCollections(
  state: AppStateType,
): CollectionInitType[] | null {
  return state.admin.targetCollections;
}

export function getAdminId(state: AppStateType): string {
  return state.admin.id;
}

export function getAdminName(state: AppStateType): string {
  return state.admin.name;
}

export function getAdminSurname(state: AppStateType): string {
  return state.admin.surname;
}
export function getAdminEmail(state: AppStateType): string {
  return state.admin.email;
}
export function getAdminStatus(state: AppStateType): 'active' | 'blocked' {
  return state.admin.status;
}
export function getAdminTheme(state: AppStateType): 'light' | 'dark' {
  return state.admin.theme;
}
export function getAdminIsAdmin(state: AppStateType): boolean {
  return state.admin.isAdmin;
}
export function getAdminMeta(state: AppStateType): {
  loginDate: string;
  registerDate: string;
} {
  return state.admin.meta;
}

export function getAdminUsers(state: AppStateType): UserType[] | null {
  return state.admin.users;
}
