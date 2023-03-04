import style from './Music.module.css';
import SearchMusic from './SearchMusic/SearchMusic';
import Song from './Song/Song';

export default function Music(props) {
  if (!props.songs.length) {
    const newSongs = [
      {
        id: 1,
        singer: 'Queen',
        song: 'We Will Rock You',
        duration: '2:01',
        play: false,
      },
      {
        id: 2,
        singer: 'The Beatles',
        song: 'Help!',
        duration: '2:20',
        play: false,
      },
      {
        id: 3,
        singer: 'Bob Marley',
        song: 'No Woman, No Cry',
        duration: '3:36',
        play: false,
      },
      {
        id: 4,
        singer: 'Linkin Park',
        song: 'Numb',
        duration: '3:07',
        play: false,
      },
    ];
    props.setSongs(newSongs);
  }

  const playList = props.songs.map((s) => {
    return (
      <Song
        key={s.id}
        id={s.id}
        singer={s.singer}
        song={s.song}
        duration={s.duration}
        play={s.play}
        playToggle={props.playToggle}
      />
    );
  });
  return (
    <div className={style.music}>
      <h2 className={style.title}>Music</h2>
      <SearchMusic
        search={props.search}
        changeSearchField={props.changeSearchField}
        valueInput={props.valueInput}
      />
      <ul className={style.music__list}>{playList}</ul>
    </div>
  );
}
