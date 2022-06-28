import { requestAPI } from '../../api/api';

export enum AdminActionTypes {
  setTargetUser = 'SET-TARGET-USER',
  setTargetCollections = 'SET-TARGET-COLLECTIONS',
}

export const setTargetUser = (user: any) => ({
  type: AdminActionTypes.setTargetUser,
  user,
});

export const setTargetUserCollectons = (collections: any) => ({
  type: AdminActionTypes.setTargetCollections,
  collections,
});

export const getTargetUserCollectionsThunk = (userId: number, page = 1) => (dispatch: any) => {
  requestAPI
    .getUserCollections(userId, page)
    .then((response) => dispatch(setTargetUserCollectons(response)));
};

export const getTargetUserThunk = (userId: number) => (dispatch: any) => {
  requestAPI
    .getTargetUser(userId)
    .then((response) => dispatch(setTargetUser(response)));
};
