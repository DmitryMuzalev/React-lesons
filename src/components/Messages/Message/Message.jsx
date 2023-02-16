import style from './Message.module.css';

export default function Message(props) {
  return <div className={style.messages__item}>{props.text}</div>;
}
