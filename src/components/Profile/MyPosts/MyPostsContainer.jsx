import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    valueInput: state.profilePage.valueInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandlerChangeValueTextarea: () => {
      dispatch.createNewPostCreator();
    },
    onHandlerClickBtn: (text) => {
      dispatch.changeProfileInputCreator(text);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
