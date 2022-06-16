import { AppStateType } from '..';
import { ItemType } from '../../types';

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

export function getCollectionTheme(state: AppStateType): string {
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

export function getCollectionNumberFields(
  state: AppStateType,
): string[] | null {
  return state.collection.numberKeys;
}

export function getCollectionDateFields(state: AppStateType): string[] | null {
  return state.collection.dateKeys;
}

export function getCollectionMultiLineFields(
  state: AppStateType,
): string[] | null {
  return state.collection.multiLineKeys;
}

export function getCollectionTextsFields(state: AppStateType): string[] | null {
  return state.collection.textKeys;
}

export function getCollectionCheckboxFields(
  state: AppStateType,
): { field: string; count: number; values: string[] }[] | null {
  return state.collection.checkboxKeys;
}
