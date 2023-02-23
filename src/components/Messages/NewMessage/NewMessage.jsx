import React from 'react';
import {
  changeMessageInputCreator,
  createNewMessageCreator,
} from '../../../redux/reducers/messagesReducer';

import style from './NewMessage.module.css';

export default function NewMessage(props) {
  let newMessageText = React.createRef();

  const handlerClickBtn = () => {
    props.dispatch(createNewMessageCreator());
  };

  const handlerChangeValueTextarea = () => {
    let text = newMessageText.current.value;
    props.dispatch(changeMessageInputCreator(text));
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
