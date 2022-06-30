import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router';
import { AppStateType } from '../../redux';
import CollectionsPage from './CollectionsPage';
import { CollectionType } from '../../types';
import { setTargetCollectionAction } from '../../redux/actions/collection-action';
import {
  getAllCollectionsThunk,
  getTargetCollectionsThunk,
  getUserCollectionsThunk,
} from '../../redux/actions/collections-action';
import {
  getMyCollectionsSelector,
  getUserId,
} from '../../redux/selectors/user-selector';
import { getMyCollectionsThunk } from '../../redux/actions/user-action';
import {
  getAllCollectionsSelector,
  getTargetCollectionsSelector,
} from '../../redux/selectors/collections-selector';
import TargetCollectionsPage from './TargetCollectionsPage';
import RoutesApp from '../../constants/routes';

interface ICollectionsPageContainer {
  id: number;
  allCollections:
  | {
    id: number;
    name: string;
    surname: string;
    collections: CollectionType[] | null;
  }[]
  | null;
  myCollections: CollectionType[] | null;
  setCollection: (collectionId: CollectionType) => void;
  getAllCollections: (userId: number) => void;
  getMyCollections: (userId: number, page?: number) => void;
  getUserCollections: (userId: number, page?: number) => void;
  getTargetCollections: (userId: number | string, page?: number) => void;
  targetCollections: any;
}

const CollectionsPageContainer: FC<ICollectionsPageContainer> = (props) => {
  useEffect(() => {
    const {
      getAllCollections, id, allCollections, getMyCollections,
    } = props;

    if (id) {
      getMyCollections(id);
      if (!allCollections) getAllCollections(id);
    }
  }, [props.id]);

  return (
    <Routes>
      <Route path="/" element={<CollectionsPage {...props} />} />
      <Route
        path={RoutesApp.TargetCollections}
        element={(
          <TargetCollectionsPage
            getTargetCollections={props.getTargetCollections}
            targetCollections={props.targetCollections}
            setTargetCollection={props.setCollection}
          />
        )}
      />
    </Routes>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
  allCollections: getAllCollectionsSelector(state),
  myCollections: getMyCollectionsSelector(state),
  targetCollections: getTargetCollectionsSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  setCollection: (collection: CollectionType) => {
    dispatch(setTargetCollectionAction(collection));
  },
  getAllCollections: (userId: number) => {
    dispatch(getAllCollectionsThunk(userId));
  },
  getMyCollections: (userId: number, page?: number) => {
    dispatch(getMyCollectionsThunk(userId, page));
  },
  getUserCollections: (userId: number, page?: number) => {
    dispatch(getUserCollectionsThunk(userId, page));
  },
  getTargetCollections: (userId: number | string, page?: number) => {
    dispatch(getTargetCollectionsThunk(userId, page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionsPageContainer);
