import { requestAPI } from '../../api/api';
import { CollectionType, ItemType } from '../../types';

export enum HomeActionTypes {
  setBigCollections = 'SET-BIG-COLLECTIONS',
  setLastItems = 'SET-LAST-ITEMS',
  getLastAddItems = 'GET-LAST-ADD-ITEMS',
}

export const setBigCollectionsAction = (collections: CollectionType[]) => ({
  type: HomeActionTypes.setBigCollections,
  collections,
});

export const setLastItemsAction = () => ({
  type: HomeActionTypes.setLastItems,
});

const getLastAddItemsAction = (items: ItemType[]) => ({
  type: HomeActionTypes.getLastAddItems,
  items,
});

export const getBigCollectionsThunk = () => (dispatch: any) => {
  requestAPI
    .getBigCollections()
    .then((response) => dispatch(setBigCollectionsAction(response as CollectionType[])));
};

export const getLastAddItemsThunk = () => (dispatch: any) => {
  requestAPI
    .getLastAddItems()
    .then((response) => dispatch(getLastAddItemsAction(response as ItemType[])));
};
// export const getLastItemsThunk = () => {}
