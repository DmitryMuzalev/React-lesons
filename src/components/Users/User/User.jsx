import style from './User.module.css';
import photo from './avatar.svg';

export default function User(props) {
  return (
    <li className={style.user}>
      <a href="#user" className={style.user__photo}>
        <img src={photo} alt="user" />
      </a>
      <div className={style.user__info}>
        <a href="#user" className={style.user__name}>
          Liza Jonson
        </a>
        <p className={style.user__location}>Moscow / Russia</p>
        <p className={style.user__status}>"Morning person or night owl?</p>
      </div>
      <button className={style.fallowed__btn}>Follow</button>
    </li>
  );
}
