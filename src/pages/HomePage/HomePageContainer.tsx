import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import {
  getAllTagsThunk,
  getBigCollectionsThunk,
  getLastAddItemsThunk,
  searchItemsByTagThunk,
} from '../../redux/actions/home-action';
import {
  getCollectionsSelector,
  getItemsSelector,
  getTagsSelector,
} from '../../redux/selectors/home-selector';
import {
  getLikesSelector,
  getUserId,
} from '../../redux/selectors/user-selector';
import { CollectionType, ItemType } from '../../types';
import HomePage from './HomePage';

interface IHomePageContainer {
  collections: CollectionType[] | null;
  list: ItemType[] | null;
  getBigCollections: () => void;
  getLastAddItems: () => void;
  toogleLike: (userId: number, itemId: number) => void;
  userId: number;
  likes: { itemId: number }[] | null;
  tags: any[];
  getAllTags: () => void;
  searchItemsByTag: (tag: string) => void;
}

const HomePageContainer: FC<IHomePageContainer> = (props) => {
  useEffect(() => {
    const {
      collections,
      tags,
      list,
      getBigCollections,
      getLastAddItems,
      getAllTags,
    } = props;

    if (!collections) getBigCollections();

    if (!tags) getAllTags();

    if (!list) getLastAddItems();
  }, []);
  return <HomePage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  userId: getUserId(state),
  collections: getCollectionsSelector(state),
  list: getItemsSelector(state),
  likes: getLikesSelector(state),
  tags: getTagsSelector(state) as any[],
});

const mapDispatchToProps = (dispatch: any) => ({
  getBigCollections: () => dispatch(getBigCollectionsThunk()),
  getLastAddItems: () => dispatch(getLastAddItemsThunk()),
  getAllTags: () => dispatch(getAllTagsThunk()),
  searchItemsByTag: (tag: string) => dispatch(searchItemsByTagThunk(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
