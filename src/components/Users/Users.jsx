import User from './User/User';
import style from './Users.module.css';

let Users = (props) => {
  const newUsers = [
    {
      id: 1,
      photo: '../../components/Users/avatar.svg',
      fullName: 'Michael Lawrence',
      location: {
        country: 'Belgium',
        city: 'Brussels',
      },
      status: 'Morning person or night owl?',
      followed: true,
    },
    {
      id: 2,
      photo: '../../components/Users/avatar.svg',
      fullName: 'Sandra Barrett',
      location: {
        country: 'Netherlands',
        city: 'Amsterdam',
      },
      status: 'We build too many walls and not enough bridges - Isaac Newton',
      followed: false,
    },
    {
      id: 3,
      photo: '../../components/Users/avatar.svg',
      fullName: 'Dana Hill',
      location: {
        country: 'Spain',
        city: 'Madrid',
      },
      status: 'Have I told you lately that you’re awesome?',
      followed: false,
    },
  ];

  if (props.users.length === 0) {
    props.setUsers(newUsers);
  }

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
      <h2>Find users:</h2>
      <ul className={style.users__list}>{usersList}</ul>
    </section>
  );
};

export default Users;
