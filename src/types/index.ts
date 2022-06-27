export interface AuthType {
  isAuth: boolean;
  isLoading: boolean;
}

export interface CommentType {
  user: {
    id: number;
    name: string;
    surname: string;
  };
  createAt: string;
  content: string;
  state: 'touched' | 'untouched';
  comments: null | CommentType[];
}
export interface ItemInitType {
  collectionId: number;
  title: string;
  tags: string;
  countLike: string[] | null;
  icon: any;
  comments: CommentType[] | null;
  dateValue1?: string;
  dateValue2?: string;
  dateValue3?: string;
  multiLineValue1?: string;
  multiLineValue2?: string;
  multiLineValue3?: string;
  numberValue1?: string;
  numberValue2?: string;
  numberValue3?: string;
  textValue1?: string;
  textValue2?: string;
  textValue3?: string;
  checkboxValues1?: string;
  checkboxValues2?: string;
  checkboxValues3?: string;
}
export interface ItemType {
  id: number;
  title: string;
  tags: string;
  countLike: string[] | null;
  icon: any;
  isEdit: boolean;
  isDelete: boolean;
  collectionId?: string;
  comments: CommentType[] | null;
  dateValue1?: string;
  dateValue2?: string;
  dateValue3?: string;
  multiLineValue1?: string;
  multiLineValue2?: string;
  multiLineValue3?: string;
  numberValue1?: string;
  numberValue2?: string;
  numberValue3?: string;
  textValue1?: string;
  textValue2?: string;
  textValue3?: string;
  checkboxValues1?: string;
  checkboxValues2?: string;
  checkboxValues3?: string;
  createdAt: string;
  updatedAt: string;
}
export interface CollectionInitType {
  userId: string;
  theme: string;
  icon: any;
  description: string;
  dateKeys: null | string[];
  multiLineKeys: null | string[];
  numberKeys: null | string[];
  textKeys: null | string[];
  checkboxKeys: null | { [keys: string]: string }[];
}

export interface CollectionType {
  id: number | null;
  icon: any;
  description: string | null;
  theme: string | null;
  allFields: string[];
  isEdit: boolean;
  isDelete: boolean;
  customFields: any;
  createdAt: string | null;
  updatedAt: string | null;
  list: ItemType[] | null;
  dateKey1: string | null;
  dateKey2: string | null;
  dateKey3: string | null;
  multiLineKey1: string | null;
  multiLineKey2: string | null;
  multiLineKey3: string | null;
  numberKey1: string | null;
  numberKey2: string | null;
  numberKey3: string | null;
  textKey1: string | null;
  textKey2: string | null;
  textKey3: string | null;
  checkboxKey1: string | null;
  checkboxKey2: string | null;
  checkboxKey3: string | null;
  targetItem: ItemType | null;
  listEditItems: Array<ItemType | null>;
  listDeleteItems: Array<ItemType | null>;
  userId: number | null;
}

export interface CollectionsPageType {
  allCollections: CollectionType[] | null;
  myCollections: CollectionType[] | null;
}

export interface HomePageType {
  collections: CollectionType[] | null;
  list: ItemType[] | null;
}

export interface UserType {
  id: number | null;
  userId: null | string;
  isAdmin: boolean;
  name: string | null;
  surname: string | null;
  theme?: 'light' | 'dark';
  status: 'active' | 'blocked';
  isOnline: boolean;
  createdAt: null | string;
  updatedAt: null | string;
}

export interface UserPageType {
  id: number | null;
  userId: null | string;
  isAdmin: boolean;
  name: string | null;
  surname: string | null;
  theme?: 'light' | 'dark';
  status: 'active' | 'blocked';
  isOnline: boolean;
  createdAt: null | string;
  updatedAt: null | string;
  myCollections: null | CollectionType[];
  listEditCollections: Array<CollectionType | null>;
  listDeleteCollections: Array<CollectionType | null>;
}

export interface TargetUserType {
  id: number;
  userId: string;
  isAdmin: boolean;
  name: string;
  surname: string;
  theme?: 'light' | 'dark';
  status: 'active' | 'blocked';
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AdminType {
  users: UserType[] | null;
  targetUser: UserType | null;
  targetCollections: CollectionType[] | null;
}

export interface UserPersonalInfoType {
  id: number;
  name: string;
  surname: string;
}
