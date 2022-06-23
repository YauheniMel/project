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
    case AdminActionTypes.setAdminTargetUser: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default adminReducer;
