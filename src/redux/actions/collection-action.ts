export enum CollectionActionTypes {
  getCollection = 'GET-COLLECTION',
  setTargetItem = 'SET-TARGET-ITEM',
  getMyCollection = 'GET-MY-COLLECTION',
  setTargetCollection = 'SET-TARGET-COLLECTION',
}

export const getMyCollectionAction = (id: string) => ({
  type: CollectionActionTypes.getMyCollection,
  id,
});

export const getCollectionAction = (ids: { id: string; userId: string }) => ({
  type: CollectionActionTypes.getCollection,
  ids,
});

export const setTargetItemAction = (id: string) => ({
  type: CollectionActionTypes.setTargetItem,
  id,
});

export const setTargetCollectionAction = (id: string) => ({
  type: CollectionActionTypes.setTargetCollection,
  id,
});
