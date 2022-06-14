import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { ItemType } from '../../types';
import CollectionPage from './CollectionPage';

interface IHomePageContainer {
  id: string;
  title: string;
  icon: string;
  description: string;
  theme: string;
  meta: { createAt: string; updateAt: string };
  list: ItemType[];
}

const CollectionPageContainer: FC<IHomePageContainer> = (props) => (
  <CollectionPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: state.collection.id,
  title: state.collection.title,
  icon: state.collection.icon,
  description: state.collection.description,
  theme: state.collection.theme,
  meta: state.collection.meta,
  list: state.collection.list,
});

export default connect(mapStateToProps)(CollectionPageContainer);
