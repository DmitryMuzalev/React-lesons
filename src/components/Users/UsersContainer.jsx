import React from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import {
  followToggleAC,
  setCurrentPageAC,
  setTotalCountUserAC,
  setUsersAC,
  switchPreloaderToggleAC,
} from '../../redux/reducers/usersReducer';
import Users from './Users.jsx';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalCountUser: state.usersPage.totalCountUser,
    isLoaded: state.usersPage.isLoaded,
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalCountUser: (totalCountUser) => {
      dispatch(setTotalCountUserAC(totalCountUser));
    },
    switchPreloaderToggle: (isLoaded) => {
      dispatch(switchPreloaderToggleAC(isLoaded));
    },
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.switchPreloaderToggle(true);
    axios
      .get(`/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then((users) => {
        this.props.setUsers(users.data.items);
        this.props.setTotalCountUser(users.data.totalCount);
        this.props.switchPreloaderToggle(false);
      });
  }

  handlerClickOnItem = (numberItem) => {
    this.props.setCurrentPage(numberItem);
    this.props.switchPreloaderToggle(true);
    axios
      .get(`/users?count=${this.props.pageSize}&page=${numberItem}`)
      .then((users) => {
        this.props.setUsers(users.data.items);
        this.props.switchPreloaderToggle(false);
      });
  };

  render() {
    return (
      <Users state={this.props} handlerClickOnItem={this.handlerClickOnItem} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
