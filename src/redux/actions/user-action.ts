import { requestAPI } from '../../api/api';
import { CollectionType, UserPersonalInfoType } from '../../types';
import { CredentialsType } from './auth-action';

export enum UserActionTypes {
  setUserPersonalInfo = 'SET-USER-PERSONAL-INFO',
  setMyCollections = 'SET-MY-COLLECTIONS',
  setEditCollections = 'SET-EDIT-COLLECTIONS',
  updateEditCollections = 'UPDATE-EDIT-COLLECTIONS',
  setDeleteCollections = 'SET-DELETE-COLLECTIONS',
  updateDeleteCollections = 'UPDATE-DELETE-COLLECTIONS',
}

const setUserPersonalInfoAction = (payload: UserPersonalInfoType) => ({
  type: UserActionTypes.setUserPersonalInfo,
  payload,
});

const setMyCollectionsAction = (collections: CollectionType[]) => ({
  type: UserActionTypes.setMyCollections,
  collections,
});

const setEditCollectionsAction = (collections: CollectionType[]) => ({
  type: UserActionTypes.setEditCollections,
  collections,
});

const setDeleteCollectionsAction = (collections: CollectionType[]) => ({
  type: UserActionTypes.setDeleteCollections,
  collections,
});

const updateEditCollections = (collectionId: CollectionType) => ({
  type: UserActionTypes.updateEditCollections,
  collectionId,
});

const updateDeleteCollections = (collectionId: CollectionType) => ({
  type: UserActionTypes.updateDeleteCollections,
  collectionId,
});

export const getUserPersonalInfoThunk = (payload: CredentialsType) => (dispatch: any) => {
  requestAPI.getUserInfo(payload).then((response) => {
    dispatch(setUserPersonalInfoAction(response));
  });
};

export const getMyCollectionsThunk = (userId: string) => (dispatch: any) => {
  requestAPI
    .getMyCollections(userId)
    .then((response) => dispatch(setMyCollectionsAction(response as CollectionType[])));
};

export const setEditCollectionThunk = (collectionId: string) => (dispatch: any) => {
  requestAPI.setEditCollection(collectionId).then((response) => {
    dispatch(updateEditCollections(response.id));
  });
};

export const getEditCollectionsThunk = (userId: string) => (dispatch: any) => {
  requestAPI
    .getEditCollections(userId)
    .then((response) => dispatch(setEditCollectionsAction(response as CollectionType[])));
};

export const setDeleteCollectionThunk = (collectionId: string) => (dispatch: any) => {
  requestAPI
    .setDeleteCollection(collectionId)
    .then((response) => dispatch(updateDeleteCollections(response.id)));
};

export const getDeleteCollectionsThunk = (userId: string) => (dispatch: any) => {
  requestAPI
    .getDeleteCollections(userId)
    .then((response) => dispatch(setDeleteCollectionsAction(response as CollectionType[])));
};
