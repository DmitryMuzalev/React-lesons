//_ActionType:
const CREATE_NEW_MESSAGE = 'CREATE-NEW-MESSAGE';
const CHANGE_MESSAGES_INPUT = 'CHANGE-MESSAGES-INPUT';

//_ActionCreator:
const createNewMessageCreator = () => ({ type: CREATE_NEW_MESSAGE });
const changeMessageInputCreator = (text) => ({
  type: CHANGE_MESSAGES_INPUT,
  text: text,
});

export default function messagesReducer(state, action) {
  switch (action.type) {
    case CREATE_NEW_MESSAGE:
      let newMessage = {
        text: state.valueInput,
      };
      state.messages.push(newMessage);
      state.valueInput = '';
      return state;
    case CHANGE_MESSAGES_INPUT:
      state.valueInput = action.text;
      return state;
    default:
      return state;
  }
}

export { createNewMessageCreator, changeMessageInputCreator };
