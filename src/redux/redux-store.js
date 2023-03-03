import { combineReducers, legacy_createStore } from 'redux';

import profileReducer from '../redux/reducers/profileReducer';
import messagesReducer from '../redux/reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';
import musicReducer from './reducers/musicReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
