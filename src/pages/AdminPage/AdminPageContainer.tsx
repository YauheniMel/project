import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux';
import {
  setAdminTargetCollectons,
  setAdminTargetUser,
} from '../../redux/actions/admin-action';
import { getCollectionAction } from '../../redux/actions/collection-action';
import {
  getAdminId,
  getAdminIsAdmin,
  getAdminMeta,
  getAdminName,
  getAdminStatus,
  getAdminSurname,
  getAdminTargetCollections,
  getAdminTargetUser,
  getAdminTheme,
  getAdminUsers,
} from '../../redux/selectors/admin-selector';
import { CollectionInitType, UserType } from '../../types';
import AdminPage from './AdminPage';

interface IAdminPageContainer {
  id: string;
  name: string;
  surname: string;
  isAdmin: boolean;
  theme: 'light' | 'dark';
  status: 'active' | 'blocked';
  meta: { loginDate: string; registerDate: string };
  targetCollections: CollectionInitType[] | null;
  targetUser: UserType | null;
  setTargetUser: (id: string) => void;
  setTargetCollections: (id: string) => void;
  users: UserType[] | null;
  getCollection: (id: string, userId: string) => void;
}

const AdminPageContainer: FC<IAdminPageContainer> = (props) => (
  <AdminPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: getAdminId(state),
  name: getAdminName(state),
  surname: getAdminSurname(state),
  status: getAdminStatus(state),
  theme: getAdminTheme(state),
  isAdmin: getAdminIsAdmin(state),
  meta: getAdminMeta(state),
  targetCollections: getAdminTargetCollections(state),
  targetUser: getAdminTargetUser(state),
  users: getAdminUsers(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  setTargetUser: (id: string) => dispatch(setAdminTargetUser(id)),
  setTargetCollections: (id: string) => dispatch(setAdminTargetCollectons(id)),
  getCollection: (id: string, userId: string) => dispatch(getCollectionAction({ id, userId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
