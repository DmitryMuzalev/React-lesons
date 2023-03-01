//_ActionType:
const CREATE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE';
const CHANGE_MESSAGES_INPUT = 'CHANGE_MESSAGES_INPUT';

//_ActionCreator:
const createNewMessageCreator = () => ({ type: CREATE_NEW_MESSAGE });
const changeMessageInputCreator = (text) => ({
  type: CHANGE_MESSAGES_INPUT,
  text: text,
});

const initialState = {
  messages: [
    {
      id: 1,
      text: 'Id velit ut tortor pretium viverra suspendisse potenti nullam ac.Purus gravida quis blandit turpis cursus.',
    },
    { id: 2, text: 'Ut porttitor leo a diam sollicitudin tempor id eu nisl.' },
    {
      id: 3,
      text: 'Non sodales neque sodales ut etiam sit amet nisl. Morbi blandit cursus risus at ultrices mi tempus.',
    },
    {
      id: 4,
      text: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.',
    },
    {
      id: 5,
      text: 'Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut morbi tincidunt augue interdum.',
    },
  ],
  valueInput: '',
  persons: [
    { name: 'John', id: 1 },
    { name: 'Oliver', id: 2 },
    { name: 'Harry', id: 3 },
    { name: 'Charley', id: 4 },
    { name: 'Oscar', id: 5 },
    { name: 'Noah', id: 6 },
  ],
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, text: state.valueInput },
        ],
        valueInput: '',
      };

    case CHANGE_MESSAGES_INPUT: {
      return { ...state, valueInput: action.text };
    }

    default:
      return state;
  }
}

export { createNewMessageCreator, changeMessageInputCreator };
