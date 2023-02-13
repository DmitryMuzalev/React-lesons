import style from './Profile.module.css';
import Posts from './Posts/Posts';

export default function Profile() {
  return (
    <div className={style.content}>
      <div className={style.banner}></div>
      <Posts />
    </div>
  );
}
