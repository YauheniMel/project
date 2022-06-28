import { AnyAction } from 'redux';
import { AdminType } from '../../types';
import { AdminActionTypes } from '../actions/admin-action';

const initState: AdminType = {
  users: null,
  targetUser: null,
  targetCollections: null,
};

function adminReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case AdminActionTypes.setTargetUser: {
      return {
        ...state,
        targetUser: {
          ...action.user,
        },
      };
    }
    case AdminActionTypes.setTargetCollections: {
      return {
        ...state,
        targetCollections: [...action.collections],
      };
    }
    default:
      return state;
  }
}

export default adminReducer;
