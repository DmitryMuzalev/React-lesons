import avatar from './avatar.svg';
import style from './PersonItem.module.css';
import { NavLink } from 'react-router-dom';

export default function PersonItem(props) {
  return (
    <li>
      <NavLink className={style.person} to={'/messages/' + props.id}>
        <img className={style.person__avatar} src={avatar} alt="avatar" />
        <p className={style.person__name}>{props.name}</p>
      </NavLink>
    </li>
  );
}
