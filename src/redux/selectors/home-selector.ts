import { AppStateType } from '..';
import { CollectionType, ItemType } from '../../types';

export function getCollectionsSelector(
  state: AppStateType,
): CollectionType[] | null {
  return state.home.collections;
}

export function getItemsSelector(state: AppStateType): ItemType[] | null {
  return state.home.list;
}
