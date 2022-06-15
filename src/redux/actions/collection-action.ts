export enum CollectionActionTypes {
  getCollection = 'GET-COLLECTION',
  setTargetItem = 'SET-TARGET-ITEM',
}

export const getUsersAction = () => ({
  type: CollectionActionTypes.getCollection,
});

export const setTargetItemAction = (id: string) => ({
  type: CollectionActionTypes.setTargetItem,
  id,
});
