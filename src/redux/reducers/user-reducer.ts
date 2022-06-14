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
  theme: 'light',
  meta: {
    registerDate: '23.07.2015',
    loginDate: '10.06.2022',
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
          id: '40r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '36r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '35r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '37r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '36r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '38sr',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '32r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '39r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '37r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          id: '40r',
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: 4,
          customField: {},
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
  list: [
    {
      id: '38r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 4,
      customField: {},
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      id: '41r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 4,
      customField: {},
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      id: '39r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 4,
      customField: {},
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      id: '42r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 4,
      customField: {},
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      id: '43r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 4,
      customField: {},
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
