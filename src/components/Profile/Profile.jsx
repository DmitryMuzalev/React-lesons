import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';

export default function Profile() {
  return (
    <div>
      <div className={style.banner}></div>
      <MyInfo />
      <MyPosts />
    </div>
  );
}
