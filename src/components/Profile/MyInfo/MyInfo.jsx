import style from './MyInfo.module.css';
import avatar from './avatar.svg';

export default function MyInfo() {
  return (
    <div className={style.profile}>
      <div className={style.profile__avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={style.profile__info}>
        <p className={style.profile__name}>Benjamin</p>
        <ul className={style.profile__data}>
          <li>
            <p>
              Date of Birth: <span>12.05.1998</span>
            </p>
          </li>
          <li>
            <p>
              City: <span>London</span>
            </p>
          </li>
          <li>
            <p>
              Education: <span>LSDM</span>
            </p>
          </li>
          <li>
            <p>
              Web Site: <span>http://benjaminstore.net/</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
