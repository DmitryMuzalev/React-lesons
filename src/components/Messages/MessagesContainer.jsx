import {
  changeMessageInputCreator,
  createNewMessageCreator,
} from '../../redux/reducers/messagesReducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';

export default function MessagesContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const onHandlerClickBtn = () => {
          store.dispatch(createNewMessageCreator());
        };

        const onHandlerChangeValueTextarea = (text) => {
          store.dispatch(changeMessageInputCreator(text));
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
      }}
    </StoreContext.Consumer>
  );
}
