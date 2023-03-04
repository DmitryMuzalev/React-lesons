import React from 'react';
import style from './SearchMusic.module.css';
import searchIcon from './search.svg';

let searchInput = React.createRef();

export default function SearchMusic(props) {
  const handlerSearchInput = () => {
    const text = searchInput.current.value;
    props.changeSearchField(text);
  };

  const handlerSearchBtn = () => {
    props.search();
  };
  return (
    <div className={style.search}>
      <input
        type="text"
        className={style.search__input}
        onChange={handlerSearchInput}
        ref={searchInput}
        value={props.valueInput}
        placeholder="Audio search..."
      />
      <button className={style.search__btn} onClick={handlerSearchBtn}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}
