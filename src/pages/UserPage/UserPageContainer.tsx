import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { setTargetCollectionAction } from '../../redux/actions/collection-action';
import {
  createNewCollectionThunk,
  deleteCollectionThunk,
  getCollectionThemesThunk,
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
  getMyCollectionsSelector,
  getUserCollectionThemes,
  getUserId,
  getUserName,
  getUserRole,
  getUserStatus,
  getUserSurname,
  getUserTheme,
} from '../../redux/selectors/user-selector';
import { CollectionInitType, CollectionType } from '../../types';
import UserPage from './UserPage';

interface IUserPageContainer {
  id: number;
  name: string;
  surname: string;
  role: 'Admin' | 'User';
  theme: 'light' | 'dark';
  status: 'active' | 'blocked';
  collections: CollectionType[] | null;
  setTargetCollection: (collection: CollectionType) => void;
  getMyCollections: (userId: number, page?: number) => void;
  createNewCollection: (collectionInfo: CollectionInitType) => void;
  deleteCollection: (collectionId: number) => void;
  setEditCollection: (collectionId: number) => void;
  setDeleteCollection: (collectionId: number) => void;
  getEditCollections: (userId: string) => void;
  getDeleteCollections: (userId: string) => void;
  collectionsEdit: Array<CollectionType | null>;
  collectionsDel: Array<CollectionType | null>;
  updateCollection: (collection: any) => void;
  pullOutCollection: (collectionId: number) => void;
  getCollectionThemes: () => void;
  collectionThemes: { id: number; value: string }[] | null;
}

const UserPageContainer: FC<IUserPageContainer> = (props) => {
  useEffect(() => {
    const {
      id, getMyCollections, getEditCollections, getDeleteCollections,
    } = props;

    if (id) {
      getEditCollections(id.toString());

      getDeleteCollections(id.toString());

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
  role: getUserRole(state),
  collections: getMyCollectionsSelector(state),
  collectionsEdit: getEditCollections(state),
  collectionsDel: getDeleteCollections(state),
  collectionThemes: getUserCollectionThemes(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setTargetCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
  getMyCollections: (userId: number, page?: number) => {
    dispatch(getMyCollectionsThunk(userId, page));
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
  getCollectionThemes: () => {
    dispatch(getCollectionThemesThunk());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);
