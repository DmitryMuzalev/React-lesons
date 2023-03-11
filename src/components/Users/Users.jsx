import React from 'react';
import axios from '../../axios';
import User from './User/User';
import style from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios.get('/users').then((users) => {
      this.props.setUsers(users.data.items);
    });
  }

  componentWillUnmount() {
    this.props.deleteUsers();
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
    return (
      <section className={style.users}>
        <h2 className={style.title}>Find users</h2>
        <ul className={style.users__list}>{usersList}</ul>
        {/* <button className={style.users__btn} onClick={this.getUsers}>
          Show more
        </button>*/}
      </section>
    );
  }
}

export default Users;
