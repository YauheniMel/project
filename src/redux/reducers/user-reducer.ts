import { AnyAction } from 'redux';
import { UserType } from '../../types';
import { UserActionTypes } from '../actions/user-action';

const initState: UserType = {
  id: '123f',
  isAdmin: false,
  name: 'Yauheni',
  surname: 'Melnik',
  status: 'active',
  isOnline: false,
  theme: 'light',
  meta: {
    registerDate: '23.07.2015',
    loginDate: '10.06.2022',
  },
};

function userReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case UserActionTypes.setUserPersonalInfo: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
