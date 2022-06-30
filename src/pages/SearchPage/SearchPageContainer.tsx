import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import { getTargetUserCollectionsThunk } from '../../redux/actions/admin-action';
import {
  setTargetCollectionAction,
  setTargetItemAction,
} from '../../redux/actions/collection-action';
import { getSearchListSelector } from '../../redux/selectors/search-selector';
import { CollectionType, ItemType } from '../../types';
import SearchPage from './SearchPage';

interface ISearchPageContainer {
  listSearch:
  | ItemType[]
  | {
    name: string;
    surname: string;
    collections: Array<CollectionType | null>;
  }[]
  | null;
  setTargetCollection: (collection: CollectionType) => void;
  getTargetUserCollections: (id: number, page?: number) => void;
  setTargetItem: (item: ItemType) => void;
}

const SearchPageContainer: FC<ISearchPageContainer> = (props) => (
  <SearchPage {...props} />
);

const mapStateToProps = (state: AppStateType) => ({
  listSearch: getSearchListSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setTargetCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
  getTargetUserCollections: (userId: number, page?: number) => {
    dispatch(getTargetUserCollectionsThunk(userId, page));
  },
  setTargetItem: (item: ItemType) => {
    dispatch(setTargetItemAction(item));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPageContainer);
