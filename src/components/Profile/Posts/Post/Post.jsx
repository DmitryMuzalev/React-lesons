import avatar from './avatar.png';
import like from './like.svg';

import style from './Post.module.css';
export default function Post(props) {
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
