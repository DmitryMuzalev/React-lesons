import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <a className={style.link} href="#link">
            Profile
          </a>
        </li>
        <li>
          <a className={style.link} href="#link">
            Message
          </a>
        </li>
        <li>
          <a className={style.link} href="#link">
            News
          </a>
        </li>
        <li>
          <a className={style.link} href="#link">
            Music
          </a>
        </li>
        <li>
          <a className={style.link} href="#link">
            Setting
          </a>
        </li>
      </ul>
    </nav>
  );
}
