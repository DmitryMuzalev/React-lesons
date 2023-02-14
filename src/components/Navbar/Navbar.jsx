import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const setActive = ({ isActive }) => (isActive ? style.active : style.link);

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <NavLink className={setActive} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/messages">
            Message
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="/setting">
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
