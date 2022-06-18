import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux';
import {
  getMyCollectionAction,
  setTargetCollectionAction,
} from '../../redux/actions/collection-action';
import { getMyCollections } from '../../redux/selectors/collection-selector';
import {
  getUserEmail,
  getUserId,
  getUserIsAdmin,
  getUserMeta,
  getUserName,
  getUserStatus,
  getUserSurname,
  getUserTheme,
} from '../../redux/selectors/user-selector';
import { CollectionInitType } from '../../types';

import UserPage from './UserPage';

interface IUserPageContainer {
  id: string;
  name: string;
  surname: string;
  isAdmin: boolean;
  theme: 'light' | 'dark';
  email: string;
  status: 'active' | 'blocked';
  meta: { loginDate: string; registerDate: string };
  collections: CollectionInitType[] | null;
  setTargetCollection: (id: string) => void;
  getMyCollection: (id: string) => void;
}

const UserPageContainer: FC<IUserPageContainer> = (props) => (
  <UserPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  email: getUserEmail(state),
  status: getUserStatus(state),
  meta: getUserMeta(state),
  theme: getUserTheme(state),
  isAdmin: getUserIsAdmin(state),
  collections: getMyCollections(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  setTargetCollection: (id: string) => dispatch(setTargetCollectionAction(id)),
  getMyCollection: (id: string) => dispatch(getMyCollectionAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);
