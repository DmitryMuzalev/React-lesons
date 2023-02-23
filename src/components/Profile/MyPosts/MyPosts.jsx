import React from 'react';
import {
  changeProfileInputCreator,
  createNewPostCreator,
} from '../../../redux/reducers/profileReducer';

import MyPost from './MyPost/MyPost';
import style from './MyPosts.module.css';

export default function MyPosts(props) {
  const postsHistory = props.profilePage.posts.map((post) => {
    return <MyPost id={post.id} message={post.message} like={post.like} />;
  });

  let textNewPost = React.createRef();

  const handlerClickBtn = () => {
    props.dispatch(createNewPostCreator());
  };

  const handlerChangeValueTextarea = () => {
    let text = textNewPost.current.value;
    props.dispatch(changeProfileInputCreator(text));
  };

  return (
    <section className={style.posts}>
      <h2 className={style.title}>My posts</h2>
      <div className={style.newPost}>
        <textarea
          ref={textNewPost}
          className={style.input}
          placeholder="your news..."
          value={props.profilePage.valueInput}
          onChange={handlerChangeValueTextarea}
        ></textarea>
        <button className={style.button} onClick={handlerClickBtn}>
          Send
        </button>
      </div>
      <ul className={style.list}>{postsHistory}</ul>
    </section>
  );
}
