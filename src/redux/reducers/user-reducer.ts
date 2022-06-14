import { AnyAction } from 'redux';
import { UserType } from '../../types';
import { userActionTypes } from '../actions/user-action';

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
  collections: [
    {
      id: '3d',
      title: 'Books',
      icon: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      theme: 'Favorite books',
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      list: [
        {
          id: '34r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          count_like: 4,
          meta: {
            createAt: '23.07.2021',
            updateAt: '10.05.2022',
          },
          comments: [
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '23.11.2021',
              content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
              comments: [],
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  comments: [],
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              comments: [],
            },
          ],
        },
        {
          id: '33r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          count_like: 4,
          meta: {
            createAt: '23.07.2021',
            updateAt: '10.05.2022',
          },
          comments: [
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '23.11.2021',
              content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
              comments: [],
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  comments: [],
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              comments: [],
            },
          ],
        },
      ],
    },
  ],
};

function userReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case userActionTypes.getUser: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
