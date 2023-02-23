const CREATE_NEW_POST = 'CREATE-NEW-POST';
const CHANGE_PROFILE_INPUT = 'CHANGE-PROFILE-INPUT';

const createNewPostCreator = () => ({ type: CREATE_NEW_POST });
const changeProfileInputCreator = (text) => ({
  type: CHANGE_PROFILE_INPUT,
  text: text,
});

export default function profileReducer(state, action) {
  switch (action.type) {
    case CREATE_NEW_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.valueInput,
        like: 0,
      };
      state.posts.push(newPost);
      state.valueInput = '';
      return state;
    case CHANGE_PROFILE_INPUT:
      state.valueInput = action.text;

      return state;
    default:
      return state;
  }
}

export { changeProfileInputCreator, createNewPostCreator };
