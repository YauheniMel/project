import { requestAPI } from '../../api/api';
import {
  CollectionInitType,
  CollectionType,
  ItemInitType,
  ItemType,
} from '../../types';

export enum CollectionActionTypes {
  SetTargetItem = 'SET-TARGET-ITEM',
  DeleteItem = 'DELETE-ITEM',
  SetTargetCollection = 'SET-TARGET-COLLECTION',
  SetTargetCollectionItems = 'SET-TARGET-COLLECTION-ITEMS',
  UpdateEditListItems = 'UPDATE-EDIT-LIST-ITEMS',
  SetEditListItems = 'SET-EDIT-LIST-ITEMS',
  UpdateDeleteListItems = 'UPDATE-DELETE-LIST-ITEMS',
  SetDeleteListItems = 'SET-DELETE-LIST-ITEMS',
}

export const setTargetItemAction = (item: ItemType) => ({
  type: CollectionActionTypes.SetTargetItem,
  item,
});

export const deleteItemAction = (itemId: string) => ({
  type: CollectionActionTypes.DeleteItem,
  itemId,
});

export const setTargetCollectionAction = (collection: CollectionType) => ({
  type: CollectionActionTypes.SetTargetCollection,
  collection,
});

export const setTargetCollectionItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.SetTargetCollectionItems,
  items,
});

export const updateEditListItemsAction = (itemIds: string[]) => ({
  type: CollectionActionTypes.UpdateEditListItems,
  itemIds,
});

export const setEditListItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.SetEditListItems,
  items,
});

export const updateDeleteListItemsAction = (itemIds: string[]) => ({
  type: CollectionActionTypes.UpdateDeleteListItems,
  itemIds,
});

export const setDeleteListItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.SetDeleteListItems,
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

export const delItemThunk = (itemId: string) => (dispatch: any) => {
  console.log(dispatch);
  requestAPI.deleteItem(itemId).then((response) => console.log(response));
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
  requestAPI
    .deleteItem(itemId)
    .then((response) => dispatch(deleteItemAction(response)));
};

export const setEditItemsThunk = (itemIds: string[]) => (dispatch: any) => {
  requestAPI
    .setEditItems(itemIds)
    .then(() => dispatch(updateEditListItemsAction(itemIds)));
};

export const setDeleteItemsThunk = (itemIds: string[]) => (dispatch: any) => {
  requestAPI
    .setDeleteItems(itemIds)
    .then(() => dispatch(updateDeleteListItemsAction(itemIds)));
};

export const getEditItemsThunk = (collectionId: string) => (dispatch: any) => {
  requestAPI
    .getEditItems(collectionId)
    .then((response) => dispatch(setEditListItemsAction(response as ItemType[])));
};

export const getDeleteItemsThunk = (collectionId: string) => (dispatch: any) => {
  requestAPI
    .getDeleteItems(collectionId)
    .then((response) => dispatch(setDeleteListItemsAction(response as ItemType[])));
};
