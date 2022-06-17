import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/admin-reducer';

import authReducer from './reducers/auth-reducer';
import collectionReducer from './reducers/collection-reducer';
import homeReducer from './reducers/home-reducer';
import userReducer from './reducers/user-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    home: homeReducer,
    collection: collectionReducer,
    admin: adminReducer,
  },
});

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

declare global {
  interface Window {
    store: any;
  }
}
window.store = store;

export default store;
