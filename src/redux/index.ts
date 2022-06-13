import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './reducers/auth-reducer';
import collectionsReducer from './reducers/collections-reducer';
import userReducer from './reducers/user-reducer';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  collections: collectionsReducer,
});

const store = createStore(reducer);

declare global {
  interface Window {
    store: any;
  }
}
window.store = store;
export default store;
