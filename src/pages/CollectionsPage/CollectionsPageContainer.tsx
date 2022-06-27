import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux';
import CollectionsPage from './CollectionsPage';
import { CollectionType } from '../../types';
import { setTargetCollectionAction } from '../../redux/actions/collection-action';
import {
  getAllCollectionsThunk,
  getUserCollectionsThunk,
} from '../../redux/actions/collections-action';
import {
  getMyCollectionsSelector,
  getUserId,
} from '../../redux/selectors/user-selector';
import { getMyCollectionsThunk } from '../../redux/actions/user-action';
import getAllCollectionsSelector from '../../redux/selectors/collections-selector';

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

  return <CollectionsPage {...props} />;
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserId(state),
  allCollections: getAllCollectionsSelector(state),
  myCollections: getMyCollectionsSelector(state),
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionsPageContainer);
