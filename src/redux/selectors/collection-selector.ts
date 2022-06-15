import { AppStateType } from '..';
import { ItemType, ThemeType } from '../../types';

export function getCollectionId(state: AppStateType): string {
  return state.collection.id;
}

export function getCollectionTitle(state: AppStateType): string {
  return state.collection.title;
}

export function getCollectionIcon(state: AppStateType): string {
  return state.collection.icon;
}

export function getCollectionDescription(state: AppStateType): string {
  return state.collection.description;
}

export function getCollectionTheme(state: AppStateType): ThemeType {
  return state.collection.theme;
}

export function getCollectionMeta(state: AppStateType): {
  createAt: string;
  updateAt: string;
} {
  return state.collection.meta;
}

export function getCollectionList(state: AppStateType): ItemType[] {
  return state.collection.list;
}

export function getCollectionTargetItem(state: AppStateType): ItemType | null {
  return state.collection.targetItem;
}
