import { connect } from 'react-redux';
import { followToggleAC, setUsersAC } from '../../redux/reducers/usersReducer';
import Users from './Users.jsx';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followToggle: (userID) => {
      dispatch(followToggleAC(userID));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
