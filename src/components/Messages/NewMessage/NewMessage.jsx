import React from 'react';
import style from './NewMessage.module.css';

export default function NewMessage(props) {
  let newMessageText = React.createRef();

  const handlerClickBtn = () => {
    props.createNewMessage();
  };

  const handlerChangeValueTextarea = () => {
    let text = newMessageText.current.value;
    props.changeMessagesInput(text);
  };

  return (
    <div className={style.newMessage}>
      <textarea
        ref={newMessageText}
        className={style.newMessage__input}
        placeholder="your message..."
        value={props.valueInput}
        onChange={handlerChangeValueTextarea}
      ></textarea>
      <button className={style.newMessage__btn} onClick={handlerClickBtn}>
        Send
      </button>
    </div>
  );
}
