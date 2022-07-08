import { AnyAction } from 'redux';
import { CollectionsPageType, CollectionType } from '../../types';
import { CollectionsActionTypes } from '../actions/collections-action';

const initState: CollectionsPageType = {
  allCollections: null,
  targetCollections: null,
  isLoading: false,
};

function collectionsReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case CollectionsActionTypes.setAllCollections: {
      const allCollections = action.users.map((user: any) => ({
        id: user.id,
        name: user.name,
        surname: user.surname,
        collections: user.collections,
      }));

      return {
        ...state,
        allCollections: allCollections ? [...allCollections] : null,
      };
    }
    case CollectionsActionTypes.setIsLoading: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case CollectionsActionTypes.setTargetCollections: {
      const data = action.user;
      return {
        ...state,
        targetCollections: data ? { ...data } : null,
      };
    }
    case CollectionsActionTypes.setAllUserCollections: {
      const allCollections = state.allCollections.map(
        (
          user: {
            id: string;
            name: string;
            surname: string;
            collections: CollectionType[] | null;
          } | null,
        ) => {
          if (user && user.id === action.user.id) {
            user.collections = [...action.user.collections];

            return user;
          }

          return user;
        },
      );
      return {
        ...state,
        allCollections: [...allCollections],
      };
    }
    case CollectionsActionTypes.clearCollectionsState: {
      return {
        ...state,
        allCollections: null,
        targetCollections: null,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export default collectionsReducer;
