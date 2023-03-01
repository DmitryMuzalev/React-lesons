const CREATE_NEW_POST = 'CREATE_NEW_POST';
const CHANGE_PROFILE_INPUT = 'CHANGE_PROFILE_INPUT';

const createNewPostCreator = () => ({ type: CREATE_NEW_POST });
const changeProfileInputCreator = (text) => ({
  type: CHANGE_PROFILE_INPUT,
  text: text,
});

const initialState = {
  posts: [
    {
      id: 1,
      message:
        'Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Elit eget gravida cum sociis natoque penatibus et magnis.',
      like: 5,
    },
    {
      id: 2,
      message:
        'Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Augue eget arcu dictum varius duis at consectetur.',
      like: 13,
    },
    {
      id: 3,
      message:
        'Sed enim ut sem viverra aliquet eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.',
      like: 20,
    },
    {
      id: 4,
      message: 'Leo integer malesuada nunc vel risus commodo viverra maecenas.',
      like: 17,
    },
  ],
  valueInput: '',
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: state.valueInput,
            like: 0,
          },
        ],
        valueInput: '',
      };

    case CHANGE_PROFILE_INPUT:
      return { ...state, valueInput: action.text };

    default:
      return state;
  }
}

export { changeProfileInputCreator, createNewPostCreator };
