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
  pullOutItemThunk,
  setDeleteItemsThunk,
  setEditItemsThunk,
  setTargetItemAction,
  updateItemThunk,
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
import { getUserId } from '../../redux/selectors/user-selector';
import { ItemInitType, ItemType } from '../../types';
import ItemPage from '../ItemPage/ItemPage';
import CollectionPage from './CollectionPage';

interface IHomePageContainer {
  userId: number;
  id: number;
  icon: any;
  description: string;
  theme: string;
  customFields: any;
  createdAt: string;
  updatedAt: string;
  targetItem: ItemType | null;
  list: ItemType[] | null;
  createNewItem: (itemInfo: ItemInitType) => void;
  deleteItem: (itemId: number) => void;
  getCollectionItems: (collectionId: number) => void;
  setTargetItem: (item: ItemType) => void;
  getTargetCollection: (collectionId: number) => void;
  getTargetItem: (itemId: number, collectionId: number) => void;
  listEditItems: Array<ItemType | null>;
  listDeleteItems: Array<ItemType | null>;
  setEditItems: (itemIds: number[]) => void;
  setDeleteItems: (itemIds: number[]) => void;
  getEditItems: (collectionId: number) => void;
  getDeleteItems: (collectionId: number) => void;
  pullOutItem: (itemId: number) => void;
  updateItem: (item: any) => void;
  toogleLike: (userId: number, itemId: number) => void;
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
        getTargetCollection(+collectionId);
        getEditItems(+collectionId);
        getDeleteItems(+collectionId);
      }

      getCollectionItems(+collectionId);
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
            toogleLike={props.toogleLike}
            userId={props.userId}
          />
        )}
      />
    </Routes>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  userId: getUserId(state),
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
  getTargetCollection: (collectionId: number) => dispatch(getTargetCollectionThunk(collectionId)),
  getTargetItem: (itemId: number, collectionId: number) => {
    dispatch(getTargetItemThunk(itemId, collectionId));
  },
  getCollectionItems: (collectionId: number) => {
    dispatch(getCollectionItemsThunk(collectionId));
  },
  deleteItem: (itemId: number) => {
    dispatch(deleteItemThunk(itemId));
  },
  setTargetItem: (item: ItemType) => {
    dispatch(setTargetItemAction(item));
  },
  setEditItems: (itemIds: number[]) => {
    dispatch(setEditItemsThunk(itemIds));
  },
  setDeleteItems: (itemIds: number[]) => {
    dispatch(setDeleteItemsThunk(itemIds));
  },
  getEditItems: (collectionId: number) => {
    dispatch(getEditItemsThunk(collectionId));
  },
  getDeleteItems: (collectionId: number) => {
    dispatch(getDeleteItemsThunk(collectionId));
  },
  pullOutItem: (itemId: number) => {
    dispatch(pullOutItemThunk(itemId));
  },
  updateItem: (item: any) => {
    dispatch(updateItemThunk(item));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionPageContainer);
