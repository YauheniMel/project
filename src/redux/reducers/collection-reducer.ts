import { AnyAction } from 'redux';
import { CollectionType } from '../../types';
import { collectionActionTypes } from '../actions/collection-action';

const initState: CollectionType = {
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
      id: '33r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: 2,
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
