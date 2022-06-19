import { AnyAction } from 'redux';
import { AuthType } from '../../types';
import { AUTH } from '../actions/auth-action';

const initState: AuthType = {
  isAuth: false,
  isLoading: false,
};

function authReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case AUTH.login: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case AUTH.signUp: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case AUTH.logOut: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
