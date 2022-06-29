import axios from 'axios';
import type { CredentialsType } from '../redux/actions/auth-action';

const baseUrl = '';

export const API = {
  SignUpUser: `${baseUrl}/api/signUpUser`,
  LoginUser: `${baseUrl}/api/loginUser`,
  LogOutUser: `${baseUrl}/api/logOutUser`,
  GetUserInfo: `${baseUrl}/api/getUserInfo`,
  CreateCollection: `${baseUrl}/api/createCollection`,
  GetMyCollections: `${baseUrl}/api/getMyCollections`,
  GetAllCollections: `${baseUrl}/api/getAllCollections`,
  GetUserCollections: `${baseUrl}/api/getUserCollections`,
  CreateItem: `${baseUrl}/api/createItem`,
  DeleteCollection: `${baseUrl}/api/deleteCollection`,
  DeleteItem: `${baseUrl}/api/deleteItem`,
  GetCollection: `${baseUrl}/api/getCollection`,
  GetItem: `${baseUrl}/api/getItem`,
  GetCollectionItems: `${baseUrl}/api/getCollectionItems`,
  GetBigCollections: `${baseUrl}/api/getBigCollections`,
  GetLastAddItems: `${baseUrl}/api/getLastAddItems`,
  SetEditCollection: `${baseUrl}/api/setEditCollection`,
  SetDeleteCollection: `${baseUrl}/api/setDeleteCollection`,
  GetEditCollections: `${baseUrl}/api/getEditCollections`,
  GetDeleteCollections: `${baseUrl}/api/getDeleteCollections`,
  SetEditItems: `${baseUrl}/api/setEditItems`,
  GetEditItems: `${baseUrl}/api/getEditItems`,
  SetDeleteItems: `${baseUrl}/api/setDeleteItems`,
  GetDeleteItems: `${baseUrl}/api/getDeleteItems`,
  UpdateCollection: `${baseUrl}/api/updateCollection`,
  UpdateItem: `${baseUrl}/api/updateItem`,
  PullOutCollection: `${baseUrl}/api/pullOutCollection`,
  PullOutItem: `${baseUrl}/api/pullOutItem`,
  GetTargetUser: `${baseUrl}/api/getTargetUser`,
  Search: `${baseUrl}/api/search`,
};

export const requestAPI = {
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
  logOutUser(userId: string) {
    return axios
      .post(API.LogOutUser, {
        id: userId,
      })
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
  getBigCollections() {
    return axios
      .get(API.GetBigCollections)
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
