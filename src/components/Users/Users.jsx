import User from './User/User';
import style from './Users.module.css';

export default function Users(props) {
  //const usersList = props.users.map((u) => <User />);

  return (
    <section className={style.users}>
      <h2>Find users:</h2>
      <ul className={style.users__list}>
        <User />
        <User />
        <User />
      </ul>
    </section>
  );
}
