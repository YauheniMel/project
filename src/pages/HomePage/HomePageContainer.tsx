import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  getUserCollections,
  getUserEmail,
  getUserId,
  getUserList,
  getUserMeta,
  getUserName,
  getUserStatus,
  getUserSurname,
} from '../../redux/selectors/user-selector';
import { CollectionType, ItemType } from '../../types';
import HomePage from './HomePage';

interface IHomePageContainer {
  id: string;
  name: string;
  surname: string;
  email: string;
  status: 'active' | 'blocked';
  meta: { loginDate: string; registerDate: string };
  collections: CollectionType[];
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const HomePageContainer: FC<IHomePageContainer> = (props) => (
  <HomePage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  email: getUserEmail(state),
  status: getUserStatus(state),
  meta: getUserMeta(state),
  collections: getUserCollections(state),
  list: getUserList(state),
});

export default connect(mapStateToProps)(HomePageContainer);
