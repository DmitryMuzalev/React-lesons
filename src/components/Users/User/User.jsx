import style from './User.module.css';
import photo from './avatar.svg';

export default function User(props) {
  const handlerCLickFollowedBtn = () => {
    props.followToggle(props.id);
  };
  return (
    <li className={style.user}>
      <a href="#user" className={style.user__photo}>
        <img src={photo} alt="user" />
      </a>
      <div className={style.user__info}>
        <a href="#user" className={style.user__name}>
          {props.name}
        </a>
        <p className={style.user__status}>
          {props.status ? props.status : 'No status'}
        </p>
      </div>
      <button className={style.fallowed__btn} onClick={handlerCLickFollowedBtn}>
        {props.followed ? 'Follow' : 'Unfollow'}
      </button>
    </li>
  );
}
