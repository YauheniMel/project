import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { ItemType } from '../../types';
import ItemPage from '../ItemPage/ItemPage';
// import CollectionPage from './CollectionPage';

interface IHomePageContainer {
  id: string;
  title: string;
  icon: string;
  description: string;
  theme: string;
  meta: { createAt: string; updateAt: string };
  list: ItemType[];
  targetItem: ItemType | null;
}

const CollectionPageContainer: FC<IHomePageContainer> = (props) => (
  // <CollectionPage {...props} />
  <ItemPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  id: state.collection.id,
  title: state.collection.title,
  icon: state.collection.icon,
  description: state.collection.description,
  theme: state.collection.theme,
  meta: state.collection.meta,
  list: state.collection.list,
  targetItem: state.collection.targetItem,
});

export default connect(mapStateToProps)(CollectionPageContainer);
