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
  count_like: number;
  meta: {
    createAt: string;
    updateAt: string;
  };
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
  email: string;
  status: 'active' | 'blocked';
  isOnline: boolean;
  meta: {
    login_date: string;
    register_date: string;
  };
  collections: CollectionType[];
}
