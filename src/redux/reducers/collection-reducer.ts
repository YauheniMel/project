import { AnyAction } from 'redux';
import { CollectionType, ItemType } from '../../types';
import { CollectionActionTypes } from '../actions/collection-action';

const initState: CollectionType = {
  id: '123mk',
  title: 'Collection',
  icon: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
  description: 'Lindsj sjsk hd oaomsa bvsjsa hskm assa ygsagastb!',
  dateKeys: ['date1'],
  textKeys: null,
  multiLineKeys: ['multiLine1', 'multiLine2'],
  numberKeys: ['numbers1'],
  checkboxKeys: [
    { field: 'Checkbox', count: 2, values: ['values1', 'values2'] },
  ],
  theme: 'Books',
  meta: {
    createAt: '23.07.2015',
    updateAt: '10.06.2022',
  },
  list: [
    {
      id: '34r',
      title: 'Tom Tom',
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
          comments: [],
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
              comments: [],
            },
          ],
        },
        {
          name: 'Jack',
          surname: 'Jackson',
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: [],
        },
      ],
    },
    {
      id: '35r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: [],
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
          comments: [],
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
              comments: [],
            },
          ],
        },
        {
          name: 'Jack',
          surname: 'Jackson',
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: [],
        },
      ],
    },
    {
      id: '38r',
      title: 'Tom Tom',
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
          comments: [],
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
              comments: [],
            },
          ],
        },
        {
          name: 'Jack',
          surname: 'Jackson',
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: [],
        },
      ],
    },
    {
      id: '37r',
      title: 'Tom Tom',
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
          comments: [],
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
              comments: [],
            },
          ],
        },
        {
          name: 'Jack',
          surname: 'Jackson',
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: [],
        },
      ],
    },
    {
      id: '36r',
      title: 'Tom Tom',
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
          comments: [],
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
              comments: [],
            },
          ],
        },
        {
          name: 'Jack',
          surname: 'Jackson',
          createAt: '25.11.2021',
          content: 'Lorem ipsum dolor, sit pisic.',
          state: 'untouched',
          comments: [],
        },
      ],
    },
  ],
  targetItem: null,
};

function collectionReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case CollectionActionTypes.getCollection: {
      return {
        ...state,
      };
    }
    case CollectionActionTypes.setTargetItem: {
      const item = state.list.find((elem: ItemType) => elem.id === action.id);

      return {
        ...state,
        targetItem: item ? { ...item } : null,
      };
    }
    default:
      return state;
  }
}

export default collectionReducer;
