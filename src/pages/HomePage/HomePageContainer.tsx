import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { CollectionType, ItemType } from '../../types';
import HomePage from './HomePage';

interface IHomePageContainer {
  id: string;
  name: string;
  surname: string;
  email: string;
  status: 'active' | 'blocked';
  isOnline: boolean;
  meta: { loginDate: string; registerDate: string };
  collections: CollectionType[];
  list: ItemType[];
}

const HomePageContainer: FC<IHomePageContainer> = (props) => (
  <HomePage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: state.user.id,
  name: state.user.name,
  surname: state.user.surname,
  email: state.user.email,
  status: state.user.status,
  isOnline: state.user.isOnline,
  meta: state.user.meta,
  collections: state.user.collections,
  list: state.user.list,
});

export default connect(mapStateToProps)(HomePageContainer);
