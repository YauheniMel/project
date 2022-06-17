import { AppStateType } from '..';
import { CollectionInitType, ItemType } from '../../types';

export function getCollections(state: AppStateType): CollectionInitType[] {
  return state.home.collections;
}

export function getItems(state: AppStateType): ItemType[] {
  return state.home.list;
}
