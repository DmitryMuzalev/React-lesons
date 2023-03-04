import style from './SearchMusic.module.css';
import searchIcon from './search.svg';

export default function SearchMusic(props) {
  return (
    <div className={style.search}>
      <input type="text" className={style.search__input} />
      <button className={style.search__btn}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}
