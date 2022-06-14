import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth-reducer';
import collectionReducer from './reducers/collection-reducer';
import userReducer from './reducers/user-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    collection: collectionReducer,
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
