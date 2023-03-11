import { connect } from 'react-redux';
import {
  deleteUsersAC,
  followToggleAC,
  setCurrentPageAC,
  setTotalCountUserAC,
  setUsersAC,
} from '../../redux/reducers/usersReducer';
import Users from './Users.jsx';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCountUser: state.usersPage.totalCountUser,
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
    deleteUsers: () => {
      dispatch(deleteUsersAC());
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalCountUser: (totalCountUser) => {
      dispatch(setTotalCountUserAC(totalCountUser));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
