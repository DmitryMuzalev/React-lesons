import React from 'react';
import {
  changeProfileInputCreator,
  createNewPostCreator,
} from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

export default function MyPostsContainer(props) {
  const state = props.store.getState();

  const handlerClickBtn = () => {
    props.store.dispatch(createNewPostCreator());
  };

  const handlerChangeValueTextarea = (text) => {
    props.store.dispatch(changeProfileInputCreator(text));
  };

  return (
    <MyPosts
      onHandlerClickBtn={handlerClickBtn}
      onHandlerChangeValueTextarea={handlerChangeValueTextarea}
      posts={state.profilePage.posts}
      valueInput={state.profilePage.valueInput}
    />
  );
}
