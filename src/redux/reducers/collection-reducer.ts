import { AnyAction } from 'redux';
import { CollectionType } from '../../types';
import { CollectionActionTypes } from '../actions/collection-action';
import { UserActionTypes } from '../actions/user-action';

const initState: CollectionType = {
  id: null,
  icon: null,
  description: null,
  theme: null,
  createdAt: null,
  updatedAt: null,
  isEdit: false,
  isDelete: false,
  allFields: [
    'dateKey1',
    'dateKey2',
    'dateKey3',
    'multiLineKey1',
    'multiLineKey2',
    'multiLineKey3',
    'numberKey1',
    'numberKey2',
    'numberKey3',
    'textKey1',
    'textKey2',
    'textKey3',
    'checkboxKey1',
    'checkboxKey2',
    'checkboxKey3',
  ],
  dateKey1: null,
  dateKey2: null,
  dateKey3: null,
  multiLineKey1: null,
  multiLineKey2: null,
  multiLineKey3: null,
  numberKey1: null,
  numberKey2: null,
  numberKey3: null,
  textKey1: null,
  textKey2: null,
  textKey3: null,
  checkboxKey1: null,
  checkboxKey2: null,
  checkboxKey3: null,
  list: null,
  targetItem: null,
  customFields: null,
  listEditItems: [],
  listDeleteItems: [],
  userId: null,
};

function collectionReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case CollectionActionTypes.SetTargetCollection: {
      return {
        ...state,
        id: action.collection.id,
        icon: action.collection.icon,
        description: action.collection.description,
        theme: action.collection.theme,
        createdAt: action.collection.createdAt,
        customFields: state.allFields.map((field) => ({
          [field]: action.collection[field],
        })),
        updatedAt: action.collection.updatedAt,
      };
    }
    case CollectionActionTypes.SetTargetItem: {
      return {
        ...state,
        targetItem: action.item,
      };
    }
    case CollectionActionTypes.SetTargetCollectionItems: {
      return {
        ...state,
        list: [...action.items],
      };
    }
    case CollectionActionTypes.AddNewItem: {
      return {
        ...state,
        list: state.list ? [...state.list, action.item] : [action.item],
      };
    }
    case CollectionActionTypes.DeleteItem: {
      return {
        ...state,
        list: [...state.list!.filter((item) => item.id !== action.itemId)],
      };
    }
    case CollectionActionTypes.UpdateEditListItems: {
      const listEditItems = state.list?.filter((item) => {
        let isItemExist = false;
        action.itemIds.forEach((id: string) => {
          if (+id === item.id) isItemExist = true;
        });

        return isItemExist;
      });

      const listItems = listEditItems?.filter(
        (item) => !state.listEditItems.find((itemState) => itemState?.id === item.id),
      );

      const listDeleteItems = state.listDeleteItems?.filter(
        (item) => !listItems?.find((itemState) => itemState?.id === item?.id),
      );

      return {
        ...state,
        listEditItems: listItems
          ? [...state.listEditItems, ...listItems]
          : state.listEditItems,
        listDeleteItems: listDeleteItems
          ? [...listDeleteItems]
          : state.listDeleteItems,
      };
    }
    case CollectionActionTypes.SetEditListItems: {
      return {
        ...state,
        listEditItems: [...action.items],
      };
    }
    case CollectionActionTypes.UpdateDeleteListItems: {
      const listDeleteItems = state.list?.filter((item) => {
        let isItemExist = false;
        action.itemIds.forEach((id: string) => {
          if (+id === item.id) isItemExist = true;
        });

        return isItemExist;
      });

      const listItems = listDeleteItems?.filter(
        (item) => !state.listDeleteItems.find((itemState) => itemState?.id === item.id),
      );

      const listEditItems = state.listEditItems?.filter(
        (item) => !listItems?.find((itemState) => itemState?.id === item?.id),
      );

      return {
        ...state,
        listEditItems: listEditItems ? [...listEditItems] : state.listEditItems,
        listDeleteItems: listItems
          ? [...state.listDeleteItems, ...listItems]
          : state.listDeleteItems,
      };
    }
    case CollectionActionTypes.SetDeleteListItems: {
      return {
        ...state,
        listDeleteItems: [...action.items],
      };
    }
    case CollectionActionTypes.PullOutItem: {
      return {
        ...state,
        listEditItems: state.listEditItems.filter(
          (collection) => collection?.id !== action.itemId,
        ),
        listDeleteItems: state.listDeleteItems.filter(
          (collection) => collection?.id !== action.itemId,
        ),
      };
    }
    case UserActionTypes.increaseLikes: {
      const newList = state.list?.map((item) => {
        if (item.id === action.itemId) {
          if (!item.likes) item.likes = [];

          item.likes.push({ itemId: action.itemId });
        }

        return item;
      });
      return {
        ...state,
        list: newList || null,
      };
    }
    case UserActionTypes.decreaseLikes: {
      const newList = state.list?.map((item) => {
        if (item.id === action.itemId) {
          if (!item.likes) item.likes = [];

          item.likes.splice(0, 1);
        }

        return item;
      });
      return {
        ...state,
        list: newList || null,
      };
    }
    default:
      return state;
  }
}

export default collectionReducer;
