export enum AdminActionTypes {
  setAdminTargetUser = 'SET-ADMIN-TARGET-USER',
  setAdminTargetCollections = 'SET-ADMIN-TARGET-COLLECTIONS',
}

export const setAdminTargetUser = (id: string) => ({
  type: AdminActionTypes.setAdminTargetUser,
  id,
});

export const setAdminTargetCollectons = (id: string) => ({
  type: AdminActionTypes.setAdminTargetCollections,
  id,
});
