import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const setActive = ({ isActive }) => ({ color: isActive ? 'black' : 'white' });

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <NavLink className={style.link} style={setActive} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} style={setActive} to="/messages">
            Message
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} style={setActive} to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} style={setActive} to="/music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} style={setActive} to="/setting">
            Setting
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} style={setActive} to="/users">
            Find users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
