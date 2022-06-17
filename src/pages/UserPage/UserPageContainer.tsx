import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  getUserCollections,
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
  collections: CollectionInitType[];
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
  collections: getUserCollections(state),
});

export default connect(mapStateToProps)(UserPageContainer);
