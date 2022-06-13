import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './reducers/auth-reducer';
import userReducer from './reducers/user-reducer';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(reducer);

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

declare global {
  interface Window {
    store: any;
  }
}
window.store = store;
export default store;
