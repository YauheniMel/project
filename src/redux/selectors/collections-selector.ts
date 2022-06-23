import { AppStateType } from '..';
import { CollectionType } from '../../types';

export function getMyCollectionsSelector(
  state: AppStateType,
): CollectionType[] | null {
  return state.collections.myCollections;
}

export function getAllCollectionsSelector(
  state: AppStateType,
): CollectionType[] | null {
  return state.collections.allCollections;
}
