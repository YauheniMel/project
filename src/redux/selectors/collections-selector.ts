import { AppStateType } from '..';
import { CollectionType } from '../../types';

export function getAllCollectionsSelector(state: AppStateType):
| {
  id: number;
  name: string;
  surname: string;
  collections: CollectionType[] | null;
}[]
| null {
  return state.collections.allCollections;
}

export function getTargetCollectionsSelector(
  state: AppStateType,
): CollectionType[] | null {
  return state.collections.targetCollections;
}

export function getIsLoading(state: AppStateType): boolean {
  return state.collections.isLoading;
}
