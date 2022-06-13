import { AuthType } from '../../types';

const initState: AuthType = {
  isAuth: false,
  isLoading: false,
};

function authReducer(action: any, state = initState) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
