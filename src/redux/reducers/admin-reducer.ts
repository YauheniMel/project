import { AnyAction } from 'redux';
import { AdminType } from '../../types';
import { AdminActionTypes } from '../actions/admin-action';
import { CollectionActionTypes } from '../actions/collection-action';

const initState: AdminType = {
  id: '123f',
  isAdmin: false,
  name: 'Yauheni',
  surname: 'Melnik',
  email: '207melnik@gmail.com',
  status: 'active',
  isOnline: true,
  theme: 'light',
  meta: {
    registerDate: '23.07.2015',
    loginDate: '10.06.2022',
  },
  users: [
    {
      id: '1f',
      isAdmin: false,
      name: 'Yauheni',
      surname: 'Melnik',
      email: '207melnik@gmail.com',
      status: 'active',
      isOnline: true,
      theme: 'light',
      meta: {
        registerDate: '23.07.2015',
        loginDate: '10.06.2022',
      },
    },
    {
      id: '2f',
      isAdmin: false,
      name: 'Yauheni',
      surname: 'Melnik',
      email: '207melnik@gmail.com',
      status: 'active',
      isOnline: true,
      theme: 'light',
      meta: {
        registerDate: '23.07.2015',
        loginDate: '10.06.2022',
      },
    },
    {
      id: '3f',
      isAdmin: false,
      name: 'Yauheni',
      surname: 'Melnik',
      email: '207melnik@gmail.com',
      status: 'active',
      isOnline: true,
      theme: 'light',
      meta: {
        registerDate: '23.07.2015',
        loginDate: '10.06.2022',
      },
    },
  ],
  targetUser: {
    id: '123f',
    isAdmin: false,
    name: 'Yauheni',
    surname: 'Melnik',
    email: '207melnik@gmail.com',
    status: 'active',
    isOnline: true,
    theme: 'light',
    meta: {
      registerDate: '23.07.2015',
      loginDate: '10.06.2022',
    },
  },
  targetCollections: [
    {
      id: '3d',
      title: 'Books',
      user: {
        id: '123f',
        name: 'Yauheni',
        surname: 'Melnik',
      },
      icon: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      theme: 'Books',
      dateKeys: ['date1'],
      textKeys: null,
      multiLineKeys: ['multiLine1', 'multiLine2'],
      numberKeys: ['numbers1'],
      checkboxKeys: [
        { field: 'Checkbox', count: 2, values: ['values1', 'values2'] },
      ],
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      list: [
        {
          id: '34r',
          collectionId: '3d',
          title: 'Tom Tom',
          user: {
            id: '123f',
            name: 'Yauheni',
            surname: 'Melnik',
          },
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          dateValues: { date1: '25.10.20' },
          multiLineValues: {
            multiLine1: 'multiLine1 jnsdjn dsnsdj dsnjdsn sdndsds',
            multiLine2: 'multiLine2 kmdsn kdns',
          },
          checkboxValues: { Checkbox: 'values1' },
          textValues: null,
          numberValues: {
            numbers1: 4,
          },
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
              state: 'touched',
              comments: null,
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
        {
          id: '35r',
          title: 'Tom Tom',
          collectionId: '3d',
          user: {
            id: '123f',
            name: 'Yauheni',
            surname: 'Melnik',
          },
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: null,
          dateValues: { date1: '25.10.20' },
          multiLineValues: {
            multiLine1: 'multiLine1 jnsdjn dsnsdj dsnjdsn sdndsds',
            multiLine2: 'multiLine2 kmdsn kdns',
          },
          checkboxValues: { Checkbox: 'values1' },
          textValues: null,
          numberValues: {
            numbers1: 4,
          },
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
              state: 'touched',
              comments: null,
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
        {
          id: '38r',
          title: 'Tom Tom',
          collectionId: '3d',
          user: {
            id: '123f',
            name: 'Yauheni',
            surname: 'Melnik',
          },
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3', '4'],
          dateValues: { date1: '25.10.20' },
          multiLineValues: {
            multiLine1: 'multiLine1 jnsdjn dsnsdj dsnjdsn sdndsds',
            multiLine2: 'multiLine2 kmdsn kdns',
          },
          checkboxValues: { Checkbox: 'values1' },
          textValues: null,
          numberValues: {
            numbers1: 4,
          },
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
              state: 'touched',
              comments: null,
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
        {
          id: '37r',
          title: 'Tom Tom',
          collectionId: '3d',
          user: {
            id: '123f',
            name: 'Yauheni',
            surname: 'Melnik',
          },
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2'],
          dateValues: { date1: '25.10.20' },
          multiLineValues: {
            multiLine1: 'multiLine1 jnsdjn dsnsdj dsnjdsn sdndsds',
            multiLine2: 'multiLine2 kmdsn kdns',
          },
          checkboxValues: { Checkbox: 'values1' },
          textValues: null,
          numberValues: {
            numbers1: 4,
          },
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
              state: 'touched',
              comments: null,
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
        {
          id: '36r',
          title: 'Tom Tom',
          collectionId: '3d',
          user: {
            id: '123f',
            name: 'Yauheni',
            surname: 'Melnik',
          },
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          dateValues: { date1: '25.10.20' },
          multiLineValues: {
            multiLine1: 'multiLine1 jnsdjn dsnsdj dsnjdsn sdndsds',
            multiLine2: 'multiLine2 kmdsn kdns',
          },
          checkboxValues: { Checkbox: 'values1' },
          textValues: null,
          numberValues: {
            numbers1: 4,
          },
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
              state: 'touched',
              comments: null,
            },
            {
              name: 'Tiko',
              surname: 'Tod',
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  name: 'Carl',
                  surname: 'Tanwks',
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              name: 'Jack',
              surname: 'Jackson',
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
      ],
    },
  ],
};

function adminReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case AdminActionTypes.setAdminTargetUser: {
      return {
        ...state,
      };
    }
    case CollectionActionTypes.setTargetCollection: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default adminReducer;
