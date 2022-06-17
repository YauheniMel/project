import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { getCollections, getItems } from '../../redux/selectors/home-selector';

import { CollectionInitType, ItemType } from '../../types';
import HomePage from './HomePage';

interface IHomePageContainer {
  collections: CollectionInitType[];
  list: ItemType[];
  setTargetItem: (id: string) => void;
}

const HomePageContainer: FC<IHomePageContainer> = (props) => (
  <HomePage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  collections: getCollections(state),
  list: getItems(state),
});

export default connect(mapStateToProps)(HomePageContainer);
