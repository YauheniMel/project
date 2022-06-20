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

export function getAdminUsers(state: AppStateType): UserType[] | null {
  return state.admin.users;
}
