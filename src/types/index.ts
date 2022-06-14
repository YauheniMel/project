export interface AuthType {
  isAuth: boolean;
  isLoading: boolean;
}

export interface CommentType {
  name: string;
  surname: string;
  createAt: string;
  content: string;
  comments: Array<CommentType | null>;
}

export interface ItemType {
  id: string;
  title: string;
  tags: Array<string | null>;
  countLike: number;
  meta: {
    createAt: string;
    updateAt: string;
  };
  customField: {
    [type: string]: string | number | boolean;
  } | null;
  comments: Array<CommentType | null>;
}

export interface CollectionType {
  id: string;
  title: string;
  icon: string;
  description: string;
  theme: string;
  meta: {
    createAt: string;
    updateAt: string;
  };
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
  collections: CollectionType[];
  list: ItemType[];
}
