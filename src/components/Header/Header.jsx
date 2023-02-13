import logo from './logo.svg';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="Logo" />
    </header>
  );
}
