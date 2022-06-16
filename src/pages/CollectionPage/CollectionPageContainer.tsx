import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RoutesApp from '../../constants/routes';
import { AppStateType } from '../../redux';
import {
  getCollectionCheckboxFields,
  getCollectionDateFields,
  getCollectionDescription,
  getCollectionIcon,
  getCollectionId,
  getCollectionList,
  getCollectionMeta,
  getCollectionMultiLineFields,
  getCollectionNumberFields,
  getCollectionTargetItem,
  getCollectionTextsFields,
  getCollectionTheme,
  getCollectionTitle,
} from '../../redux/selectors/collection-selector';
import { ItemType } from '../../types';
import ItemPage from '../ItemPage/ItemPage';
import CollectionPage from './CollectionPage';

interface IHomePageContainer {
  id: string;
  title: string;
  icon: string;
  description: string;
  theme: string;
  meta: { createAt: string; updateAt: string };
  list: ItemType[];
  targetItem: ItemType | null;
  dateFields: null | string[];
  multiLineFields: null | string[];
  numberFields: null | string[];
  textFields: null | string[];
  checkboxFields: null | { field: string; count: number; values: string[] }[];
  setTargetItem: (id: string) => void;
}

const CollectionPageContainer: FC<IHomePageContainer> = (props) => (
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

const mapStateToProps = (state: AppStateType) => ({
  id: getCollectionId(state),
  title: getCollectionTitle(state),
  icon: getCollectionIcon(state),
  description: getCollectionDescription(state),
  theme: getCollectionTheme(state),
  meta: getCollectionMeta(state),
  list: getCollectionList(state),
  targetItem: getCollectionTargetItem(state),
  numberFields: getCollectionNumberFields(state),
  textFields: getCollectionTextsFields(state),
  multiLineFields: getCollectionMultiLineFields(state),
  dateFields: getCollectionDateFields(state),
  checkboxFields: getCollectionCheckboxFields(state),
});

export default connect(mapStateToProps)(CollectionPageContainer);
