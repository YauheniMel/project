import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  createNewCollectionThunk,
  deleteCollectionThunk,
  setTargetCollectionAction,
} from '../../redux/actions/collection-action';
import {
  getDeleteCollectionsThunk,
  getEditCollectionsThunk,
  getMyCollectionsThunk,
  pullOutCollectionThunk,
  setDeleteCollectionThunk,
  setEditCollectionThunk,
  updateCollectionThunk,
} from '../../redux/actions/user-action';
import {
  getDeleteCollections,
  getEditCollections,
  getMyCollections,
  getUserId,
  getUserIsAdmin,
  getUserName,
  getUserStatus,
  getUserSurname,
  getUserTheme,
} from '../../redux/selectors/user-selector';
import { CollectionInitType, CollectionType } from '../../types';
import UserPage from './UserPage';

interface IUserPageContainer {
  userId: string;
  name: string;
  surname: string;
  isAdmin: boolean;
  theme: 'light' | 'dark';
  status: 'active' | 'blocked';
  collections: CollectionType[] | null;
  setTargetCollection: (collection: CollectionType) => void;
  getMyCollections: (userId: string) => void;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  deleteCollection: (collectionId: number) => void;
  setEditCollection: (collectionId: number) => void;
  setDeleteCollection: (collectionId: number) => void;
  getEditCollections: (userId: string) => void;
  getDeleteCollections: (userId: string) => void;
  editCollections: Array<CollectionType | null>;
  deleteCollections: Array<CollectionType | null>;
  updateCollection: (collection: any) => void;
  pullOutCollection: (collectionId: number) => void;
}

const UserPageContainer: FC<IUserPageContainer> = (props) => {
  useEffect(() => {
    const {
      userId,
      getMyCollections,
      getEditCollections,
      getDeleteCollections,
    } = props;

    if (userId) {
      getEditCollections(userId);

      getDeleteCollections(userId);

      getMyCollections(userId);
    }
  }, [props.userId]);

  return <UserPage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  userId: getUserId(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  status: getUserStatus(state),
  theme: getUserTheme(state),
  isAdmin: getUserIsAdmin(state),
  collections: getMyCollections(state),
  editCollections: getEditCollections(state),
  deleteCollections: getDeleteCollections(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setTargetCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
  getMyCollections: (userId: string) => {
    dispatch(getMyCollectionsThunk(userId));
  },
  createNewCollection: (collectionInfo: CollectionInitType) => {
    dispatch(createNewCollectionThunk(collectionInfo));
  },
  deleteCollection: (collectionId: number) => {
    dispatch(deleteCollectionThunk(collectionId));
  },
  setEditCollection: (collectionId: number) => {
    dispatch(setEditCollectionThunk(collectionId));
  },
  setDeleteCollection: (collectionId: number) => {
    dispatch(setDeleteCollectionThunk(collectionId));
  },
  getEditCollections: (userId: string) => {
    dispatch(getEditCollectionsThunk(userId));
  },
  getDeleteCollections: (userId: string) => {
    dispatch(getDeleteCollectionsThunk(userId));
  },
  updateCollection: (collection: any) => {
    dispatch(updateCollectionThunk(collection));
  },
  pullOutCollection: (collectionId: number) => {
    dispatch(pullOutCollectionThunk(collectionId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);
