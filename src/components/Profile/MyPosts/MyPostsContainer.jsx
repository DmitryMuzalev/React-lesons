import { connect } from 'react-redux';
import {
  changeProfileInputCreator,
  createNewPostCreator,
} from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    valueInput: state.profilePage.valueInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandlerClickBtn: () => {
      dispatch(createNewPostCreator());
    },
    onHandlerChangeValueTextarea: (text) => {
      dispatch(changeProfileInputCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
