import React from 'react';

export const languages = {
  eng: {
    mode: 'eng',
    auth: {
      signUp: 'Sign Up',
      login: 'Login',
      email: 'Email',
      password: 'Password',
      name: 'Name',
      surname: 'Surname',
      confirmPassword: 'Confirm password',
    },
    search: 'Search',
    userPage: {
      createCollection: 'Create collection',
      edit: 'Edit',
      delete: 'Garbage',
    },
    collectionPage: {
      createItem: 'Create item',
      edit: 'Edit',
      delete: 'Garbage',
      putDelete: 'Throw in the trash',
      putEdit: 'Make an edit',
      filterCleaning: 'Reset filter',
      export: 'Export',
      title: 'Title',
      tags: 'Tags',
      likes: 'Likes',
      actions: 'Actions',
      rowsPerPage: 'Rows per page',
      created: 'Created',
    },
    collectionsPage: {
      myCollections: 'My collections',
    },
    modalCreateCollection: {
      title: 'Title',
      theme: 'Theme',
      description: 'Description',
      nameField: 'Name field',
      nameOption: 'Name option',
      numbers: 'Fields for entering numbers',
      texts: 'Fields for entering single-line text',
      dates: 'Fields for entering dates',
      multiLines: 'Fields for entering multi-line text',
      radioFields: 'Fields with yes/no selection',
      checkboxFields: 'Fields with multiple choices',
      delete: 'Delete',
      addField: 'Add field',
      reset: 'Reset',
      confirm: 'Confirm',
    },
    modalEditCollection: {
      title: 'Title',
      theme: 'Theme',
      description: 'Description',
      variants: 'Variants',
      update: 'Update',
      pullOut: 'Pull out',
      reset: 'Reset',
      created: 'Created',
    },
    modalEditItem: {
      title: 'Title',
      update: 'Update',
      pullOut: 'Pull out',
      reset: 'Reset',
      enterBtn: 'Please press enter to add a new tag',
      tags: 'Tags',
      created: 'Created',
    },
    modalDelete: {
      delete: 'Delete',
      pullOut: 'Pull out',
      created: 'Created',
    },
    itemPage: {
      updated: 'Updated',
      comments: 'Comments',
      addComment: 'Add comments',
      myComments: 'My Comments',
      likes: 'Likes',
    },
  },
  by: {
    mode: 'by',
    auth: {
      signUp: 'Зарэгістравацца',
      login: 'Увайсці',
      email: 'Электронная пошта',
      password: 'Пароль',
      name: 'Імя',
      surname: 'Прозвішча',
      confirmPassword: 'Пацвердзіць пароль',
    },
    search: 'Знайсці',
    userPage: {
      createCollection: 'Стварыць калекцыю',
      edit: 'Рэдагаваць',
      delete: 'Кошык',
    },
    collectionPage: {
      createItem: 'Стварыць элемент',
      edit: 'Рэдагаваць',
      delete: 'Кошык',
      putDelete: 'Закінуць у кошык',
      addPhoto: 'Add photo',
      putEdit: 'Зрабіць выпраўленні',
      filterCleaning: 'Ачысціць фільтр',
      export: 'Экспарт',
      title: 'Назва',
      tags: 'Тэгі',
      likes: 'Падабайкі',
      actions: 'Дзеянні',
      rowsPerPage: 'Радкоў на старонцы',
      created: 'Створана',
      ready: 'Ready',
    },
    collectionsPage: {
      myCollections: 'Мае калекцыі',
    },
    modalCreateCollection: {
      title: 'Назва',
      theme: 'Тэма',
      description: 'Апісанне',
      nameField: 'Назва поля',
      nameOption: 'Назва выбару',
      addPhoto: 'Дадаць фота',
      numbers: 'Палі для ўводу лікаў',
      texts: 'Палі для ўводу аднарадковага тэксту',
      dates: 'Палі для ўводу даты',
      multiLines: 'Палі для ўводу шматрадковага тэксту',
      radioFields: 'Палі з вабарам да/не',
      checkboxFields: 'Палі з варыянтамі выбару',
      delete: 'Выдаліць',
      addField: 'Дадаць поле',
      reset: 'Сцерці',
      confirm: 'Пацвердзіць',
      ready: 'Гатова',
    },
    modalEditCollection: {
      title: 'Назва',
      theme: 'Тэма',
      description: 'Апісанне',
      variants: 'Варыянты',
      update: 'Абнавіць',
      pullOut: 'Дастаць',
      reset: 'Сцерці',
      created: 'Створаны',
    },
    modalEditItem: {
      title: 'Назва',
      update: 'Абнавіць',
      pullOut: 'Дастаць',
      reset: 'Сцерці',
      enterBtn: 'Для дадання новага тэга націсніце ўвод',
      tags: 'Тэгі',
      created: 'Створаны',
    },
    modalDelete: {
      delete: 'Выдаліць',
      pullOut: 'Дастаць',
      created: 'Створаны',
    },
    itemPage: {
      updated: 'Абнавіць',
      comments: 'Каментары',
      addComment: 'Дадаць каментар',
      myComments: 'Мае каментары',
      likes: 'Падабайкі',
    },
  },
};

export const LanguageContext = React.createContext();