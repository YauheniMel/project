import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppStateType } from '../../redux';
import {
  blockUserThunk,
  deleteUserThunk,
  getAllUsersThunk,
  getTargetUserCollectionsThunk,
  getTargetUserThunk,
  removeFromAdminsThunk,
  setIsAdminThunk,
  unblockUserThunk,
} from '../../redux/actions/admin-action';
import { setTargetCollectionAction } from '../../redux/actions/collection-action';
import {
  getAdminTargetCollections,
  getAdminTargetUser,
  getAdminUsers,
} from '../../redux/selectors/admin-selector';
import { getUserRole } from '../../redux/selectors/user-selector';
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
  role: 'Admin' | 'User';
  blockUser: (userId: number) => void;
  unblockUser: (userId: number) => void;
  deleteUser: (userId: number) => void;
  setIsAdmin: (userId: number) => void;
  setIsNotAdmin: (userId: number) => void;
}

const AdminPageContainer: FC<IAdminPageContainer> = (props) => {
  useEffect(() => {
    const { getAllUsersThunk } = props;

    getAllUsersThunk();
  }, []);

  const navigate = useNavigate();

  if (props.role && props.role !== 'Admin') {
    navigate(-1);

    return null;
  }

  return <AdminPage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  role: getUserRole(state),
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
  setIsAdmin: (userId: number) => {
    dispatch(setIsAdminThunk(userId));
  },
  setIsNotAdmin: (userId: number) => {
    dispatch(removeFromAdminsThunk(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
