import { combineReducers, legacy_createStore } from 'redux';

import profileReducer from '../redux/reducers/profileReducer';
import messagesReducer from '../redux/reducers/messagesReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
});

let store = legacy_createStore(reducers);

export default store;
