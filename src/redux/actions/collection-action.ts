export enum CollectionActionTypes {
  getCollection = 'GET-COLLECTION',
  setTargetItem = 'SET-TARGET-ITEM',
}

export const getCollectionAction = (id: string) => ({
  type: CollectionActionTypes.getCollection,
  id,
});

export const setTargetItemAction = (id: string) => ({
  type: CollectionActionTypes.setTargetItem,
  id,
});
