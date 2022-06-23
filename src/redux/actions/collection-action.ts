import { requestAPI } from '../../api/api';
import {
  CollectionInitType,
  CollectionType,
  ItemInitType,
  ItemType,
} from '../../types';

export enum CollectionActionTypes {
  SetTargetItem = 'SET-TARGET-ITEM',
  SetTargetCollection = 'SET-TARGET-COLLECTION',
  SetTargetCollectionItems = 'SET-TARGET-COLLECTION-ITEMS',
}

export const setTargetItemAction = (item: ItemType) => ({
  type: CollectionActionTypes.SetTargetItem,
  item,
});

export const setTargetCollectionAction = (collection: CollectionType) => ({
  type: CollectionActionTypes.SetTargetCollection,
  collection,
});

export const setTargetCollectionItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.SetTargetCollectionItems,
  items,
});

export const getCollectionItemsThunk = (collectionId: string) => (dispatch: any) => {
  requestAPI.getCollectionItems(collectionId).then((response) => {
    dispatch(setTargetCollectionItemsAction(response as ItemType[]));
  });
};

export const getTargetCollectionThunk = (collectionId: string) => (dispatch: any) => {
  requestAPI.getCollection(collectionId).then((response) => {
    dispatch(setTargetCollectionAction(response as CollectionType));
  });
};

export const getTargetItemThunk = (itemId: string, collectionId: string) => (dispatch: any) => {
  requestAPI.getItem(itemId, collectionId).then((response) => {
    dispatch(setTargetItemAction(response as ItemType));
  });
};

export const createNewCollectionThunk = (collectionInfo: CollectionInitType) => (dispatch: any) => {
  console.log(dispatch);
  requestAPI
    .createCollection(collectionInfo)
    .then((response) => console.log(response));
};

export const createNewItemThunk = (itemInfo: ItemInitType) => (dispatch: any) => {
  console.log(dispatch);

  requestAPI.createItem(itemInfo).then((response) => console.log(response));
};

export const deleteCollectionThunk = (collectionId: string) => (dispatch: any) => {
  console.log(dispatch);

  requestAPI
    .deleteCollection(collectionId)
    .then((response) => console.log(response));
};

export const deleteItemThunk = (itemId: string) => (dispatch: any) => {
  console.log(dispatch);

  requestAPI.deleteItem(itemId).then((response) => console.log(response));
};
