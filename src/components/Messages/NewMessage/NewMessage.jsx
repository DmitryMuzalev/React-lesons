import React from 'react';
import style from './NewMessage.module.css';

export default function NewMessage(props) {
  let newMessageText = React.createRef();

  const handlerClickBtn = () => {
    let action = { type: 'CREATE-NEW-MESSAGE' };
    props.dispatch(action);
  };

  const handlerChangeValueTextarea = () => {
    let text = newMessageText.current.value;
    let action = { type: 'CHANGE-MESSAGES-INPUT', text: text };
    props.dispatch(action);
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
