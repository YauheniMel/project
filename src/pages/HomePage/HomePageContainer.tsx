import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  getBigCollectionsThunk,
  getLastAddItemsThunk,
} from '../../redux/actions/home-action';
import {
  getCollectionsSelector,
  getItemsSelector,
} from '../../redux/selectors/home-selector';
import { getUserId } from '../../redux/selectors/user-selector';
import { CollectionType, ItemType } from '../../types';
import HomePage from './HomePage';

interface IHomePageContainer {
  collections: CollectionType[] | null;
  list: ItemType[] | null;
  setTargetItem: (item: ItemType) => void;
  getBigCollections: () => void;
  getLastAddItems: () => void;
  toogleLike: (userId: number, itemId: number) => void;
  userId: number;
}

const HomePageContainer: FC<IHomePageContainer> = (props) => {
  useEffect(() => {
    const {
      collections, list, getBigCollections, getLastAddItems,
    } = props;

    if (!collections) getBigCollections();

    if (!list) getLastAddItems();
  }, []);
  return <HomePage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  userId: getUserId(state),
  collections: getCollectionsSelector(state),
  list: getItemsSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getBigCollections: () => dispatch(getBigCollectionsThunk()),
  getLastAddItems: () => dispatch(getLastAddItemsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
