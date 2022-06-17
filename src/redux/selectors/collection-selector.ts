import { AppStateType } from '..';
import { AllCollectionsType, CollectionInitType, ItemType } from '../../types';

export function getTargetCollection(state: AppStateType): CollectionInitType {
  return state.collection.targetCollection as CollectionInitType;
}

export function getMyCollections(
  state: AppStateType,
): Array<CollectionInitType | null> {
  return state.collection.myCollections;
}

export function getAllCollections(state: AppStateType): AllCollectionsType[] {
  return state.collection.allCollections;
}

export function getCollectionTargetItem(state: AppStateType): ItemType {
  return state.collection.targetItem as ItemType;
}
