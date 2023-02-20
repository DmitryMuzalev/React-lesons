import React from 'react';
import style from './NewMessage.module.css';

export default function NewMessage(props) {
  let newMessageText = React.createRef();
  const handlerClickBtn = () => {
    let text = newMessageText.current.value;
    newMessageText.current.value = '';
    props.createNewMessage(text);
  };
  return (
    <div className={style.newMessage}>
      <textarea
        ref={newMessageText}
        className={style.newMessage__input}
        placeholder="your message..."
      ></textarea>
      <button className={style.newMessage__btn} onClick={handlerClickBtn}>
        Send
      </button>
    </div>
  );
}
