import { connect } from 'react-redux';
import {
  changeMessageInputCreator,
  createNewMessageCreator,
} from '../../redux/reducers/messagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    persons: state.messagesPage.persons,
    messages: state.messagesPage.messages,
    valueInput: state.messagesPage.valueInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewMessage: () => {
      dispatch(createNewMessageCreator());
    },
    changeMessageInput: (text) => {
      dispatch(changeMessageInputCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
