import MyPost from './MyPost/MyPost';
import style from './MyPosts.module.css';

export default function MyPosts() {
  const postsData = [
    {
      id: '1',
      message:
        'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Elit eget gravida cum sociis natoque penatibus et magnis.',
      like: '5',
    },
    {
      id: '2',
      message:
        'Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Augue eget arcu dictum varius duis at consectetur.',
      like: '13',
    },
    {
      id: '3',
      message:
        'Sed enim ut sem viverra aliquet eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.',
      like: '20',
    },
    {
      id: '4',
      message: 'Leo integer malesuada nunc vel risus commodo viverra maecenas.',
      like: '17',
    },
  ];

  const postsHistory = postsData.map((post) => {
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
