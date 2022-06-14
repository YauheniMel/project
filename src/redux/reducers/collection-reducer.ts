import { AnyAction } from 'redux';
import { CollectionPageType } from '../../types';
import { collectionActionTypes } from '../actions/collection-action';

const initState: CollectionPageType = {
  id: '123mk',
  title: 'Collection',
  icon: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
  description: 'Lindsj sjsk hd oaomsa bvsjsa hskm assa ygsagastb!',
  theme: 'Khasjpcm dkmdkskm',
  meta: {
    createAt: '23.07.2015',
    updateAt: '10.06.2022',
  },
  list: [
    {
      id: '34r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 4,
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      customField: {
        year: '1996',
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
      id: '35r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 2,
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      customField: {
        year: '1996',
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
      id: '38r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 2,
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      customField: {
        year: '1996',
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
      countLike: 2,
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      customField: {
        year: '1996',
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
      countLike: 2,
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
      meta: {
        createAt: '23.07.2021',
        updateAt: '10.05.2022',
      },
      customField: {
        year: '1996',
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
  targetItem: {
    id: '35r',
    title: 'Tom Tom',
    tags: ['tag1', 'tag2', 'tag3'],
    countLike: 2,
    icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
    meta: {
      createAt: '23.07.2021',
      updateAt: '10.05.2022',
    },
    customField: {
      year: '1996',
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
};

function collectionReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case collectionActionTypes.getCollection: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default collectionReducer;
