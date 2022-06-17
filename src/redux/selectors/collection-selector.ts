import { AppStateType } from '..';
import { CollectionInitType, ItemType } from '../../types';

export function getTargetCollection(state: AppStateType): CollectionInitType {
  return state.collection.targetCollection as CollectionInitType;
}

export function getCollectionTargetItem(state: AppStateType): ItemType | null {
  return state.collection.targetItem;
}
