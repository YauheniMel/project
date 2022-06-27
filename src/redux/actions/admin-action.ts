export enum AdminActionTypes {
  setAdminTargetUser = 'SET-ADMIN-TARGET-USER',
  setAdminTargetCollections = 'SET-ADMIN-TARGET-COLLECTIONS',
}

export const setAdminTargetUser = (id: number) => ({
  type: AdminActionTypes.setAdminTargetUser,
  id,
});

export const setAdminTargetCollectons = (id: number) => ({
  type: AdminActionTypes.setAdminTargetCollections,
  id,
});
