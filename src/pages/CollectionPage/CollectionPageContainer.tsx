import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import RoutesApp from '../../constants/routes';
import { AppStateType } from '../../redux';
import {
  createNewItemThunk,
  deleteItemThunk,
  getCollectionItemsThunk,
  getDeleteItemsThunk,
  getEditItemsThunk,
  getTargetCollectionThunk,
  getTargetItemThunk,
  setDeleteItemsThunk,
  setEditItemsThunk,
  setTargetItemAction,
} from '../../redux/actions/collection-action';
import {
  getCollectionCreatedAtSelector,
  getCollectionCustomFieldsSelector,
  getCollectionDescriptionSelector,
  getCollectionIconSelector,
  getCollectionIdSelector,
  getCollectionListSelector,
  getCollectionTargetItemSelector,
  getCollectionThemeSelector,
  getCollectionUpdatedAtSelector,
  getDeleteItemList,
  getEditItemList,
} from '../../redux/selectors/collection-selector';
import { ItemInitType, ItemType } from '../../types';
import ItemPage from '../ItemPage/ItemPage';
import CollectionPage from './CollectionPage';

interface IHomePageContainer {
  id: string;
  icon: any;
  description: string;
  theme: string;
  customFields: any;
  createdAt: string;
  updatedAt: string;
  targetItem: ItemType | null;
  list: ItemType[] | null;
  createNewItem: (itemInfo: ItemInitType) => void;
  deleteItem: (itemId: string) => void;
  getCollectionItems: (collectionId: string) => void;
  setTargetItem: (item: ItemType) => void;
  getTargetCollection: (collectionId: string) => void;
  getTargetItem: (itemId: string, collectionId: string) => void;
  listEditItems: Array<ItemType | null>;
  listDeleteItems: Array<ItemType | null>;
  setEditItems: (itemIds: string[]) => void;
  setDeleteItems: (itemIds: string[]) => void;
  getEditItems: (collectionId: string) => void;
  getDeleteItems: (collectionId: string) => void;
}

const CollectionPageContainer: FC<IHomePageContainer> = (props) => {
  const { collectionId } = useParams();

  useEffect(() => {
    const {
      id,
      getCollectionItems,
      getTargetCollection,
      getEditItems,
      getDeleteItems,
    } = props;

    if (collectionId) {
      if (!id) {
        getTargetCollection(collectionId);
        getEditItems(collectionId);
        getDeleteItems(collectionId);
      }

      getCollectionItems(collectionId);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CollectionPage {...props} />} />
      <Route
        path={RoutesApp.Item}
        element={(
          <ItemPage
            getTargetItem={props.getTargetItem}
            targetItem={props.targetItem as ItemType}
            deleteItem={props.deleteItem}
          />
        )}
      />
    </Routes>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  id: getCollectionIdSelector(state),
  icon: getCollectionIconSelector(state),
  description: getCollectionDescriptionSelector(state),
  theme: getCollectionThemeSelector(state),
  customFields: getCollectionCustomFieldsSelector(state),
  createdAt: getCollectionCreatedAtSelector(state),
  updatedAt: getCollectionUpdatedAtSelector(state),
  list: getCollectionListSelector(state),
  targetItem: getCollectionTargetItemSelector(state),
  listEditItems: getEditItemList(state),
  listDeleteItems: getDeleteItemList(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  createNewItem: (itemInfo: ItemInitType) => dispatch(createNewItemThunk(itemInfo)),
  getTargetCollection: (collectionId: string) => dispatch(getTargetCollectionThunk(collectionId)),
  getTargetItem: (itemId: string, collectionId: string) => {
    dispatch(getTargetItemThunk(itemId, collectionId));
  },
  getCollectionItems: (collectionId: string) => {
    dispatch(getCollectionItemsThunk(collectionId));
  },
  deleteItem: (itemId: string) => {
    dispatch(deleteItemThunk(itemId));
  },
  setTargetItem: (item: ItemType) => {
    dispatch(setTargetItemAction(item));
  },
  setEditItems: (itemIds: string[]) => {
    dispatch(setEditItemsThunk(itemIds));
  },
  setDeleteItems: (itemIds: string[]) => {
    dispatch(setDeleteItemsThunk(itemIds));
  },
  getEditItems: (collectionId: string) => {
    dispatch(getEditItemsThunk(collectionId));
  },
  getDeleteItems: (collectionId: string) => {
    dispatch(getDeleteItemsThunk(collectionId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionPageContainer);
