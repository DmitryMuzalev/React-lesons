import Post from './Post/Post';
import style from './Posts.module.css';

export default function Posts() {
  return (
    <section className={style.posts}>
      <h2 className={style.title}>My posts</h2>
      <div className={style.newPost}>
        <textarea className={style.input} placeholder="your news..."></textarea>
        <button className={style.button}>Send</button>
        <ul className={style.list}>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
        </ul>
      </div>
    </section>
  );
}
