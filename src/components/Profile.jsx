import style from './Profile.module.css';

export default function Profile() {
  return (
    <div className={style.content}>
      <div className={style.banner}></div>
      <p>Main content</p>
    </div>
  );
}
