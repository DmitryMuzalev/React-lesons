import style from './Profile.module.css';
import MyInfo from './MyInfo/MyInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export default function Profile(props) {
  return (
    <div>
      <div className={style.banner}></div>
      <MyInfo />
      <MyPostsContainer />
    </div>
  );
}
