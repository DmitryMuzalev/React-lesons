import style from './User.module.css';
import photo from './avatar.svg';

export default function User(props) {
  console.log(props);
  return (
    <li className={style.user}>
      <a href="#user" className={style.user__photo}>
        <img src={photo} alt="user" />
      </a>
      <div className={style.user__info}>
        <a href="#user" className={style.user__name}>
          {props.name}
        </a>
        <p className={style.user__location}>
          {props.location.city} / {props.location.country}/
        </p>
        <p className={style.user__status}>{props.status}</p>
      </div>
      <button
        className={style.fallowed__btn}
        //! onClick={props.followToggle(props.id)}
      >
        {props.followed ? 'Follow' : 'Unfollow'}
      </button>
    </li>
  );
}
