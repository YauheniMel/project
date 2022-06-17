import { AppStateType } from '..';
import { CollectionInitType, UserType } from '../../types';

export function getTargetUser(state: AppStateType): UserType | null {
  return state.admin.targetUser;
}

export function getTargetCollections(
  state: AppStateType,
): CollectionInitType[] | null {
  return state.admin.targetCollections;
}

export function getAdminId(state: AppStateType): string {
  return state.user.id;
}

export function getAdminName(state: AppStateType): string {
  return state.user.name;
}

export function getAdminSurname(state: AppStateType): string {
  return state.user.surname;
}
export function getAdminEmail(state: AppStateType): string {
  return state.user.email;
}
export function getAdminStatus(state: AppStateType): 'active' | 'blocked' {
  return state.user.status;
}
export function getAdminTheme(state: AppStateType): 'light' | 'dark' {
  return state.user.theme;
}
export function getAdminIsAdmin(state: AppStateType): boolean {
  return state.user.isAdmin;
}
export function getAdminMeta(state: AppStateType): {
  loginDate: string;
  registerDate: string;
} {
  return state.user.meta;
}
