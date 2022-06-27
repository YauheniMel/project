import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  getTargetUserCollectionsThunk,
  getTargetUserThunk,
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
  getTargetUser: (id: number) => dispatch(getTargetUserThunk(id)),
  getTargetUserCollections: (userId: number, page?: number) => {
    dispatch(getTargetUserCollectionsThunk(userId, page));
  },
  setCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
