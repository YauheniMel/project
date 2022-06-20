export interface AuthType {
  isAuth: boolean;
  isLoading: boolean;
}

export interface CommentType {
  user: {
    id: string;
    name: string;
    surname: string;
  };
  createAt: string;
  content: string;
  state: 'touched' | 'untouched';
  comments: null | CommentType[];
}
export interface ItemType {
  user: {
    id: string;
    name: string;
    surname: string;
  };
  id: string;
  title: string;
  tags: string[] | null;
  countLike: string[] | null;
  collection: {
    id: string;
    theme: string;
    title: string;
  };
  meta: {
    createAt: string;
    updateAt: string;
  };
  comments: CommentType[] | null;
  dateValues: null | { [key: string]: string };
  multiLineValues: null | { [key: string]: string };
  numberValues: null | { [key: string]: number };
  textValues: null | { [key: string]: string };
  checkboxValues: null | { [key: string]: string };
}
export interface CollectionInitType {
  id: string;
  title: string;
  user: {
    id: string;
    name: string;
    surname: string;
  };
  icon: string;
  description: string;
  theme: string;
  meta: {
    createAt: string;
    updateAt: string;
  };
  dateKeys: null | string[];
  multiLineKeys: null | string[];
  numberKeys: null | string[];
  textKeys: null | string[];
  checkboxKeys: null | { field: string; count: number; values: string[] }[];
  list: ItemType[];
}

export interface AllCollectionsType {
  collections: CollectionInitType[];
  user: {
    name: string;
    surname: string;
    id: string;
  };
}
export interface CollectionType {
  targetItem: ItemType | null;
  targetCollection: CollectionInitType | null;
  allCollections: AllCollectionsType[];
  myCollections: CollectionInitType[] | null;
}

export interface HomePageType {
  collections: CollectionInitType[];
  list: ItemType[];
}

export interface UserType {
  id: string;
  isAdmin: boolean;
  name: string;
  surname: string;
  theme?: 'light' | 'dark';
  status: 'active' | 'blocked';
  isOnline: boolean;
  meta: {
    loginDate: string;
    registerDate: string;
  };
}

export interface AdminType {
  users: UserType[];
  targetUser: UserType | null;
  targetCollections: CollectionInitType[] | null;
}

export interface UserPersonalInfoType {
  id: string;
  name: string;
  surname: string;
}
