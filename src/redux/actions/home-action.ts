export enum HomeActionTypes {
  getCollections = 'GET-COLLECTIONS',
}

export const getUsersAction = () => ({
  type: HomeActionTypes.getCollections,
});
