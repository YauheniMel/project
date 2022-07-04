import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  blockUserThunk,
  deleteUserThunk,
  getAllUsersThunk,
  getTargetUserCollectionsThunk,
  getTargetUserThunk,
  unblockUserThunk,
} from '../../redux/actions/admin-action';
import { setTargetCollectionAction } from '../../redux/actions/collection-action';
import {
  getAdminTargetCollections,
  getAdminTargetUser,
  getAdminUsers,
} from '../../redux/selectors/admin-selector';
import { CollectionType, TargetUserType } from '../../types';
import AdminPage from './AdminPage';

interface IAdminPageContainer {
  targetCollections: CollectionType[] | null;
  targetUser: TargetUserType | null;
  users: TargetUserType[] | null;
  getTargetUser: (id: number) => void;
  getTargetUserCollections: (id: number) => void;
  setCollection: (collectionId: CollectionType) => void;
  getAllUsersThunk: () => void;
  blockUser: (userId: number) => void;
  unblockUser: (userId: number) => void;
  deleteUser: (userId: number) => void;
}

const AdminPageContainer: FC<IAdminPageContainer> = (props) => {
  useEffect(() => {
    const { getAllUsersThunk } = props;

    getAllUsersThunk();
  }, []);

  return <AdminPage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  targetCollections: getAdminTargetCollections(state),
  targetUser: getAdminTargetUser(state),
  users: getAdminUsers(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getTargetUser: (id: number) => dispatch(getTargetUserThunk(id)),
  getTargetUserCollections: (userId: number, page?: number) => {
    dispatch(getTargetUserCollectionsThunk(userId, page));
  },
  setCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
  getAllUsersThunk: () => {
    dispatch(getAllUsersThunk());
  },
  blockUser: (userId: number) => {
    dispatch(blockUserThunk(userId));
  },
  unblockUser: (userId: number) => {
    dispatch(unblockUserThunk(userId));
  },
  deleteUser: (userId: number) => {
    dispatch(deleteUserThunk(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
