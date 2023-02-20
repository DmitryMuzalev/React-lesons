import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';

export default function Profile(props) {
  return (
    <div>
      <div className={style.banner}></div>
      <MyInfo />
      <MyPosts
        posts={props.profilePage.posts}
        createNewPost={props.createNewPost}
      />
    </div>
  );
}
