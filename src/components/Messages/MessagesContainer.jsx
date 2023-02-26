import {
  changeMessageInputCreator,
  createNewMessageCreator,
} from '../../redux/reducers/messagesReducer';
import Messages from './Messages';

export default function MessagesContainer(props) {
  const state = props.store.getState();

  const onHandlerClickBtn = () => {
    props.store.dispatch(createNewMessageCreator());
  };

  const onHandlerChangeValueTextarea = (text) => {
    props.store.dispatch(changeMessageInputCreator(text));
  };

  return (
    <Messages
      persons={state.messagesPage.persons}
      messages={state.messagesPage.messages}
      valueInput={state.messagesPage.valueInput}
      createNewMessage={onHandlerClickBtn}
      changeMessageInput={onHandlerChangeValueTextarea}
    />
  );
}
