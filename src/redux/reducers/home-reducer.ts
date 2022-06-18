import { AnyAction } from 'redux';
import { HomePageType } from '../../types';
import { HomeActionTypes } from '../actions/home-action';

const initState: HomePageType = {
  collections: [
    {
      id: '4d',
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
          collection: {
            id: '4d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '4d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '4d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '4d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '4d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '5d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '5d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '5d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '5d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '5d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '6d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '6d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '6d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '6d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '6d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '7d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '7d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '7d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '7d',
            theme: 'Theme',
            title: 'Title',
          },
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
          collection: {
            id: '7d',
            theme: 'Theme',
            title: 'Title',
          },
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
  list: [
    {
      id: '34r',
      title: 'Tom Tom',
      collection: {
        id: '4d',
        theme: 'Theme',
        title: 'Title',
      },
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
      collection: {
        id: '4d',
        theme: 'Theme',
        title: 'Title',
      },
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
      collection: {
        id: '4d',
        theme: 'Theme',
        title: 'Title',
      },
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
      collection: {
        id: '4d',
        theme: 'Theme',
        title: 'Title',
      },
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
      collection: {
        id: '4d',
        theme: 'Theme',
        title: 'Title',
      },
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
