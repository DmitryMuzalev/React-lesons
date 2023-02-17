import MyPost from './MyPost/MyPost';
import style from './MyPosts.module.css';

export default function MyPosts(props) {
  const postsHistory = props.postsData.map((post) => {
    return <MyPost id={post.id} message={post.message} like={post.like} />;
  });

  return (
    <section className={style.posts}>
      <h2 className={style.title}>My posts</h2>
      <div className={style.newPost}>
        <textarea className={style.input} placeholder="your news..."></textarea>
        <button className={style.button}>Send</button>
      </div>
      <ul className={style.list}>{postsHistory}</ul>
    </section>
  );
}
