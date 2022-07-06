import axios from 'axios';
import type { CredentialsType } from '../redux/actions/auth-action';

export const API = {
  SignUpUser: '/api/signUpUser',
  LoginUser: '/api/loginUser',
  LogOutUser: '/api/logOutUser',
  GetUserInfo: '/api/getUserInfo',
  CreateCollection: '/api/createCollection',
  GetMyCollections: '/api/getMyCollections',
  GetAllCollections: '/api/getAllCollections',
  GetUserCollections: '/api/getUserCollections',
  CreateItem: '/api/createItem',
  DeleteCollection: '/api/deleteCollection',
  DeleteItem: '/api/deleteItem',
  GetCollection: '/api/getCollection',
  GetItem: '/api/getItem',
  GetCollectionItems: '/api/getCollectionItems',
  GetBigCollections: '/api/getBigCollections',
  GetLastAddItems: '/api/getLastAddItems',
  SetEditCollection: '/api/setEditCollection',
  SetDeleteCollection: '/api/setDeleteCollection',
  GetEditCollections: '/api/getEditCollections',
  GetDeleteCollections: '/api/getDeleteCollections',
  SetEditItems: '/api/setEditItems',
  GetEditItems: '/api/getEditItems',
  SetDeleteItems: '/api/setDeleteItems',
  GetDeleteItems: '/api/getDeleteItems',
  UpdateCollection: '/api/updateCollection',
  UpdateItem: '/api/updateItem',
  PullOutCollection: '/api/pullOutCollection',
  PullOutItem: '/api/pullOutItem',
  GetTargetUser: '/api/getTargetUser',
  GetTargetCollections: '/api/getTargetCollections',
  Search: '/api/search',
  GetThemes: '/api/getThemes',
  ToogleLike: '/api/toogleLike',
  SearchMatchTag: '/api/searchMatchTag',
  GetAllTags: '/api/getAllTags',
  SearchItemsByTag: '/api/searchItemsByTag',
  FilterContains: '/api/filterContains',
  FilterStartsWithThunk: '/api/filterStartsWith',
  FilterEqualsThunk: '/api/filterEqualsThunk',
  FilterExistTag: '/api/filterExistTag',
  FilterIsEmpty: '/api/filterIsEmpty',
  FilterIsNotEmpty: '/api/filterIsNotEmpty',
  FilterMoreThan: '/api/filterMoreThan',
  FilterLessThan: '/api/filterLessThan',
  GetAllUsers: '/api/getAllUsers',
  BlockUser: '/api/blockUser',
  UnblockUser: '/api/unblockUser',
  DeleteUser: '/api/deleteUser',
  SetIsAdmin: '/api/setIsAdmin',
  SetIsNotAdmin: '/api/setIsNotAdmin',
  GetAllComments: '/api/getAllComments',
  LeaveComment: '/api/leaveComment',
  SetCommentsTouched: '/api/setCommentsTouched',
  GetAllUntouchedComments: '/api/getAllUntouchedComments',
};

export const requestAPI = {
  getThemes() {
    return axios
      .get(API.GetThemes)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getAllUntouchedComments(userId: number) {
    return axios
      .get(API.GetAllUntouchedComments, { params: { userId } })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setCommentsTouched(itemId: number) {
    return axios
      .put(API.SetCommentsTouched, { itemId })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  leaveComment(content: string, userId: number, itemId: number) {
    return axios
      .post(API.LeaveComment, { content, userId, itemId })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getAllComments(itemId: number) {
    return axios
      .get(API.GetAllComments, {
        params: {
          itemId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterContains(collectionId: number, column: string, str: string) {
    return axios
      .get(API.FilterContains, {
        params: {
          column,
          str,
          collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterMoreThan(collectionId: number, column: string, num: string) {
    return axios
      .get(API.FilterMoreThan, {
        params: {
          column,
          num,
          collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterLessThan(collectionId: number, column: string, num: string) {
    return axios
      .get(API.FilterLessThan, {
        params: {
          column,
          num,
          collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterExistTag(collectionId: number, str: string) {
    return axios
      .get(API.FilterExistTag, {
        params: {
          str,
          collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterIsEmpty(collectionId: number, column: string) {
    return axios
      .get(API.FilterIsEmpty, {
        params: {
          collectionId,
          column,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterIsNotEmpty(collectionId: number, column: string) {
    return axios
      .get(API.FilterIsNotEmpty, {
        params: {
          collectionId,
          column,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterStartsWithThunk(collectionId: number, column: string, str: string) {
    return axios
      .get(API.FilterStartsWithThunk, {
        params: {
          column,
          str,
          collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  filterEqualsThunk(collectionId: number, column: string, str: string) {
    return axios
      .get(API.FilterEqualsThunk, {
        params: {
          column,
          str,
          collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  signUpUser(credentials: CredentialsType) {
    return axios
      .post(API.SignUpUser, credentials)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  loginUser(userId: string) {
    return axios
      .post(API.LoginUser, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  deleteUser(userId: number) {
    return axios
      .post(API.DeleteUser, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  blockUser(userId: number) {
    return axios
      .post(API.BlockUser, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setIsAdmin(userId: number) {
    return axios
      .post(API.SetIsAdmin, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setIsNotAdmin(userId: number) {
    return axios
      .post(API.SetIsNotAdmin, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  unblockUser(userId: number) {
    return axios
      .post(API.UnblockUser, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  logOutUser(userId: string) {
    return axios
      .post(API.LogOutUser, {
        id: userId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  toogleLike(userId: number, itemId: number) {
    return axios
      .post(API.ToogleLike, {
        userId,
        itemId,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  searchMatchTag(tag: string) {
    return axios
      .get(API.SearchMatchTag, {
        params: { tag },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getAllTags() {
    return axios
      .get(API.GetAllTags)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getAllUsers() {
    return axios
      .get(API.GetAllUsers)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getUserInfo(payload: CredentialsType) {
    return axios
      .get(API.GetUserInfo, {
        params: payload,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  search(substr: string) {
    return axios
      .get(API.Search, {
        params: { substr },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getMyCollections(userId: number, page: number) {
    return axios
      .get(API.GetMyCollections, {
        params: { userId, page },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getUserCollections(userId: number, page: number) {
    return axios
      .get(API.GetUserCollections, {
        params: { userId, page },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getTargetCollections(userId: number | string, page: number) {
    return axios
      .get(API.GetTargetCollections, {
        params: { userId, page },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getBigCollections() {
    return axios
      .get(API.GetBigCollections)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  searchItemsByTag(tag: string) {
    return axios
      .get(API.SearchItemsByTag, {
        params: { tag },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getLastAddItems() {
    return axios
      .get(API.GetLastAddItems)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getAllCollections(userId: number) {
    return axios
      .get(API.GetAllCollections, {
        params: { userId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getCollectionItems(collectionId: number) {
    return axios
      .get(API.GetCollectionItems, {
        params: { collectionId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getCollection(collectionId: number) {
    return axios
      .get(API.GetCollection, {
        params: { collectionId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getItem(itemId: number, collectionId: number) {
    return axios
      .get(API.GetItem, {
        params: { itemId, collectionId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  createCollection(collectionInfo: any) {
    const formData = new FormData();

    // need to find another way
    Object.keys(collectionInfo).forEach((key: string) => {
      if (key === 'checkboxKeys') {
        formData.append(key, JSON.stringify(collectionInfo[key]));
        return;
      }
      formData.append(key, collectionInfo[key]);
    });
    return axios
      .post(API.CreateCollection, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  createItem(itemInfo: any) {
    const formData = new FormData();

    // need to find another way
    Object.keys(itemInfo).forEach((key: string) => formData.append(key, itemInfo[key]));

    return axios
      .post(API.CreateItem, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  deleteCollection(collectionId: number) {
    return axios
      .delete(API.DeleteCollection, {
        params: {
          id: collectionId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  deleteItem(itemId: number) {
    return axios
      .delete(API.DeleteItem, {
        params: {
          itemId,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setEditCollection(collectionId: number) {
    return axios
      .put(API.SetEditCollection, { collectionId })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setEditItems(itemIds: number[]) {
    return axios
      .put(API.SetEditItems, itemIds)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getEditItems(collectionId: number) {
    return axios
      .get(API.GetEditItems, {
        params: { collectionId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getTargetUser(userId: number) {
    return axios
      .get(API.GetTargetUser, {
        params: { userId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getEditCollections(userId: string) {
    return axios
      .get(API.GetEditCollections, {
        params: { userId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setDeleteCollection(collectionId: number) {
    return axios
      .put(API.SetDeleteCollection, { collectionId })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  setDeleteItems(itemIds: number[]) {
    return axios
      .put(API.SetDeleteItems, itemIds)
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getDeleteItems(collectionId: number) {
    return axios
      .get(API.GetDeleteItems, {
        params: { collectionId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  getDeleteCollections(userId: string) {
    return axios
      .get(API.GetDeleteCollections, {
        params: { userId },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  pullOutItem(itemId: number) {
    return axios
      .put(API.PullOutItem, { itemId })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  pullOutCollection(collectionId: number) {
    return axios
      .put(API.PullOutCollection, { collectionId })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  updateCollection(collectionInfo: any) {
    const formData = new FormData();

    // need to find another way
    Object.keys(collectionInfo).forEach((key: string) => formData.append(key, collectionInfo[key]));

    return axios
      .put(API.UpdateCollection, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
  updateItem(itemInfo: any) {
    const formData = new FormData();

    // need to find another way
    Object.keys(itemInfo).forEach((key: string) => formData.append(key, itemInfo[key]));

    return axios
      .put(API.UpdateItem, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  },
};
