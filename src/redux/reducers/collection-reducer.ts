import { AnyAction } from 'redux';
import { CollectionType, ItemType } from '../../types';
import { CollectionActionTypes } from '../actions/collection-action';

const initState: CollectionType = {
  targetCollection: null,
  allCollections: [
    {
      collections: [
        {
          id: '3d',
          title: 'Books',
          user: {
            id: '436d',
            name: 'Jim',
            surname: 'Kennn',
          },
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
          icon: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
          dateKeys: ['date1'],
          textKeys: null,
          multiLineKeys: ['multiLine1', 'multiLine2'],
          numberKeys: ['numbers1'],
          checkboxKeys: [
            { field: 'Checkbox', count: 2, values: ['values1', 'values2'] },
          ],
          theme: 'Books',
          meta: {
            createAt: '23.07.2021',
            updateAt: '10.05.2022',
          },
          list: [
            {
              id: '34r',
              title: 'Tom Tom',
              collectionId: '4d',
              user: {
                id: '436d',
                name: 'Jim',
                surname: 'Kennn',
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
              collectionId: '4d',
              user: {
                id: '436d',
                name: 'Jim',
                surname: 'Kennn',
              },
              title: 'Tom Tom',
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
              collectionId: '4d',
              user: {
                id: '436d',
                name: 'Jim',
                surname: 'Kennn',
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
              collectionId: '4d',
              user: {
                id: '436d',
                name: 'Jim',
                surname: 'Kennn',
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
              collectionId: '4d',
              user: {
                id: '436d',
                name: 'Jim',
                surname: 'Kennn',
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
        {
          id: '5d',
          title: 'Books',
          user: {
            id: '43s6d',
            name: 'Jack',
            surname: 'Sjaocp',
          },
          icon: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
          dateKeys: ['date1'],
          textKeys: null,
          multiLineKeys: ['multiLine1', 'multiLine2'],
          numberKeys: ['numbers1'],
          checkboxKeys: [
            { field: 'Checkbox', count: 2, values: ['values1', 'values2'] },
          ],
          theme: 'Books',
          meta: {
            createAt: '23.07.2021',
            updateAt: '10.05.2022',
          },
          list: [
            {
              id: '34r',
              title: 'Tom Tom',
              collectionId: '5d',
              user: {
                id: '43s6d',
                name: 'Jack',
                surname: 'Sjaocp',
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
              collectionId: '5d',
              tags: ['tag1', 'tag2', 'tag3'],
              countLike: null,
              user: {
                id: '43s6d',
                name: 'Jack',
                surname: 'Sjaocp',
              },
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
              collectionId: '5d',
              user: {
                id: '43s6d',
                name: 'Jack',
                surname: 'Sjaocp',
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
              collectionId: '5d',
              user: {
                id: '43s6d',
                name: 'Jack',
                surname: 'Sjaocp',
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
              collectionId: '5d',
              user: {
                id: '43s6d',
                name: 'Jack',
                surname: 'Sjaocp',
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
        {
          id: '6d',
          title: 'Books',
          user: {
            id: '43sw6d',
            name: 'Koam',
            surname: 'Ldsosndsn',
          },
          icon: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
          dateKeys: ['date1'],
          textKeys: null,
          multiLineKeys: ['multiLine1', 'multiLine2'],
          numberKeys: ['numbers1'],
          checkboxKeys: [
            { field: 'Checkbox', count: 2, values: ['values1', 'values2'] },
          ],
          theme: 'Books',
          meta: {
            createAt: '23.07.2021',
            updateAt: '10.05.2022',
          },
          list: [
            {
              id: '34r',
              title: 'Tom Tom',
              collectionId: '6d',
              user: {
                id: '43sw6d',
                name: 'Koam',
                surname: 'Ldsosndsn',
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
              collectionId: '6d',
              user: {
                id: '43sw6d',
                name: 'Koam',
                surname: 'Ldsosndsn',
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
              collectionId: '6d',
              user: {
                id: '43sw6d',
                name: 'Koam',
                surname: 'Ldsosndsn',
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
              collectionId: '6d',
              user: {
                id: '43sw6d',
                name: 'Koam',
                surname: 'Ldsosndsn',
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
              collectionId: '6d',
              user: {
                id: '43sw6d',
                name: 'Koam',
                surname: 'Ldsosndsn',
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
        {
          id: '7d',
          title: 'Books',
          user: {
            id: '43swi6d',
            name: 'Kosasaam',
            surname: 'Ldsodsdssndsn',
          },
          icon: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
          dateKeys: ['date1'],
          textKeys: null,
          multiLineKeys: ['multiLine1', 'multiLine2'],
          numberKeys: ['numbers1'],
          checkboxKeys: [
            { field: 'Checkbox', count: 2, values: ['values1', 'values2'] },
          ],
          theme: 'Books',
          meta: {
            createAt: '23.07.2021',
            updateAt: '10.05.2022',
          },
          list: [
            {
              id: '34r',
              title: 'Tom Tom',
              collectionId: '7d',
              user: {
                id: '43swi6d',
                name: 'Kosasaam',
                surname: 'Ldsodsdssndsn',
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
              collectionId: '7d',
              user: {
                id: '43swi6d',
                name: 'Kosasaam',
                surname: 'Ldsodsdssndsn',
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
              collectionId: '7d',
              user: {
                id: '43swi6d',
                name: 'Kosasaam',
                surname: 'Ldsodsdssndsn',
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
              collectionId: '7d',
              user: {
                id: '43swi6d',
                name: 'Kosasaam',
                surname: 'Ldsodsdssndsn',
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
              collectionId: '7d',
              user: {
                id: '43swi6d',
                name: 'Kosasaam',
                surname: 'Ldsodsdssndsn',
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
      user: {
        id: '123f',
        name: 'Jim',
        surname: 'Kennn',
      },
    },
  ],
  targetItem: null,
  myCollections: [
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

function collectionReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case CollectionActionTypes.getCollection: {
      const targetUser = state.allCollections.find(
        (item) => item.user.id === action.ids.userId,
      );
      const targetCollection = targetUser?.collections.find(
        (collection) => collection.id === action.ids.id,
      );

      console.log(targetCollection);
      return {
        ...state,
        targetCollection: targetCollection ? { ...targetCollection } : null,
      };
    }
    case CollectionActionTypes.getMyCollection: {
      const item = state.myCollections?.find(
        (collection) => collection && collection.id === action.id,
      );

      return {
        ...state,
        targetCollection: item ? { ...item } : null,
      };
    }
    case CollectionActionTypes.setTargetItem: {
      const item = state.targetCollection?.list.find(
        (elem: ItemType) => elem.id === action.id,
      );

      return {
        ...state,
        targetItem: item ? { ...item } : null,
      };
    }
    case CollectionActionTypes.setTargetCollection: {
      const targetCollection = state.myCollections?.find(
        (collection) => collection?.id === action.id,
      );
      return {
        ...state,
        targetCollection: targetCollection ? { ...targetCollection } : null,
      };
    }
    default:
      return state;
  }
}

export default collectionReducer;
