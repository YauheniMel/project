import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../redux';
import CollectionsPage from './CollectionsPage';
import { AllCollectionsType, CollectionInitType } from '../../types';
import {
  getAllCollections,
  getMyCollections,
} from '../../redux/selectors/collection-selector';
import { getCollectionAction } from '../../redux/actions/collection-action';

interface ICollectionsPageContainer {
  collections: AllCollectionsType[];
  myCollections: Array<CollectionInitType | null>;
  getCollection: (id: string, userId: string) => void;
}

const CollectionsPageContainer: FC<ICollectionsPageContainer> = (props) => (
  <CollectionsPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  collections: getAllCollections(state),
  myCollections: getMyCollections(state),
});

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
  getCollection: (id: string, userId: string) => dispatch(getCollectionAction({ id, userId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionsPageContainer);
