import { AnyAction } from 'redux';
import { UserType } from '../../types';
import { UserActionTypes } from '../actions/user-action';

const initState: UserType = {
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
  collections: [
    {
      id: '3d',
      title: 'Books',
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
          title: 'Tom Tom',
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
    },
    {
      id: '4d',
      title: 'Books',
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
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
    },
    {
      id: '5d',
      title: 'Books',
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
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
    },
    {
      id: '6d',
      title: 'Books',
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
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
    },
    {
      id: '7d',
      title: 'Books',
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
          tags: ['tag1', 'tag2', 'tag3'],
          countLike: ['1', '2', '3'],
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
          icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
    },
  ],
  list: [
    {
      id: '34r',
      title: 'Tom Tom',
      tags: ['tag1', 'tag2', 'tag3'],
      countLike: ['1', '2', '3'],
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
      icon: 'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
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
};

function userReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case UserActionTypes.getUser: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
