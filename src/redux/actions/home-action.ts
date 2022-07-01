import { requestAPI } from '../../api/api';
import { CollectionType, ItemType } from '../../types';
import { setSearchItemsAction, setSearchListAction } from './search-action';

export enum HomeActionTypes {
  setBigCollections = 'SET-BIG-COLLECTIONS',
  setLastItems = 'SET-LAST-ITEMS',
  getLastAddItems = 'GET-LAST-ADD-ITEMS',
  setAllTags = 'SET-ALL-TAGS',
}

export const setBigCollectionsAction = (collections: CollectionType[]) => ({
  type: HomeActionTypes.setBigCollections,
  collections,
});

export const setLastItemsAction = () => ({
  type: HomeActionTypes.setLastItems,
});

export const setAllTagsAction = (tags: { conten: string }[]) => ({
  type: HomeActionTypes.setAllTags,
  tags,
});

const getLastAddItemsAction = (items: ItemType[]) => ({
  type: HomeActionTypes.getLastAddItems,
  items,
});

export const getBigCollectionsThunk = () => (dispatch: any) => {
  requestAPI.getBigCollections().then((response) => {
    dispatch(setBigCollectionsAction(response as CollectionType[]));
  });
};

export const getLastAddItemsThunk = () => (dispatch: any) => {
  requestAPI.getLastAddItems().then((response) => {
    dispatch(getLastAddItemsAction(response as ItemType[]));
  });
};

export const getAllTagsThunk = () => (dispatch: any) => {
  requestAPI.getAllTags().then((response) => {
    dispatch(setAllTagsAction(response));
  });
};

export const searchItemsByTagThunk = (tag: string) => (dispatch: any) => {
  requestAPI.searchItemsByTag(tag).then((response) => {
    dispatch(setSearchItemsAction(response.items));
    dispatch(setSearchListAction());
  });
};
