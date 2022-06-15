export enum CollectionActionTypes {
  getCollection = 'GET-COLLECTION',
}

export const getUsersAction = () => ({
  type: CollectionActionTypes.getCollection,
});
