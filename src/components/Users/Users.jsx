import React from 'react';
import axios from '../../axios';
import Pagination from '../Pagination/Pagination';
import User from './User/User';
import style from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then((users) => {
        this.props.setUsers(users.data.items);
        this.props.setTotalCountUser(users.data.totalCount);
      });
  }

  render() {
    const usersList = this.props.users.map((u) => {
      return (
        <User
          key={u.id}
          id={u.id}
          name={u.name}
          status={u.status}
          followed={u.followed}
          followToggle={this.props.followToggle}
        />
      );
    });

    const quantityPage = Math.ceil(
      this.props.totalCountUser / this.props.pageSize
    );

    return (
      <section className={style.users}>
        <h2 className={style.title}>Find users</h2>
        <ul className={style.users__list}>{usersList}</ul>
        <Pagination
          quantityPage={quantityPage}
          currentPage={this.props.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          pageSize={this.props.pageSize}
          setUsers={this.props.setUsers}
        />
      </section>
    );
  }
}

export default Users;
