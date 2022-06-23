import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import RoutesApp from '../../constants/routes';
import { AppStateType } from '../../redux';
import {
  createNewItemThunk,
  deleteItemThunk,
  getCollectionItemsThunk,
  getTargetCollectionThunk,
  getTargetItemThunk,
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
}

const CollectionPageContainer: FC<IHomePageContainer> = (props) => {
  const { collectionId } = useParams();

  useEffect(() => {
    const { id, getCollectionItems, getTargetCollection } = props;

    if (collectionId) {
      if (!id) getTargetCollection(collectionId);

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
});

const mapDispatchToProps = (dispatch: any) => ({
  createNewItem: (itemInfo: ItemInitType) => dispatch(createNewItemThunk(itemInfo)),
  deleteItem: (itemId: string) => dispatch(deleteItemThunk(itemId)),
  getTargetCollection: (collectionId: string) => dispatch(getTargetCollectionThunk(collectionId)),
  getTargetItem: (itemId: string, collectionId: string) => {
    dispatch(getTargetItemThunk(itemId, collectionId));
  },
  getCollectionItems: (collectionId: string) => {
    dispatch(getCollectionItemsThunk(collectionId));
  },
  setTargetItem: (item: ItemType) => {
    dispatch(setTargetItemAction(item));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionPageContainer);
