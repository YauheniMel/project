import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  setAdminTargetCollectons,
  setAdminTargetUser,
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
  setTargetUser: (id: number) => void;
  setTargetCollections: (id: number) => void;
  getCollection: (collection: CollectionType) => void;
}

const AdminPageContainer: FC<IAdminPageContainer> = (props) => (
  <AdminPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  targetCollections: getAdminTargetCollections(state),
  targetUser: getAdminTargetUser(state),
  users: getAdminUsers(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setTargetUser: (id: number) => dispatch(setAdminTargetUser(id)),
  setTargetCollections: (id: number) => dispatch(setAdminTargetCollectons(id)),
  getCollection: (collection: CollectionType) => dispatch(setTargetCollectionAction(collection)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
