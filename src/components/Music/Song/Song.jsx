import play from './play.svg';
import pause from './pause.svg';
import style from './Song.module.css';

export default function Song(props) {
  return (
    <div className={style.song}>
      <div className={style.song__play}>
        <img src={props.play ? pause : play} alt="play" />
      </div>
      <div className={style.song__body}>
        <p className={style.song__track}>
          <span>
            <a href="#singer" className={style.song__singer}>
              {props.singer}
            </a>
          </span>
          - <span className={style.song__name}>{props.song}</span>
        </p>
        <div className={style.song__time}>{props.duration}</div>
      </div>
    </div>
  );
}
