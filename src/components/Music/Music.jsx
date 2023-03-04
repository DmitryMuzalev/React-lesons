import style from './Music.module.css';
import SearchMusic from './SearchMusic/SearchMusic';
import Song from './Song/Song';

export default function Music(props) {
  const playList = props.songs.map((s) => {
    return (
      <Song
        key={s.id}
        id={s.id}
        singer={s.singer}
        song={s.song}
        duration={s.duration}
        play={s.play}
      />
    );
  });
  return (
    <div className={style.music}>
      <h2 className={style.title}>Music</h2>
      <SearchMusic />
      <ul className={style.music__list}>{playList}</ul>
    </div>
  );
}
