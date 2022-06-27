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
  PullOutItem = 'PULL-OUT-ITEM',
}

export const setTargetItemAction = (item: ItemType) => ({
  type: CollectionActionTypes.SetTargetItem,
  item,
});

export const deleteItemAction = (itemId: number) => ({
  type: CollectionActionTypes.DeleteItem,
  itemId,
});

export const pullOutItemAction = (itemId: number) => ({
  type: CollectionActionTypes.PullOutItem,
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

export const updateEditListItemsAction = (itemIds: number[]) => ({
  type: CollectionActionTypes.UpdateEditListItems,
  itemIds,
});

export const setEditListItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.SetEditListItems,
  items,
});

export const updateDeleteListItemsAction = (itemIds: number[]) => ({
  type: CollectionActionTypes.UpdateDeleteListItems,
  itemIds,
});

export const setDeleteListItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.SetDeleteListItems,
  items,
});

export const getCollectionItemsThunk = (collectionId: number) => (dispatch: any) => {
  requestAPI.getCollectionItems(collectionId).then((response) => {
    dispatch(setTargetCollectionItemsAction(response as ItemType[]));
  });
};

export const getTargetCollectionThunk = (collectionId: number) => (dispatch: any) => {
  requestAPI.getCollection(collectionId).then((response) => {
    dispatch(setTargetCollectionAction(response as CollectionType));
  });
};

export const getTargetItemThunk = (itemId: number, collectionId: number) => (dispatch: any) => {
  requestAPI.getItem(itemId, collectionId).then((response) => {
    dispatch(setTargetItemAction(response as ItemType));
  });
};

export const createNewCollectionThunk = (collectionInfo: CollectionInitType) => () => {
  requestAPI
    .createCollection(collectionInfo)
    .then((response) => console.log(response));
};

export const delItemThunk = (itemId: number) => () => {
  requestAPI.deleteItem(itemId).then((response) => console.log(response));
};

export const createNewItemThunk = (itemInfo: ItemInitType) => () => {
  requestAPI.createItem(itemInfo).then((response) => console.log(response));
};

export const deleteCollectionThunk = (collectionId: number) => () => {
  requestAPI
    .deleteCollection(collectionId)
    .then((response) => console.log(response));
};

export const deleteItemThunk = (itemId: number) => (dispatch: any) => {
  requestAPI
    .deleteItem(itemId)
    .then((response) => dispatch(deleteItemAction(response)));
};

export const setEditItemsThunk = (itemIds: number[]) => (dispatch: any) => {
  requestAPI.setEditItems(itemIds).then(() => {
    dispatch(updateEditListItemsAction(itemIds));
  });
};

export const setDeleteItemsThunk = (itemIds: number[]) => (dispatch: any) => {
  requestAPI
    .setDeleteItems(itemIds)
    .then(() => dispatch(updateDeleteListItemsAction(itemIds)));
};

export const getEditItemsThunk = (collectionId: number) => (dispatch: any) => {
  requestAPI.getEditItems(collectionId).then((response) => {
    dispatch(setEditListItemsAction(response as ItemType[]));
  });
};

export const getDeleteItemsThunk = (collectionId: number) => (dispatch: any) => {
  requestAPI.getDeleteItems(collectionId).then((response) => {
    dispatch(setDeleteListItemsAction(response as ItemType[]));
  });
};

export const pullOutItemThunk = (itemId: number) => (dispatch: any) => {
  requestAPI
    .pullOutItem(itemId)
    .then((response) => dispatch(pullOutItemAction(response.id)));
};

export const updateItemThunk = (item: any) => (dispatch: any) => {
  requestAPI
    .updateItem(item)
    .then((response) => dispatch(pullOutItemAction(response.id)));
};
