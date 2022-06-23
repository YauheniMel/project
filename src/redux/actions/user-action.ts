import { requestAPI } from '../../api/api';
import { CollectionType, UserPersonalInfoType } from '../../types';
import { CredentialsType } from './auth-action';

export enum UserActionTypes {
  setUserPersonalInfo = 'SET-USER-PERSONAL-INFO',
  setMyCollections = 'SET-MY-COLLECTIONS',
}

const setUserPersonalInfoAction = (payload: UserPersonalInfoType) => ({
  type: UserActionTypes.setUserPersonalInfo,
  payload,
});

const setMyCollectionsAction = (collections: CollectionType[]) => ({
  type: UserActionTypes.setMyCollections,
  collections,
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
