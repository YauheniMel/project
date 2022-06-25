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
  setDeleteCollectionThunk,
  setEditCollectionThunk,
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
  id: string;
  name: string;
  surname: string;
  isAdmin: boolean;
  theme: 'light' | 'dark';
  status: 'active' | 'blocked';
  collections: CollectionType[] | null;
  setTargetCollection: (collection: CollectionType) => void;
  getMyCollections: (userId: string) => void;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  deleteCollection: (collectionId: string) => void;
  setEditCollection: (collectionId: string) => void;
  setDeleteCollection: (collectionId: string) => void;
  getEditCollections: (userId: string) => void;
  getDeleteCollections: (userId: string) => void;
  editCollections: Array<CollectionType | null>;
  deleteCollections: Array<CollectionType | null>;
}

const UserPageContainer: FC<IUserPageContainer> = (props) => {
  useEffect(() => {
    const {
      id, getMyCollections, getEditCollections, getDeleteCollections,
    } = props;

    if (id) {
      getEditCollections(id);

      getDeleteCollections(id);

      getMyCollections(id);
    }
  }, [props.id]);

  return <UserPage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
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
  deleteCollection: (collectionId: string) => {
    dispatch(deleteCollectionThunk(collectionId));
  },
  setEditCollection: (collectionId: string) => {
    dispatch(setEditCollectionThunk(collectionId));
  },
  setDeleteCollection: (collectionId: string) => {
    dispatch(setDeleteCollectionThunk(collectionId));
  },
  getEditCollections: (userId: string) => {
    dispatch(getEditCollectionsThunk(userId));
  },
  getDeleteCollections: (userId: string) => {
    dispatch(getDeleteCollectionsThunk(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);
