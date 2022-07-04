import { AnyAction } from 'redux';
import { AdminType, UserType } from '../../types';
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
        targetCollections: action.user.collections.length
          ? [...action.user.collections]
          : null,
      };
    }
    case AdminActionTypes.setTargetCollections: {
      return {
        ...state,
        targetCollections: [...action.collections],
      };
    }
    case AdminActionTypes.setUserBlock: {
      return {
        ...state,
        users: state.users && [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              user.status = 'blocked';
            }

            return user;
          }),
        ],
      };
    }
    case AdminActionTypes.setUserUnblock: {
      return {
        ...state,
        users: state.users && [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              user.status = 'active';
            }

            return user;
          }),
        ],
      };
    }
    case AdminActionTypes.setUserIsAdmin: {
      return {
        ...state,
        users: state.users && [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              user.isAdmin = true;
            }

            return user;
          }),
        ],
      };
    }
    case AdminActionTypes.setUserIsNotAdmin: {
      return {
        ...state,
        users: state.users && [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              user.isAdmin = false;
            }

            return user;
          }),
        ],
      };
    }
    case AdminActionTypes.setAllUsers: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case AdminActionTypes.deleteUser: {
      return {
        ...state,
        users: state.users && [
          ...state.users.filter((user: UserType) => user.id !== action.userId),
        ],
      };
    }
    default:
      return state;
  }
}

export default adminReducer;
