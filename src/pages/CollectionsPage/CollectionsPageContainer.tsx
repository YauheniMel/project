import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import CollectionsPage from './CollectionsPage';
import { CollectionType } from '../../types';
import { setTargetCollectionAction } from '../../redux/actions/collection-action';
import {
  getAllCollectionsSelector,
  getMyCollectionsSelector,
} from '../../redux/selectors/collections-selector';

interface ICollectionsPageContainer {
  collections: CollectionType[] | null;
  myCollections: CollectionType[] | null;
  setCollection: (collectionId: CollectionType) => void;
}

const CollectionsPageContainer: FC<ICollectionsPageContainer> = (props) => (
  <CollectionsPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  collections: getAllCollectionsSelector(state),
  myCollections: getMyCollectionsSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionsPageContainer);
