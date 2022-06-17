import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import CollectionsPage from './CollectionsPage';
import { getUserCollections } from '../../redux/selectors/user-selector';
import { CollectionInitType } from '../../types';

interface ICollectionsPageContainer {
  collections: CollectionInitType[];
}

const CollectionsPageContainer: FC<ICollectionsPageContainer> = (props) => (
  <CollectionsPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  collections: getUserCollections(state),
});

export default connect(mapStateToProps)(CollectionsPageContainer);
