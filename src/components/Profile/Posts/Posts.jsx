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
            <Post
              message="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Elit eget gravida cum sociis natoque penatibus et magnis."
              like="5"
            />
          </li>
          <li>
            <Post
              message="Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Augue eget arcu dictum varius duis at consectetur."
              like="8"
            />
          </li>
          <li>
            <Post
              message="Sed enim ut sem viverra aliquet eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque."
              like="9"
            />
          </li>
          <li>
            <Post
              message="Leo integer malesuada nunc vel risus commodo viverra maecenas."
              like="12"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
