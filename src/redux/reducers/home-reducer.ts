import { AnyAction } from 'redux';
import { HomePageType } from '../../types';
import { HomeActionTypes } from '../actions/home-action';

const initState: HomePageType = {
  collections: [
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
          id: '3ds4r',
          collection: {
            id: '3d',
            theme: 'Theme',
            title: 'Title',
          },
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
              user: {
                id: 'ndsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '23.11.2021',
              content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
              state: 'touched',
              comments: null,
            },
            {
              user: {
                id: 'ndassj',
                name: 'Tiko',
                surname: 'Tod',
              },
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  user: {
                    id: 'ndsj',
                    name: 'Carl',
                    surname: 'Tanwks',
                  },
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              user: {
                id: 'ndsdsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
      ],
    },
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
          id: '3dsaa4r',
          collection: {
            id: '3d',
            theme: 'Theme',
            title: 'Title',
          },
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
              user: {
                id: 'ndsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '23.11.2021',
              content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
              state: 'touched',
              comments: null,
            },
            {
              user: {
                id: 'ndassj',
                name: 'Tiko',
                surname: 'Tod',
              },
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  user: {
                    id: 'ndsj',
                    name: 'Carl',
                    surname: 'Tanwks',
                  },
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              user: {
                id: 'ndsdsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
      ],
    },
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
          id: 'ffd34r',
          collection: {
            id: '3d',
            theme: 'Theme',
            title: 'Title',
          },
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
              user: {
                id: 'ndsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '23.11.2021',
              content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
              state: 'touched',
              comments: null,
            },
            {
              user: {
                id: 'ndassj',
                name: 'Tiko',
                surname: 'Tod',
              },
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  user: {
                    id: 'ndsj',
                    name: 'Carl',
                    surname: 'Tanwks',
                  },
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              user: {
                id: 'ndsdsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '25.11.2021',
              content: 'Lorem ipsum dolor, sit pisic.',
              state: 'untouched',
              comments: null,
            },
          ],
        },
      ],
    },
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
          id: 'weew34r',
          collection: {
            id: '3d',
            theme: 'Theme',
            title: 'Title',
          },
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
              user: {
                id: 'ndsj',
                name: 'Jack',
                surname: 'Jackson',
              },
              createAt: '23.11.2021',
              content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
              state: 'touched',
              comments: null,
            },
            {
              user: {
                id: 'ndassj',
                name: 'Tiko',
                surname: 'Tod',
              },
              createAt: '24.11.2021',
              state: 'touched',
              content:
                'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
              comments: [
                {
                  user: {
                    id: 'ndsj',
                    name: 'Carl',
                    surname: 'Tanwks',
                  },
                  createAt: '24.11.2021',
                  content: 'Loremdolor, sit!',
                  state: 'touched',
                  comments: null,
                },
              ],
            },
            {
              user: {
                id: 'ndsdsj',
                name: 'Jack',
                surname: 'Jackson',
              },
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
  list: [
    {
      id: '3q4r',
      collection: {
        id: '3d',
        theme: 'Theme',
        title: 'Title',
      },
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
          user: {
            id: 'ndsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '23.11.2021',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
          state: 'touched',
          comments: null,
        },
        {
          user: {
            id: 'ndassj',
            name: 'Tiko',
            surname: 'Tod',
          },
          createAt: '24.11.2021',
          state: 'touched',
          content:
            'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
          comments: [
            {
              user: {
                id: 'ndsj',
                name: 'Carl',
                surname: 'Tanwks',
              },
              createAt: '24.11.2021',
              content: 'Loremdolor, sit!',
              state: 'touched',
              comments: null,
            },
          ],
        },
        {
          user: {
            id: 'ndsdsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: null,
        },
      ],
    },
    {
      id: '34dsr',
      collection: {
        id: '3d',
        theme: 'Theme',
        title: 'Title',
      },
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
          user: {
            id: 'ndsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '23.11.2021',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
          state: 'touched',
          comments: null,
        },
        {
          user: {
            id: 'ndassj',
            name: 'Tiko',
            surname: 'Tod',
          },
          createAt: '24.11.2021',
          state: 'touched',
          content:
            'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
          comments: [
            {
              user: {
                id: 'ndsj',
                name: 'Carl',
                surname: 'Tanwks',
              },
              createAt: '24.11.2021',
              content: 'Loremdolor, sit!',
              state: 'touched',
              comments: null,
            },
          ],
        },
        {
          user: {
            id: 'ndsdsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: null,
        },
      ],
    },
    {
      id: 'as34r',
      collection: {
        id: '3d',
        theme: 'Theme',
        title: 'Title',
      },
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
          user: {
            id: 'ndsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '23.11.2021',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
          state: 'touched',
          comments: null,
        },
        {
          user: {
            id: 'ndassj',
            name: 'Tiko',
            surname: 'Tod',
          },
          createAt: '24.11.2021',
          state: 'touched',
          content:
            'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
          comments: [
            {
              user: {
                id: 'ndsj',
                name: 'Carl',
                surname: 'Tanwks',
              },
              createAt: '24.11.2021',
              content: 'Loremdolor, sit!',
              state: 'touched',
              comments: null,
            },
          ],
        },
        {
          user: {
            id: 'ndsdsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: null,
        },
      ],
    },
    {
      id: '3ds4r',
      collection: {
        id: '3d',
        theme: 'Theme',
        title: 'Title',
      },
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
          user: {
            id: 'ndsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '23.11.2021',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
          state: 'touched',
          comments: null,
        },
        {
          user: {
            id: 'ndassj',
            name: 'Tiko',
            surname: 'Tod',
          },
          createAt: '24.11.2021',
          state: 'touched',
          content:
            'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
          comments: [
            {
              user: {
                id: 'ndsj',
                name: 'Carl',
                surname: 'Tanwks',
              },
              createAt: '24.11.2021',
              content: 'Loremdolor, sit!',
              state: 'touched',
              comments: null,
            },
          ],
        },
        {
          user: {
            id: 'ndsdsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: null,
        },
      ],
    },
    {
      id: '3as4r',
      collection: {
        id: '3d',
        theme: 'Theme',
        title: 'Title',
      },
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
          user: {
            id: 'ndsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '23.11.2021',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisic.',
          state: 'touched',
          comments: null,
        },
        {
          user: {
            id: 'ndassj',
            name: 'Tiko',
            surname: 'Tod',
          },
          createAt: '24.11.2021',
          state: 'touched',
          content:
            'Loremdolor, sit amet consec ipsum dolor, sit amet consectetur adipisic.',
          comments: [
            {
              user: {
                id: 'ndsj',
                name: 'Carl',
                surname: 'Tanwks',
              },
              createAt: '24.11.2021',
              content: 'Loremdolor, sit!',
              state: 'touched',
              comments: null,
            },
          ],
        },
        {
          user: {
            id: 'ndsdsj',
            name: 'Jack',
            surname: 'Jackson',
          },
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: null,
        },
      ],
    },
  ],
};

function homeReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case HomeActionTypes.getCollections: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default homeReducer;
