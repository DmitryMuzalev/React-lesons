import style from './Users.module.css';
import Pagination from '../Pagination/Pagination';
import User from './User/User';

const Users = (props) => {
  const usersList = props.state.users.map((u) => {
    return (
      <User
        key={u.id}
        id={u.id}
        name={u.name}
        status={u.status}
        followed={u.followed}
        followToggle={props.state.followToggle}
      />
    );
  });

  const quantityPage = Math.ceil(
    props.state.totalCountUser / props.state.pageSize
  );

  return (
    <section className={style.users}>
      <h2 className={style.title}>Find users</h2>
      <ul className={style.users__list}>{usersList}</ul>
      <Pagination
        quantityPage={quantityPage}
        currentPage={props.state.currentPage}
        setCurrentPage={props.state.setCurrentPage}
        pageSize={props.state.pageSize}
        setUsers={props.state.setUsers}
        handlerClickOnItem={props.handlerClickOnItem}
      />
    </section>
  );
};

export default Users;
