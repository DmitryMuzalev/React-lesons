import React from 'react';
import style from './NewMessage.module.css';

export default function NewMessage() {
  let newMessageText = React.createRef();
  const handlerClickBtn = () => {
    alert(newMessageText.current.value);
  };
  return (
    <div className={style.newMessage}>
      <textarea
        ref={newMessageText}
        className={style.newMessage__input}
      ></textarea>
      <button className={style.newMessage__btn} onClick={handlerClickBtn}>
        Send
      </button>
    </div>
  );
}