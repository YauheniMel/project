import { AnyAction } from 'redux';
import { UserPageType } from '../../types';
import { UserActionTypes } from '../actions/user-action';

const initState: UserPageType = {
  id: null,
  userId: null,
  isAdmin: false,
  name: null,
  surname: null,
  status: 'active',
  isOnline: false,
  theme: 'light',
  createdAt: null,
  updatedAt: null,
  myCollections: null,
};

function userReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case UserActionTypes.setUserPersonalInfo: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case UserActionTypes.setMyCollections: {
      return {
        ...state,
        myCollections: [...action.collections],
      };
    }
    default:
      return state;
  }
}

export default userReducer;
