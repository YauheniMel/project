import { requestAPI } from '../../api/api';
import { CollectionType, ItemInitType, ItemType } from '../../types';

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
  AddNewItem = 'ADD-NEW-ITEM',
  AddMatchTags = 'ADD-MATCH-TAGS',
  UpdateListItems = 'UPDATE-LIST-ITEMS',
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

export const addNewItemAction = (item: ItemType) => ({
  type: CollectionActionTypes.AddNewItem,
  item,
});

export const addMatchTagsAction = (tags: any) => ({
  type: CollectionActionTypes.AddMatchTags,
  tags,
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

export const delItemThunk = (itemId: number) => () => {
  requestAPI.deleteItem(itemId).then((response) => console.log(response));
};

export const createNewItemThunk = (itemInfo: ItemInitType) => (dispatch: any) => {
  requestAPI.createItem(itemInfo).then((response) => {
    dispatch(addNewItemAction(response));
  });
};

export const deleteCollectionThunk = (collectionId: number) => () => {
  requestAPI
    .deleteCollection(collectionId)
    .then((response) => console.log(response));
};

export const deleteItemThunk = (itemId: number) => (dispatch: any) => {
  requestAPI.deleteItem(itemId).then((response) => {
    if (response.code === 1) {
      dispatch(deleteItemAction(itemId));
      dispatch(pullOutItemAction(itemId));
    }
  });
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
  requestAPI.pullOutItem(itemId).then((response) => {
    if (response.code === 1) {
      dispatch(pullOutItemAction(itemId));
    }
  });
};

export const updateItemThunk = (item: any) => () => {
  requestAPI.updateItem(item).then((response) => console.log(response));
};

export const searchMatchTagsThunk = (tag: string) => (dispatch: any) => {
  requestAPI
    .searchMatchTag(tag)
    .then((response) => dispatch(addMatchTagsAction(response)));
};

// table filters
const updateListItemsAction = (items: ItemType[]) => ({
  type: CollectionActionTypes.UpdateListItems,
  items,
});

export const filterContainsThunk = (id: number, column: string, str: string) => (dispatch: any) => {
  requestAPI.filterContains(id, column, str).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};

export const filterStartsWithThunk = (id: number, col: string, str: string) => (dispatch: any) => {
  requestAPI.filterStartsWithThunk(id, col, str).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};

export const filterEqualsThunk = (id: number, column: string, str: string) => (dispatch: any) => {
  requestAPI.filterEqualsThunk(id, column, str).then((response) => {
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(updateListItemsAction(response));
  });
};

export const filterIsEmptyThunk = (collectionId: number, column: string) => (dispatch: any) => {
  requestAPI.filterIsEmpty(collectionId, column).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};

export const filterIsNotEmptyThunk = (collectionId: number, column: string) => (dispatch: any) => {
  requestAPI.filterIsNotEmpty(collectionId, column).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};

export const filterExistTagThunk = (collectionId: number, str: string) => (dispatch: any) => {
  requestAPI.filterExistTag(collectionId, str).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};

export const filterMoreThanThunk = (id: number, column: string, str: string) => (dispatch: any) => {
  requestAPI.filterMoreThan(id, column, str).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};
export const filterLessThanThunk = (id: number, column: string, str: string) => (dispatch: any) => {
  requestAPI.filterLessThan(id, column, str).then((response) => {
    dispatch(updateListItemsAction(response));
  });
};
