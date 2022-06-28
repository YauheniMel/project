import { requestAPI } from '../../api/api';

export enum CollectionsActionTypes {
  setAllCollections = 'SET-ALL-COLLECTIONS',
  setAllUserCollections = 'SET-ALL-USER-COLLECTIONS',
}

const setAllCollectionsAction = (users: any) => ({
  type: CollectionsActionTypes.setAllCollections,
  users,
});

const setAllUserCollectionsAction = (user: any) => ({
  type: CollectionsActionTypes.setAllUserCollections,
  user,
});

export const getAllCollectionsThunk = (userId: number) => (dispatch: any) => {
  requestAPI.getAllCollections(userId).then((response) => {
    dispatch(setAllCollectionsAction(response));
  });
};

export const getUserCollectionsThunk = (userId: number, page = 1) => (dispatch: any) => {
  requestAPI.getUserCollections(userId, page).then((response) => {
    dispatch(
      setAllUserCollectionsAction({ id: userId, collections: response }),
    );
  });
};
