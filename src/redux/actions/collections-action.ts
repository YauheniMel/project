import { requestAPI } from '../../api/api';
import { CollectionType } from '../../types';

export enum CollectionsActionTypes {
  setMyCollections = 'SET-MY-COLLECTIONS',
  setAllCollections = 'SET-ALL-COLLECTIONS',
}

const setMyCollectionsAction = (collections: CollectionType[]) => ({
  type: CollectionsActionTypes.setMyCollections,
  collections,
});

const setAllCollectionsAction = (collections: CollectionType[]) => ({
  type: CollectionsActionTypes.setAllCollections,
  collections,
});

export const getMyCollectionsThunk = (userId: string) => (dispatch: any) => {
  requestAPI
    .getMyCollections(userId)
    .then((response) => dispatch(setMyCollectionsAction(response as CollectionType[])));
};
export const getAllCollectionsThunk = (userIds: string[]) => (dispatch: any) => {
  requestAPI.getAllCollections(userIds).then((response) => {
    dispatch(setAllCollectionsAction(response as CollectionType[]));
  });
};
