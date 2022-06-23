import { AnyAction } from 'redux';
import { HomePageType } from '../../types';
import { HomeActionTypes } from '../actions/home-action';

const initState: HomePageType = {
  collections: null,
  list: null,
};

function homeReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case HomeActionTypes.setBigCollections: {
      return {
        ...state,
        collections: [...action.collections],
      };
    }
    case HomeActionTypes.getLastAddItems: {
      return {
        ...state,
        list: [...action.items],
      };
    }
    default:
      return state;
  }
}

export default homeReducer;
