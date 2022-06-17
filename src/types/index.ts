export interface AuthType {
  isAuth: boolean;
  isLoading: boolean;
}

export interface CommentType {
  name: string;
  surname: string;
  createAt: string;
  content: string;
  state: 'touched' | 'untouched';
  comments: Array<CommentType | null>;
}

export interface ItemType {
  id: string;
  title: string;
  tags: Array<string | null>;
  countLike: Array<string | null>;
  meta: {
    createAt: string;
    updateAt: string;
  };
  comments: Array<CommentType | null>;
  dateValues: null | { [key: string]: string };
  multiLineValues: null | { [key: string]: string };
  numberValues: null | { [key: string]: number };
  textValues: null | { [key: string]: string };
  checkboxValues: null | { [key: string]: string };
}
export interface CollectionInitType {
  id: string;
  title: string;
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

export interface CollectionType extends CollectionInitType {
  targetItem: ItemType | null;
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
  theme: 'light' | 'dark';
  email: string;
  status: 'active' | 'blocked';
  isOnline: boolean;
  meta: {
    loginDate: string;
    registerDate: string;
  };
  collections: CollectionInitType[];
}
