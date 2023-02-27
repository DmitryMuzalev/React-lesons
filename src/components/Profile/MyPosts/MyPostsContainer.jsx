import React from 'react';
import {
  changeProfileInputCreator,
  createNewPostCreator,
} from '../../../redux/reducers/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

export default function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const handlerClickBtn = () => {
          store.dispatch(createNewPostCreator());
        };
        const handlerChangeValueTextarea = (text) => {
          store.dispatch(changeProfileInputCreator(text));
        };

        return (
          <MyPosts
            onHandlerClickBtn={handlerClickBtn}
            onHandlerChangeValueTextarea={handlerChangeValueTextarea}
            posts={state.profilePage.posts}
            valueInput={state.profilePage.valueInput}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
