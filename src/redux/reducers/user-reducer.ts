import { AnyAction } from 'redux';
import { UserPageType } from '../../types';
import { UserActionTypes } from '../actions/user-action';

const initState: UserPageType = {
  id: null,
  userId: null,
  isAdmin: false,
  name: null,
  surname: null,
  status: 'active',
  isOnline: false,
  theme: 'light',
  createdAt: null,
  updatedAt: null,
  myCollections: null,
  listEditCollections: [],
  listDeleteCollections: [],
  itemsSearch: null,
  usersSearch: null,
};

function userReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case UserActionTypes.setUserPersonalInfo: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case UserActionTypes.setMyCollections: {
      return {
        ...state,
        myCollections: [...action.collections],
      };
    }
    case UserActionTypes.setSearchItems: {
      return {
        ...state,
        itemsSearch: [...action.items],
        usersSearch: null,
      };
    }
    case UserActionTypes.setSearchUsers: {
      return {
        ...state,
        usersSearch: [...action.users],
        itemsSearch: null,
      };
    }
    case UserActionTypes.setEditCollections: {
      return {
        ...state,
        listEditCollections: [...action.collections],
      };
    }
    case UserActionTypes.setDeleteCollections: {
      return {
        ...state,
        listDeleteCollections: [...action.collections],
      };
    }
    case UserActionTypes.updateEditCollections: {
      const [collection] = state.myCollections!.filter(
        (collection) => collection.id === action.collectionId,
      );

      const [isExistCollection] = state.listEditCollections.filter(
        (collection) => collection?.id === action.collectionId,
      );
      return {
        ...state,
        listEditCollections: !isExistCollection
          ? [...state.listEditCollections, collection]
          : state.listEditCollections,
        listDeleteCollections: state.listDeleteCollections.filter(
          (delCollection) => delCollection?.id !== collection.id,
        ),
      };
    }
    case UserActionTypes.pullOutCollectionAction: {
      return {
        ...state,
        listEditCollections: state.listEditCollections.filter(
          (collection) => collection?.id !== action.collectionId,
        ),
        listDeleteCollections: state.listDeleteCollections.filter(
          (collection) => collection?.id !== action.collectionId,
        ),
      };
    }
    case UserActionTypes.updateDeleteCollections: {
      const [collection] = state.myCollections!.filter(
        (collection) => collection.id === action.collectionId,
      );

      const [isExistCollection] = state.listDeleteCollections.filter(
        (collection) => collection?.id === action.collectionId,
      );

      return {
        ...state,
        listDeleteCollections: !isExistCollection
          ? [...state.listDeleteCollections, collection]
          : state.listDeleteCollections,
        listEditCollections: state.listEditCollections.filter(
          (editCollection) => editCollection?.id !== collection.id,
        ),
      };
    }
    default:
      return state;
  }
}

export default userReducer;
