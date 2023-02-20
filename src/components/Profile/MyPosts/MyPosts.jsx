import React from 'react';
import MyPost from './MyPost/MyPost';
import style from './MyPosts.module.css';

export default function MyPosts(props) {
  const postsHistory = props.posts.map((post) => {
    return <MyPost id={post.id} message={post.message} like={post.like} />;
  });

  let textNewPost = React.createRef();

  const handlerClickBtn = () => {
    let text = textNewPost.current.value;
    textNewPost.current.value = '';
    props.createNewPost(text);
  };

  return (
    <section className={style.posts}>
      <h2 className={style.title}>My posts</h2>
      <div className={style.newPost}>
        <textarea
          ref={textNewPost}
          className={style.input}
          placeholder="your news..."
        ></textarea>
        <button className={style.button} onClick={handlerClickBtn}>
          Send
        </button>
      </div>
      <ul className={style.list}>{postsHistory}</ul>
    </section>
  );
}
