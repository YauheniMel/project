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
  pullOutCollectionAction = 'PULL-OUT-COLLECTION',
  setLike = 'SET-LIKE',
  setDislike = 'SET-DISLIKE',
  increaseLikes = 'INCREASE-LIKES',
  decreaseLikes = 'DECREASE-LIKES',
}

const setUserPersonalInfoAction = (payload: UserPersonalInfoType) => ({
  type: UserActionTypes.setUserPersonalInfo,
  payload,
});

const decreaseLikesAction = (itemId: number) => ({
  type: UserActionTypes.decreaseLikes,
  itemId,
});

const increaseLikesAction = (itemId: number) => ({
  type: UserActionTypes.increaseLikes,
  itemId,
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

const updateEditCollectionsAction = (collectionId: CollectionType) => ({
  type: UserActionTypes.updateEditCollections,
  collectionId,
});

const pullOutCollectionAction = (collectionId: CollectionType) => ({
  type: UserActionTypes.pullOutCollectionAction,
  collectionId,
});

const setLikeAction = (itemId: number) => ({
  type: UserActionTypes.setLike,
  itemId,
});

const setDislikeAction = (itemId: number) => ({
  type: UserActionTypes.setDislike,
  itemId,
});

const updateDeleteCollections = (collectionId: CollectionType) => ({
  type: UserActionTypes.updateDeleteCollections,
  collectionId,
});

export const getUserPersonalInfoThunk = (payload: CredentialsType) => (dispatch: any) => {
  requestAPI.getUserInfo(payload).then((response) => {
    dispatch(setUserPersonalInfoAction(response.user));
  });
};

export const getMyCollectionsThunk = (userId: number, page = 1) => (dispatch: any) => {
  requestAPI.getMyCollections(userId, page).then((response) => {
    dispatch(setMyCollectionsAction(response as CollectionType[]));
  });
};

export const setEditCollectionThunk = (collectionId: number) => (dispatch: any) => {
  requestAPI.setEditCollection(collectionId).then((response) => {
    dispatch(updateEditCollectionsAction(response.id));
  });
};

export const getEditCollectionsThunk = (userId: string) => (dispatch: any) => {
  requestAPI
    .getEditCollections(userId)
    .then((response) => dispatch(setEditCollectionsAction(response as CollectionType[])));
};

export const setDeleteCollectionThunk = (collectionId: number) => (dispatch: any) => {
  requestAPI
    .setDeleteCollection(collectionId)
    .then((response) => dispatch(updateDeleteCollections(response.id)));
};

export const getDeleteCollectionsThunk = (userId: string) => (dispatch: any) => {
  requestAPI
    .getDeleteCollections(userId)
    .then((response) => dispatch(setDeleteCollectionsAction(response as CollectionType[])));
};

export const updateCollectionThunk = (collection: any) => () => {
  requestAPI
    .updateCollection(collection)
    .then((response) => console.log(response));
};

export const pullOutCollectionThunk = (collectionId: any) => (dispatch: any) => {
  requestAPI
    .pullOutCollection(collectionId)
    .then((response) => dispatch(pullOutCollectionAction(response.id)));
};

export const toogleLikeThunk = (userId: number, itemId: number) => (dispatch: any) => {
  requestAPI.toogleLike(userId, itemId).then((response) => {
    if (response.code === 0) return;
    if (response.message === 'like') {
      dispatch(setLikeAction(itemId));
      dispatch(increaseLikesAction(itemId));
    } else if (response.message === 'dislike') {
      dispatch(setDislikeAction(itemId));
      dispatch(decreaseLikesAction(itemId));
    }
  });
};
