import { combineReducers } from '@reduxjs/toolkit';
import { shareReducer } from './share-reducer';
import { userReducer } from './user-reducer';
import { AnyAction } from 'redux';
import { UserActionTypes } from '../actions/user-action';

const combinedReducer = combineReducers({
  share: shareReducer,
  user: userReducer,
});

export const rootReducer = (
  state = {
    share: {},
    user: {},
  },
  action: AnyAction
) => {
  switch (action.type) {
    case UserActionTypes.logout: {
      return combinedReducer(undefined, action);
    }
    default:
      return combinedReducer(state, action);
  }
};
