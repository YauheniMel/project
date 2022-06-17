import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RoutesApp from '../../constants/routes';
import { AppStateType } from '../../redux';
import {
  getCollectionTargetItem,
  getTargetCollection,
} from '../../redux/selectors/collection-selector';
import { CollectionInitType, ItemType } from '../../types';
import ItemPage from '../ItemPage/ItemPage';
import CollectionPage from './CollectionPage';

interface IHomePageContainer {
  targetItem: ItemType | null;
  targetCollection: CollectionInitType;
  setTargetItem: (id: string) => void;
}

const CollectionPageContainer: FC<IHomePageContainer> = (props) => {
  console.log(props);
  return (
    <Routes>
      <Route path="*" element={<CollectionPage {...props} />} />
      {props.targetItem && (
        <Route
          path={RoutesApp.Item}
          element={<ItemPage {...props.targetItem} />}
        />
      )}
    </Routes>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  targetItem: getCollectionTargetItem(state),
  targetCollection: getTargetCollection(state),
});

export default connect(mapStateToProps)(CollectionPageContainer);
