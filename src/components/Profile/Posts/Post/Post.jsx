import avatar from './avatar.png';
import style from './Post.module.css';
export default function Post() {
  return (
    <div className={style.post}>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
