import axios from '../../axios';
import User from './User/User';
import style from './Users.module.css';

let Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('/base/users.json').then((users) => {
        props.setUsers(users.data);
      });
    }
  };

  const usersList = props.users.map((u) => {
    return (
      <User
        key={u.id}
        id={u.id}
        name={u.fullName}
        location={u.location}
        status={u.status}
        followed={u.followed}
        followToggle={props.followToggle}
      />
    );
  });

  return (
    <section className={style.users}>
      <h2 className={style.title}>Find users</h2>
      <ul className={style.users__list}>{usersList}</ul>
      <button className={style.users__btn} onClick={getUsers}>
        Show more
      </button>
    </section>
  );
};

export default Users;
