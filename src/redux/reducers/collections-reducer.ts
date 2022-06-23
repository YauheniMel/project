import { AnyAction } from 'redux';
import { CollectionsPageType } from '../../types';
import { CollectionsActionTypes } from '../actions/collections-action';

const initState: CollectionsPageType = {
  allCollections: null,
  myCollections: null,
};

function collectionsReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case CollectionsActionTypes.setMyCollections: {
      return {
        ...state,
        myCollections: [...action.collections],
      };
    }
    default:
      return state;
  }
}

export default collectionsReducer;
