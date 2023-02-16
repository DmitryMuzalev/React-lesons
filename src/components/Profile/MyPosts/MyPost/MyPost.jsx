import avatar from './avatar.svg';
import like from './like.svg';

import style from './MyPost.module.css';
export default function MyPost(props) {
  return (
    <div className={style.post}>
      <div className={style.post__body}>
        <img className={style.avatar} src={avatar} alt="avatar" />
        <p className={style.text}>{props.message}</p>
      </div>
      <div className={style.post__like}>
        <img src={like} alt="Like" />: <span>{props.like}</span>
      </div>
    </div>
  );
}
