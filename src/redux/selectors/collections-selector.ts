import { AppStateType } from '..';
import { CollectionType } from '../../types';

export default function getAllCollectionsSelector(state: AppStateType):
| {
  id: number;
  name: string;
  surname: string;
  collections: CollectionType[] | null;
}[]
| null {
  return state.collections.allCollections;
}
