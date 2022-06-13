import { UserType } from '../../types';

const initState: UserType = {
  id: '123f',
  isAdmin: true,
  name: 'Yauheni',
  surname: 'Melnik',
  email: '207melnik@gmail.com',
  status: 'active',
  isOnline: true,
  meta: {
    register_date: '23.07.2015',
    login_date: '10.06.2022',
  },
};

function userReducer(action: any, state = initState) {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;
